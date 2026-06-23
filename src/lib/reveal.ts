// Reveal (versi minimal, frontend-only): enkripsi exploit ke public key creator.
// Cuma private key creator yang bisa dekripsi. Pakai TweetNaCl (X25519 box) +
// pola "sealed box" (ephemeral sender keypair → pengirim anonim).
import nacl from 'tweetnacl'

const enc = (s: string) => new TextEncoder().encode(s)
const dec = (b: Uint8Array) => new TextDecoder().decode(b)

function toB64(b: Uint8Array): string {
  let s = ''
  for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i])
  return btoa(s)
}
function fromB64(s: string): Uint8Array {
  const bin = atob(s.trim())
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}

/** Creator bikin keypair (public dibagi, secret disimpan rahasia). */
export function generateKeypair(): { publicKey: string; secretKey: string } {
  const kp = nacl.box.keyPair()
  return { publicKey: toB64(kp.publicKey), secretKey: toB64(kp.secretKey) }
}

/** Hunter enkripsi pesan ke public key creator → satu string base64 (eph|nonce|cipher). */
export function encryptForCreator(message: string, creatorPubB64: string): string {
  const creatorPub = fromB64(creatorPubB64)
  if (creatorPub.length !== 32) throw new Error('public key creator tidak valid')
  const eph = nacl.box.keyPair()
  const nonce = nacl.randomBytes(nacl.box.nonceLength)
  const cipher = nacl.box(enc(message), nonce, creatorPub, eph.secretKey)
  const packed = new Uint8Array(eph.publicKey.length + nonce.length + cipher.length)
  packed.set(eph.publicKey, 0)
  packed.set(nonce, eph.publicKey.length)
  packed.set(cipher, eph.publicKey.length + nonce.length)
  return toB64(packed)
}

/** Creator dekripsi pakai secret key-nya. */
export function decryptAsCreator(packedB64: string, secretB64: string): string {
  const packed = fromB64(packedB64)
  const secret = fromB64(secretB64)
  if (secret.length !== 32) throw new Error('private key tidak valid')
  const ephPub = packed.slice(0, 32)
  const nonce = packed.slice(32, 32 + nacl.box.nonceLength)
  const cipher = packed.slice(32 + nacl.box.nonceLength)
  const msg = nacl.box.open(cipher, nonce, ephPub, secret)
  if (!msg) throw new Error('dekripsi gagal — kunci salah / ciphertext rusak')
  return dec(msg)
}
