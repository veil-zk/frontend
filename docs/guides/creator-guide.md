# For bounty creators

You are the party putting up a reward against a deployed contract. You provide three things: the **target**, the **rule** (guest ImageID), and the **reward**.

## Before you open a bounty

The "rule" that defines a valid exploit is the **guest program**. Whoever writes the guest defines what counts as a bug — so it's written by the creator (or a trusted auditor) **before** the bounty opens, and published open-source so hunters can audit it. The hunter only supplies a secret input; they never touch the logic.

You get the guest's **ImageID** in one of two ways:

* **Compile locally (default, most trustworthy):** write/edit the guest, `cargo run --release --bin imageid` to print the ImageID. You keep full control.
* **Backend compile service (optional convenience):** paste the guest in the UI and let the server compile it. Easier, but you trust the server to produce the correct ImageID. Fine for a PoC.

> An AI-assisted draft generator is also available (the AI writes a first draft of the guest; you review, edit, and compile). The AI never replaces the human review + compile step.

## Opening a bounty (UI)

1. Connect Freighter as the **creator** account.
2. Go to **Create** and fill in:

| Field | Example |
| --- | --- |
| Victim contract address | the deployed contract being tested |
| Title / Description | shown on the bounty card, stored **on-chain** |
| Guest ImageID | `3b7ef925…` (64 hex) |
| Reward | `100` XLM |
| Hunter stake | `10` XLM |
| Reveal deadline (sec) | `3600` |
| Escape window (sec) | `1800` |

3. Click **🔑 Generate key** and **save the private key** it shows. This is your **reveal key** — you'll need it to read and confirm the hunter's exploit. It is **not** a wallet key; never paste a wallet secret here.
4. Click **Open bounty & lock reward** → approve **two signatures** in Freighter (`create_bounty`, then `fund`).

Your bounty now appears in the list as OPEN.

## When a hunter claims and reveals

1. The hunter claims (their reward is paid, their stake is locked) and sends you an **encrypted ciphertext** off-chain (email, chat, etc.).
2. Open the bounty's **Detail** page. In the **🔓 Read & verify** panel:
   * paste the **ciphertext** from the hunter,
   * paste your **reveal private key**,
   * click **Decrypt & verify**.
3. If you see **✅ "fingerprint matches the proof"**, the reveal is genuine — the hunter cannot have faked it. Click **Confirm & release stake**. The stake returns to the hunter; you now have the exact exploit (`a`, `b`, `salt`) and can patch your contract.

## If the hunter never reveals

After the reveal deadline passes, anyone (including you) can call **forfeit** on the Detail page — the stake transfers to you as compensation.

## Notes

* You can re-decrypt and re-read the exploit any time later, as long as you keep the ciphertext and your private key. Veil never stores the exploit anywhere.
* The reveal private key is unrelated to your wallet. Losing it means you can't read reveals for that bounty — so store it safely.
