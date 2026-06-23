(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XdrDefinitionError",
    ()=>XdrDefinitionError,
    "XdrNotImplementedDefinitionError",
    ()=>XdrNotImplementedDefinitionError,
    "XdrReaderError",
    ()=>XdrReaderError,
    "XdrWriterError",
    ()=>XdrWriterError
]);
class XdrWriterError extends TypeError {
    constructor(message){
        super(`XDR Write Error: ${message}`);
    }
}
class XdrReaderError extends TypeError {
    constructor(message){
        super(`XDR Read Error: ${message}`);
    }
}
class XdrDefinitionError extends TypeError {
    constructor(message){
        super(`XDR Type Definition Error: ${message}`);
    }
}
class XdrNotImplementedDefinitionError extends XdrDefinitionError {
    constructor(){
        super(`method not implemented, it should be overloaded in the descendant class.`);
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/serialization/xdr-reader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XdrReader",
    ()=>XdrReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
class XdrReader {
    /**
   * @constructor
   * @param {Buffer} source - Buffer containing serialized data
   */ constructor(source){
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(source)) {
            if (source instanceof Array || Array.isArray(source) || ArrayBuffer.isView(source)) {
                source = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(source);
            } else {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReaderError"](`source invalid: ${source}`);
            }
        }
        this._buffer = source;
        this._length = source.length;
        this._index = 0;
    }
    /**
   * @type {Buffer}
   * @private
   * @readonly
   */ _buffer;
    /**
   * @type {Number}
   * @private
   * @readonly
   */ _length;
    /**
   * @type {Number}
   * @private
   * @readonly
   */ _index;
    /**
   * Check if the reader reached the end of the input buffer
   * @return {Boolean}
   */ get eof() {
        return this._index === this._length;
    }
    /**
   * Advance reader position, check padding and overflow
   * @param {Number} size - Bytes to read
   * @return {Number} Position to read from
   * @private
   */ advance(size) {
        const from = this._index;
        // advance cursor position
        this._index += size;
        // check buffer boundaries
        if (this._length < this._index) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReaderError"]('attempt to read outside the boundary of the buffer');
        // check that padding is correct for Opaque and String
        const padding = 4 - (size % 4 || 4);
        if (padding > 0) {
            for(let i = 0; i < padding; i++)if (this._buffer[this._index + i] !== 0) // all bytes in the padding should be zeros
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReaderError"]('invalid padding');
            this._index += padding;
        }
        return from;
    }
    /**
   * Reset reader position
   * @return {void}
   */ rewind() {
        this._index = 0;
    }
    /**
   * Remaining unread bytes in the source buffer
   * @return {Number}
   */ remainingBytes() {
        return this._length - this._index;
    }
    /**
   * Read byte array from the buffer
   * @param {Number} size - Bytes to read
   * @return {Buffer} - Sliced portion of the underlying buffer
   */ read(size) {
        const from = this.advance(size);
        return this._buffer.subarray(from, from + size);
    }
    /**
   * Read i32 from buffer
   * @return {Number}
   */ readInt32BE() {
        return this._buffer.readInt32BE(this.advance(4));
    }
    /**
   * Read u32 from buffer
   * @return {Number}
   */ readUInt32BE() {
        return this._buffer.readUInt32BE(this.advance(4));
    }
    /**
   * Read i64 from buffer
   * @return {BigInt}
   */ readBigInt64BE() {
        return this._buffer.readBigInt64BE(this.advance(8));
    }
    /**
   * Read u64 from buffer
   * @return {BigInt}
   */ readBigUInt64BE() {
        return this._buffer.readBigUInt64BE(this.advance(8));
    }
    /**
   * Read float from buffer
   * @return {Number}
   */ readFloatBE() {
        return this._buffer.readFloatBE(this.advance(4));
    }
    /**
   * Read double from buffer
   * @return {Number}
   */ readDoubleBE() {
        return this._buffer.readDoubleBE(this.advance(8));
    }
    /**
   * Ensure that input buffer has been consumed in full, otherwise it's a type mismatch
   * @return {void}
   * @throws {XdrReaderError}
   */ ensureInputConsumed() {
        if (this._index !== this._length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReaderError"](`invalid XDR contract typecast - source buffer not entirely consumed`);
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/serialization/xdr-writer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XdrWriter",
    ()=>XdrWriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/buffer/index.js [app-client] (ecmascript)");
;
const BUFFER_CHUNK = 8192; // 8 KB chunk size increment
/**
 * @internal
 */ class XdrWriter {
    /**
   * @param {Buffer|Number} [buffer] - Optional destination buffer
   */ constructor(buffer){
        if (typeof buffer === 'number') {
            buffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(buffer);
        } else if (!(buffer instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"])) {
            buffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(BUFFER_CHUNK);
        }
        this._buffer = buffer;
        this._length = buffer.length;
    }
    /**
   * @type {Buffer}
   * @private
   * @readonly
   */ _buffer;
    /**
   * @type {Number}
   * @private
   * @readonly
   */ _length;
    /**
   * @type {Number}
   * @private
   * @readonly
   */ _index = 0;
    /**
   * Advance writer position, write padding if needed, auto-resize the buffer
   * @param {Number} size - Bytes to write
   * @return {Number} Position to read from
   * @private
   */ alloc(size) {
        const from = this._index;
        // advance cursor position
        this._index += size;
        // ensure sufficient buffer size
        if (this._length < this._index) {
            this.resize(this._index);
        }
        return from;
    }
    /**
   * Increase size of the underlying buffer
   * @param {Number} minRequiredSize - Minimum required buffer size
   * @return {void}
   * @private
   */ resize(minRequiredSize) {
        // calculate new length, align new buffer length by chunk size
        const newLength = Math.ceil(minRequiredSize / BUFFER_CHUNK) * BUFFER_CHUNK;
        // create new buffer and copy previous data
        const newBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(newLength);
        this._buffer.copy(newBuffer, 0, 0, this._length);
        // update references
        this._buffer = newBuffer;
        this._length = newLength;
    }
    /**
   * Return XDR-serialized value
   * @return {Buffer}
   */ finalize() {
        // clip underlying buffer to the actually written value
        return this._buffer.subarray(0, this._index);
    }
    /**
   * Return XDR-serialized value as byte array
   * @return {Number[]}
   */ toArray() {
        return [
            ...this.finalize()
        ];
    }
    /**
   * Write byte array from the buffer
   * @param {Buffer|String} value - Bytes/string to write
   * @param {Number} size - Size in bytes
   * @return {XdrReader} - XdrReader wrapper on top of a subarray
   */ write(value, size) {
        if (typeof value === 'string') {
            // serialize string directly to the output buffer
            const offset = this.alloc(size);
            this._buffer.write(value, offset, 'utf8');
        } else {
            // copy data to the output buffer
            if (!(value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"])) {
                value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(value);
            }
            const offset = this.alloc(size);
            value.copy(this._buffer, offset, 0, size);
        }
        // add padding for 4-byte XDR alignment
        const padding = 4 - (size % 4 || 4);
        if (padding > 0) {
            const offset = this.alloc(padding);
            this._buffer.fill(0, offset, this._index);
        }
    }
    /**
   * Write i32 from buffer
   * @param {Number} value - Value to serialize
   * @return {void}
   */ writeInt32BE(value) {
        const offset = this.alloc(4);
        this._buffer.writeInt32BE(value, offset);
    }
    /**
   * Write u32 from buffer
   * @param {Number} value - Value to serialize
   * @return {void}
   */ writeUInt32BE(value) {
        const offset = this.alloc(4);
        this._buffer.writeUInt32BE(value, offset);
    }
    /**
   * Write i64 from buffer
   * @param {BigInt} value - Value to serialize
   * @return {void}
   */ writeBigInt64BE(value) {
        const offset = this.alloc(8);
        this._buffer.writeBigInt64BE(value, offset);
    }
    /**
   * Write u64 from buffer
   * @param {BigInt} value - Value to serialize
   * @return {void}
   */ writeBigUInt64BE(value) {
        const offset = this.alloc(8);
        this._buffer.writeBigUInt64BE(value, offset);
    }
    /**
   * Write float from buffer
   * @param {Number} value - Value to serialize
   * @return {void}
   */ writeFloatBE(value) {
        const offset = this.alloc(4);
        this._buffer.writeFloatBE(value, offset);
    }
    /**
   * Write double from buffer
   * @param {Number} value - Value to serialize
   * @return {void}
   */ writeDoubleBE(value) {
        const offset = this.alloc(8);
        this._buffer.writeDoubleBE(value, offset);
    }
    static bufferChunkSize = BUFFER_CHUNK;
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NestedXdrType",
    ()=>NestedXdrType,
    "XdrCompositeType",
    ()=>XdrCompositeType,
    "XdrPrimitiveType",
    ()=>XdrPrimitiveType,
    "hasConstructor",
    ()=>hasConstructor,
    "isSerializableIsh",
    ()=>isSerializableIsh
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$serialization$2f$xdr$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/serialization/xdr-reader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$serialization$2f$xdr$2d$writer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/serialization/xdr-writer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
;
;
class XdrType {
    /**
   * Encode value to XDR format
   * @param {XdrEncodingFormat} [format] - Encoding format (one of "raw", "hex", "base64")
   * @return {String|Buffer}
   */ toXDR(format = 'raw') {
        if (!this.write) return this.constructor.toXDR(this, format);
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$serialization$2f$xdr$2d$writer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriter"]();
        this.write(this, writer);
        return encodeResult(writer.finalize(), format);
    }
    /**
   * Decode XDR-encoded value
   * @param {Buffer|String} input - XDR-encoded input data
   * @param {XdrEncodingFormat} [format] - Encoding format (one of "raw", "hex", "base64")
   * @return {this}
   */ fromXDR(input, format = 'raw') {
        if (!this.read) return this.constructor.fromXDR(input, format);
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$serialization$2f$xdr$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReader"](decodeInput(input, format));
        const result = this.read(reader);
        reader.ensureInputConsumed();
        return result;
    }
    /**
   * Check whether input contains a valid XDR-encoded value
   * @param {Buffer|String} input - XDR-encoded input data
   * @param {XdrEncodingFormat} [format] - Encoding format (one of "raw", "hex", "base64")
   * @return {Boolean}
   */ validateXDR(input, format = 'raw') {
        try {
            this.fromXDR(input, format);
            return true;
        } catch (e) {
            return false;
        }
    }
    /**
   * Encode value to XDR format
   * @param {this} value - Value to serialize
   * @param {XdrEncodingFormat} [format] - Encoding format (one of "raw", "hex", "base64")
   * @return {Buffer}
   */ static toXDR(value, format = 'raw') {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$serialization$2f$xdr$2d$writer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriter"]();
        this.write(value, writer);
        return encodeResult(writer.finalize(), format);
    }
    /**
   * Decode XDR-encoded value
   * @param {Buffer|String} input - XDR-encoded input data
   * @param {XdrEncodingFormat} [format] - Encoding format (one of "raw", "hex", "base64")
   * @return {this}
   */ static fromXDR(input, format = 'raw') {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$serialization$2f$xdr$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReader"](decodeInput(input, format));
        const result = this.read(reader);
        reader.ensureInputConsumed();
        return result;
    }
    /**
   * Check whether input contains a valid XDR-encoded value
   * @param {Buffer|String} input - XDR-encoded input data
   * @param {XdrEncodingFormat} [format] - Encoding format (one of "raw", "hex", "base64")
   * @return {Boolean}
   */ static validateXDR(input, format = 'raw') {
        try {
            this.fromXDR(input, format);
            return true;
        } catch (e) {
            return false;
        }
    }
}
class XdrPrimitiveType extends XdrType {
    /**
   * Read value from the XDR-serialized input
   * @param {XdrReader} reader - XdrReader instance
   * @return {this}
   * @abstract
   */ // eslint-disable-next-line no-unused-vars
    static read(reader) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrNotImplementedDefinitionError"]();
    }
    /**
   * Write XDR value to the buffer
   * @param {this} value - Value to write
   * @param {XdrWriter} writer - XdrWriter instance
   * @return {void}
   * @abstract
   */ // eslint-disable-next-line no-unused-vars
    static write(value, writer) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrNotImplementedDefinitionError"]();
    }
    /**
   * Check whether XDR primitive value is valid
   * @param {this} value - Value to check
   * @return {Boolean}
   * @abstract
   */ // eslint-disable-next-line no-unused-vars
    static isValid(value) {
        return false;
    }
}
class XdrCompositeType extends XdrType {
    // Every descendant should implement two methods: read(reader) and write(value, writer)
    /**
   * Check whether XDR primitive value is valid
   * @param {this} value - Value to check
   * @return {Boolean}
   * @abstract
   */ // eslint-disable-next-line no-unused-vars
    isValid(value) {
        return false;
    }
}
class NestedXdrType extends XdrCompositeType {
    /**
   * @constructor
   * @param {number} maxDepth - Maximum allowed depth for nested structures (e.g. arrays of arrays), to prevent DoS via excessively deep nesting
   */ constructor(maxDepth){
        super();
        this._maxDepth = maxDepth ?? NestedXdrType.DEFAULT_MAX_DEPTH;
    }
    /**
   * Check remaining depth budget and throw if exceeded
   * @param {number} remainingDepth - Remaining recursion budget
   * @returns {void}
   * @throws {XdrReaderError} If remaining depth budget is exhausted
   * @throws {TypeError} If remainingDepth is not a finite number
   * @protected
   */ static checkDepth(remainingDepth) {
        if (remainingDepth === undefined) return;
        if (!Number.isFinite(remainingDepth)) {
            throw new TypeError(`remainingDepth (current remaining decoding depth budget) must be a finite number, got ${typeof remainingDepth}: ${remainingDepth}`);
        }
        if (remainingDepth < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReaderError"]('exceeded max decoding depth');
        }
    }
}
NestedXdrType.DEFAULT_MAX_DEPTH = 200;
NestedXdrType._maxDepth = NestedXdrType.DEFAULT_MAX_DEPTH;
class InvalidXdrEncodingFormatError extends TypeError {
    constructor(format){
        super(`Invalid format ${format}, must be one of "raw", "hex", "base64"`);
    }
}
function encodeResult(buffer, format) {
    switch(format){
        case 'raw':
            return buffer;
        case 'hex':
            return buffer.toString('hex');
        case 'base64':
            return buffer.toString('base64');
        default:
            throw new InvalidXdrEncodingFormatError(format);
    }
}
function decodeInput(input, format) {
    switch(format){
        case 'raw':
            return input;
        case 'hex':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(input, 'hex');
        case 'base64':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(input, 'base64');
        default:
            throw new InvalidXdrEncodingFormatError(format);
    }
}
/**
 * Provides a "duck typed" version of the native `instanceof` for read/write.
 *
 * "Duck typing" means if the parameter _looks like_ and _acts like_ a duck
 * (i.e. the type we're checking), it will be treated as that type.
 *
 * In this case, the "type" we're looking for is "like XdrType" but also "like
 * XdrCompositeType|XdrPrimitiveType" (i.e. serializable), but also conditioned
 * on a particular subclass of "XdrType" (e.g. {@link Union} which extends
 * XdrType).
 *
 * This makes the package resilient to downstream systems that may be combining
 * many versions of a package across its stack that are technically compatible
 * but fail `instanceof` checks due to cross-pollination.
 */ function isSerializableIsh(value, subtype) {
    return value !== undefined && value !== null && // prereqs, otherwise `getPrototypeOf` pops
    (value instanceof subtype || hasConstructor(value, subtype) && // ensure it has read/write methods, then
    typeof value.constructor.read === 'function' && typeof value.constructor.write === 'function' && // ensure XdrType is in the prototype chain
    hasConstructor(value, 'XdrType'));
}
/** Tries to find `subtype` in any of the constructors or meta of `instance`. */ function hasConstructor(instance, subtype) {
    do {
        const ctor = instance.constructor;
        if (ctor.name === subtype) {
            return true;
        }
    // eslint-disable-next-line no-cond-assign
    }while (instance = Object.getPrototypeOf(instance))
    return false;
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/int.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Int",
    ()=>Int
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
const MAX_VALUE = 2147483647;
const MIN_VALUE = -2147483648;
class Int extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrPrimitiveType"] {
    /**
   * @inheritDoc
   */ static read(reader) {
        return reader.readInt32BE();
    }
    /**
   * @inheritDoc
   */ static write(value, writer) {
        if (typeof value !== 'number') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"]('not a number');
        if ((value | 0) !== value) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"]('invalid i32 value');
        writer.writeInt32BE(value);
    }
    /**
   * @inheritDoc
   */ static isValid(value) {
        if (typeof value !== 'number' || (value | 0) !== value) {
            return false;
        }
        return value >= MIN_VALUE && value <= MAX_VALUE;
    }
}
Int.MAX_VALUE = MAX_VALUE;
Int.MIN_VALUE = -MIN_VALUE;
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/bigint-encoder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateBigIntBoundaries",
    ()=>calculateBigIntBoundaries,
    "encodeBigIntFromBits",
    ()=>encodeBigIntFromBits,
    "formatIntName",
    ()=>formatIntName,
    "sliceBigInt",
    ()=>sliceBigInt
]);
/**
 * Encode a native `bigint` value from a list of arbitrary integer-like values.
 *
 * @param {Array<number|bigint|string>} parts - Slices to encode in big-endian
 *    format (i.e. earlier elements are higher bits)
 * @param {64|128|256} size - Number of bits in the target integer type
 * @param {boolean} unsigned - Whether it's an unsigned integer
 *
 * @returns {bigint}
 */ function encodeBigIntFromBits(parts, size, unsigned) {
    if (!(parts instanceof Array)) {
        // allow a single parameter instead of an array
        parts = [
            parts
        ];
    } else if (parts.length && parts[0] instanceof Array) {
        // unpack nested array param
        parts = parts[0];
    }
    const total = parts.length;
    const sliceSize = size / total;
    switch(sliceSize){
        case 32:
        case 64:
        case 128:
        case 256:
            break;
        default:
            throw new RangeError(`expected slices to fit in 32/64/128/256 bits, got ${parts}`);
    }
    // normalize all inputs to bigint
    try {
        for(let i = 0; i < parts.length; i++){
            if (typeof parts[i] !== 'bigint') {
                parts[i] = BigInt(parts[i].valueOf());
            }
        }
    } catch (e) {
        throw new TypeError(`expected bigint-like values, got: ${parts} (${e})`);
    }
    // fast path: single value — validate and return directly without assembly
    if (parts.length === 1) {
        const value = parts[0];
        if (unsigned && value < 0n) {
            throw new RangeError(`expected a positive value, got: ${parts}`);
        }
        const [min, max] = calculateBigIntBoundaries(size, unsigned);
        if (value < min || value > max) {
            throw new RangeError(`bigint value ${value} for ${formatIntName(size, unsigned)} out of range [${min}, ${max}]`);
        }
        return value;
    }
    // multi-part assembly: encode in big-endian fashion, shifting each slice
    let result = 0n;
    for(let i = 0; i < parts.length; i++){
        assertSliceFits(parts[i], sliceSize);
        result |= BigInt.asUintN(sliceSize, parts[i]) << BigInt(i * sliceSize);
    }
    if (!unsigned) {
        result = BigInt.asIntN(size, result);
    }
    // check boundaries
    const [min, max] = calculateBigIntBoundaries(size, unsigned);
    if (result >= min && result <= max) {
        return result;
    }
    // failed to encode
    throw new RangeError(`bigint values [${parts}] for ${formatIntName(size, unsigned)} out of range [${min}, ${max}]: ${result}`);
}
/**
 * Transforms a single bigint value that's supposed to represent a `size`-bit
 * integer into a list of `sliceSize`d chunks.
 *
 * @param {bigint} value - Single bigint value to decompose
 * @param {64|128|256} iSize - Number of bits represented by `value`
 * @param {32|64|128} sliceSize - Number of chunks to decompose into
 * @return {bigint[]} List of signed bigint chunks in big-endian order (i.e. earlier elements are higher bits)
 */ function sliceBigInt(value, iSize, sliceSize) {
    if (typeof value !== 'bigint') {
        throw new TypeError(`Expected bigint 'value', got ${typeof value}`);
    }
    const total = iSize / sliceSize;
    if (total === 1) {
        return [
            value
        ];
    }
    if (sliceSize < 32 || sliceSize > 128 || total !== 2 && total !== 4 && total !== 8) {
        throw new TypeError(`invalid bigint (${value}) and slice size (${iSize} -> ${sliceSize}) combination`);
    }
    const shift = BigInt(sliceSize);
    // iterate shift and mask application
    const result = new Array(total);
    for(let i = 0; i < total; i++){
        // we force a signed interpretation to preserve sign in each slice value,
        // but downstream can convert to unsigned if it's appropriate
        result[i] = BigInt.asIntN(sliceSize, value); // clamps to size
        // move on to the next chunk
        value >>= shift;
    }
    return result;
}
function formatIntName(precision, unsigned) {
    return `${unsigned ? 'u' : 'i'}${precision}`;
}
/**
 * Get min|max boundaries for an integer with a specified bits size
 * @param {64|128|256} size - Number of bits in the source integer type
 * @param {Boolean} unsigned - Whether it's an unsigned integer
 * @return {BigInt[]}
 */ function calculateBigIntBoundaries(size, unsigned) {
    if (unsigned) {
        return [
            0n,
            (1n << BigInt(size)) - 1n
        ];
    }
    const boundary = 1n << BigInt(size - 1);
    return [
        0n - boundary,
        boundary - 1n
    ];
}
/**
 * Asserts that a given part fits within the specified slice size.
 * @param {bigint | number | string} part - The part to check.
 * @param {number} sliceSize - The size of the slice in bits (e.g., 32, 64, 128)
 * @returns {void}
 * @throws {RangeError} If the part does not fit within the slice size.
 */ function assertSliceFits(part, sliceSize) {
    const fitsSigned = BigInt.asIntN(sliceSize, part) === part;
    const fitsUnsigned = BigInt.asUintN(sliceSize, part) === part;
    if (!fitsSigned && !fitsUnsigned) {
        throw new RangeError(`slice value ${part} does not fit in ${sliceSize} bits`);
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/large-int.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LargeInt",
    ()=>LargeInt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$bigint$2d$encoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/bigint-encoder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
;
class LargeInt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrPrimitiveType"] {
    /**
   * @param {Array<Number|BigInt|String>} parts - Slices to encode
   */ constructor(args){
        super();
        this._value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$bigint$2d$encoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeBigIntFromBits"])(args, this.size, this.unsigned);
    }
    /**
   * Signed/unsigned representation
   * @type {Boolean}
   * @abstract
   */ get unsigned() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrNotImplementedDefinitionError"]();
    }
    /**
   * Size of the integer in bits
   * @type {Number}
   * @abstract
   */ get size() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrNotImplementedDefinitionError"]();
    }
    /**
   * Slice integer to parts with smaller bit size
   * @param {32|64|128} sliceSize - Size of each part in bits
   * @return {BigInt[]}
   */ slice(sliceSize) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$bigint$2d$encoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceBigInt"])(this._value, this.size, sliceSize);
    }
    toString() {
        return this._value.toString();
    }
    toJSON() {
        return {
            _value: this._value.toString()
        };
    }
    toBigInt() {
        return BigInt(this._value);
    }
    /**
   * @inheritDoc
   */ static read(reader) {
        const { size, unsigned } = this.prototype;
        if (size === 64) {
            return new this(unsigned ? reader.readBigUInt64BE() : reader.readBigInt64BE());
        }
        return new this(...Array.from({
            length: size / 64
        }, ()=>reader.readBigUInt64BE()).reverse());
    }
    /**
   * @inheritDoc
   */ static write(value, writer) {
        if (value instanceof this) {
            value = value._value;
        } else if (typeof value !== 'bigint' || value > this.MAX_VALUE || value < this.MIN_VALUE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"](`${value} is not a ${this.name}`);
        const { unsigned, size } = this.prototype;
        if (size === 64) {
            if (unsigned) {
                writer.writeBigUInt64BE(value);
            } else {
                writer.writeBigInt64BE(value);
            }
        } else {
            // extract 64-bit chunks directly from bigint, big-endian order
            // This does not use sliceBigint since it returns slices as signed values,
            // which is not what we want for encoding
            const uvalue = unsigned ? value : BigInt.asUintN(size, value);
            for(let i = size / 64 - 1; i >= 0; i--){
                writer.writeBigUInt64BE(uvalue >> BigInt(i * 64) & 0xffffffffffffffffn // 2^64-1
                );
            }
        }
    }
    /**
   * @inheritDoc
   */ static isValid(value) {
        if (value instanceof this) return true;
        if (typeof value === 'bigint') {
            return value >= this.MIN_VALUE && value <= this.MAX_VALUE;
        }
        return false;
    }
    /**
   * Create instance from string
   * @param {String} string - Numeric representation
   * @return {LargeInt}
   */ static fromString(string) {
        return new this(string);
    }
    static MAX_VALUE = 0n;
    static MIN_VALUE = 0n;
    /**
   * @internal
   * @return {void}
   */ static defineIntBoundaries() {
        const [min, max] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$bigint$2d$encoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBigIntBoundaries"])(this.prototype.size, this.prototype.unsigned);
        this.MIN_VALUE = min;
        this.MAX_VALUE = max;
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/hyper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hyper",
    ()=>Hyper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$large$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/large-int.js [app-client] (ecmascript)");
;
class Hyper extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$large$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LargeInt"] {
    /**
   * @param {Array<Number|BigInt|String>} parts - Slices to encode
   */ constructor(...args){
        super(args);
    }
    get low() {
        return Number(this._value & 0xffffffffn) << 0;
    }
    get high() {
        return Number(this._value >> 32n) >> 0;
    }
    get size() {
        return 64;
    }
    get unsigned() {
        return false;
    }
    /**
   * Create Hyper instance from two [high][low] i32 values
   * @param {Number} low - Low part of i64 number
   * @param {Number} high - High part of i64 number
   * @return {LargeInt}
   */ static fromBits(low, high) {
        return new this(low, high);
    }
}
Hyper.defineIntBoundaries();
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/unsigned-int.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnsignedInt",
    ()=>UnsignedInt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
const MAX_VALUE = 4294967295;
const MIN_VALUE = 0;
class UnsignedInt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrPrimitiveType"] {
    /**
   * @inheritDoc
   */ static read(reader) {
        return reader.readUInt32BE();
    }
    /**
   * @inheritDoc
   */ static write(value, writer) {
        if (typeof value !== 'number' || !(value >= MIN_VALUE && value <= MAX_VALUE) || value % 1 !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"]('invalid u32 value');
        writer.writeUInt32BE(value);
    }
    /**
   * @inheritDoc
   */ static isValid(value) {
        if (typeof value !== 'number' || value % 1 !== 0) {
            return false;
        }
        return value >= MIN_VALUE && value <= MAX_VALUE;
    }
}
UnsignedInt.MAX_VALUE = MAX_VALUE;
UnsignedInt.MIN_VALUE = MIN_VALUE;
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/unsigned-hyper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnsignedHyper",
    ()=>UnsignedHyper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$large$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/large-int.js [app-client] (ecmascript)");
;
class UnsignedHyper extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$large$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LargeInt"] {
    /**
   * @param {Array<Number|BigInt|String>} parts - Slices to encode
   */ constructor(...args){
        super(args);
    }
    get low() {
        return Number(this._value & 0xffffffffn) << 0;
    }
    get high() {
        return Number(this._value >> 32n) >> 0;
    }
    get size() {
        return 64;
    }
    get unsigned() {
        return true;
    }
    /**
   * Create UnsignedHyper instance from two [high][low] i32 values
   * @param {Number} low - Low part of u64 number
   * @param {Number} high - High part of u64 number
   * @return {UnsignedHyper}
   */ static fromBits(low, high) {
        return new this(low, high);
    }
}
UnsignedHyper.defineIntBoundaries();
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/float.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Float",
    ()=>Float
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
class Float extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrPrimitiveType"] {
    /**
   * @inheritDoc
   */ static read(reader) {
        return reader.readFloatBE();
    }
    /**
   * @inheritDoc
   */ static write(value, writer) {
        if (typeof value !== 'number') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"]('not a number');
        writer.writeFloatBE(value);
    }
    /**
   * @inheritDoc
   */ static isValid(value) {
        return typeof value === 'number';
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/double.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Double",
    ()=>Double
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
class Double extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrPrimitiveType"] {
    /**
   * @inheritDoc
   */ static read(reader) {
        return reader.readDoubleBE();
    }
    /**
   * @inheritDoc
   */ static write(value, writer) {
        if (typeof value !== 'number') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"]('not a number');
        writer.writeDoubleBE(value);
    }
    /**
   * @inheritDoc
   */ static isValid(value) {
        return typeof value === 'number';
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/quadruple.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Quadruple",
    ()=>Quadruple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
class Quadruple extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrPrimitiveType"] {
    static read() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrDefinitionError"]('quadruple not supported');
    }
    static write() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrDefinitionError"]('quadruple not supported');
    }
    static isValid() {
        return false;
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/bool.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bool",
    ()=>Bool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/int.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
;
class Bool extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrPrimitiveType"] {
    /**
   * @inheritDoc
   */ static read(reader) {
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Int"].read(reader);
        switch(value){
            case 0:
                return false;
            case 1:
                return true;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReaderError"](`got ${value} when trying to read a bool`);
        }
    }
    /**
   * @inheritDoc
   */ static write(value, writer) {
        const intVal = value ? 1 : 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Int"].write(intVal, writer);
    }
    /**
   * @inheritDoc
   */ static isValid(value) {
        return typeof value === 'boolean';
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "String",
    ()=>String
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/unsigned-int.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
;
;
class String extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrCompositeType"] {
    constructor(maxLength = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedInt"].MAX_VALUE){
        super();
        this._maxLength = maxLength;
    }
    /**
   * @inheritDoc
   */ read(reader) {
        const size = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedInt"].read(reader);
        if (size > this._maxLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReaderError"](`saw ${size} length String, max allowed is ${this._maxLength}`);
        return reader.read(size);
    }
    readString(reader) {
        return this.read(reader).toString('utf8');
    }
    /**
   * @inheritDoc
   */ write(value, writer) {
        // calculate string byte size before writing
        const size = typeof value === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].byteLength(value, 'utf8') : value.length;
        if (size > this._maxLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"](`got ${value.length} bytes, max allowed is ${this._maxLength}`);
        // write size info
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedInt"].write(size, writer);
        writer.write(value, size);
    }
    /**
   * @inheritDoc
   */ isValid(value) {
        if (typeof value === 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].byteLength(value, 'utf8') <= this._maxLength;
        }
        if (value instanceof Array || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(value)) {
            return value.length <= this._maxLength;
        }
        return false;
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/opaque.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Opaque",
    ()=>Opaque
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
;
class Opaque extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrCompositeType"] {
    constructor(length){
        super();
        this._length = length;
    }
    /**
   * @inheritDoc
   */ read(reader) {
        return reader.read(this._length);
    }
    /**
   * @inheritDoc
   */ write(value, writer) {
        const { length } = value;
        if (length !== this._length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"](`got ${value.length} bytes, expected ${this._length}`);
        writer.write(value, length);
    }
    /**
   * @inheritDoc
   */ isValid(value) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(value) && value.length === this._length;
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/var-opaque.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VarOpaque",
    ()=>VarOpaque
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/unsigned-int.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
;
;
class VarOpaque extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrCompositeType"] {
    constructor(maxLength = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedInt"].MAX_VALUE){
        super();
        this._maxLength = maxLength;
    }
    /**
   * @inheritDoc
   */ read(reader) {
        const size = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedInt"].read(reader);
        if (size > this._maxLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReaderError"](`saw ${size} length VarOpaque, max allowed is ${this._maxLength}`);
        return reader.read(size);
    }
    /**
   * @inheritDoc
   */ write(value, writer) {
        const { length } = value;
        if (value.length > this._maxLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"](`got ${value.length} bytes, max allowed is ${this._maxLength}`);
        // write size info
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedInt"].write(length, writer);
        writer.write(value, length);
    }
    /**
   * @inheritDoc
   */ isValid(value) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(value) && value.length <= this._maxLength;
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Array",
    ()=>Array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
class Array extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"] {
    constructor(childType, length, maxDepth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"].DEFAULT_MAX_DEPTH){
        super(maxDepth);
        this._childType = childType;
        this._length = length;
    }
    /**
   * @inheritDoc
   */ read(reader, remainingDepth = this._maxDepth) {
        // Upper-bound fast-fail: remaining bytes is a loose capacity check since
        // each XDR element typically consumes more than 1 byte (e.g., 4+ bytes).
        if (this._length > reader.remainingBytes()) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReaderError"](`Array length ${this._length} exceeds remaining ${reader.remainingBytes()} bytes`);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"].checkDepth(remainingDepth);
        const result = [];
        // read values
        for(let i = 0; i < this._length; i++){
            result.push(this._childType.read(reader, remainingDepth - 1));
        }
        return result;
    }
    /**
   * @inheritDoc
   */ write(value, writer) {
        if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.Array.isArray(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"](`value is not array`);
        if (value.length !== this._length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"](`got array of size ${value.length}, expected ${this._length}`);
        for (const child of value){
            this._childType.write(child, writer);
        }
    }
    /**
   * @inheritDoc
   */ isValid(value) {
        if (!(value instanceof /*TURBOPACK member replacement*/ __turbopack_context__.g.Array) || value.length !== this._length) {
            return false;
        }
        for (const child of value){
            if (!this._childType.isValid(child)) return false;
        }
        return true;
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/var-array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VarArray",
    ()=>VarArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/unsigned-int.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
;
class VarArray extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"] {
    constructor(childType, maxLength = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedInt"].MAX_VALUE, maxDepth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"].DEFAULT_MAX_DEPTH){
        super(maxDepth);
        this._childType = childType;
        this._maxLength = maxLength;
    }
    /**
   * @inheritDoc
   */ read(reader, remainingDepth = this._maxDepth) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"].checkDepth(remainingDepth);
        const length = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedInt"].read(reader);
        if (length > this._maxLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReaderError"](`saw ${length} length VarArray, max allowed is ${this._maxLength}`);
        // Upper-bound fast-fail: remaining bytes is a loose capacity check since
        // each XDR element typically consumes more than 1 byte (e.g., 4+ bytes)
        if (length > reader.remainingBytes()) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReaderError"](`VarArray length ${length} exceeds remaining ${reader.remainingBytes()} bytes`);
        }
        const result = [];
        for(let i = 0; i < length; i++){
            result.push(this._childType.read(reader, remainingDepth - 1));
        }
        return result;
    }
    /**
   * @inheritDoc
   */ write(value, writer) {
        if (!(value instanceof Array)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"](`value is not array`);
        if (value.length > this._maxLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"](`got array of size ${value.length}, max allowed is ${this._maxLength}`);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedInt"].write(value.length, writer);
        for (const child of value){
            this._childType.write(child, writer);
        }
    }
    /**
   * @inheritDoc
   */ isValid(value) {
        if (!(value instanceof Array) || value.length > this._maxLength) {
            return false;
        }
        for (const child of value){
            if (!this._childType.isValid(child)) return false;
        }
        return true;
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/option.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Option",
    ()=>Option
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$bool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/bool.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
;
;
class Option extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"] {
    constructor(childType, maxDepth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"].DEFAULT_MAX_DEPTH){
        super(maxDepth);
        this._childType = childType;
    }
    /**
   * @inheritDoc
   */ read(reader, remainingDepth = this._maxDepth) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"].checkDepth(remainingDepth);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$bool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bool"].read(reader)) {
            return this._childType.read(reader, remainingDepth - 1);
        }
        return undefined;
    }
    /**
   * @inheritDoc
   */ write(value, writer) {
        const isPresent = value !== null && value !== undefined;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$bool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bool"].write(isPresent, writer);
        if (isPresent) {
            this._childType.write(value, writer);
        }
    }
    /**
   * @inheritDoc
   */ isValid(value) {
        if (value === null || value === undefined) {
            return true;
        }
        return this._childType.isValid(value);
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/void.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Void",
    ()=>Void
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
class Void extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrPrimitiveType"] {
    /* jshint unused: false */ static read() {
        return undefined;
    }
    static write(value) {
        if (value !== undefined) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"]('trying to write value to a void slot');
    }
    static isValid(value) {
        return value === undefined;
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/enum.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Enum",
    ()=>Enum
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/int.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
;
class Enum extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrPrimitiveType"] {
    constructor(name, value){
        super();
        this.name = name;
        this.value = value;
    }
    /**
   * @inheritDoc
   */ static read(reader) {
        const intVal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Int"].read(reader);
        const res = this._byValue[intVal];
        if (res === undefined) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrReaderError"](`unknown ${this.enumName} member for value ${intVal}`);
        return res;
    }
    /**
   * @inheritDoc
   */ static write(value, writer) {
        if (!this.isValid(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"](`${value} has enum name ${value?.enumName}, not ${this.enumName}: ${JSON.stringify(value)}`);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Int"].write(value.value, writer);
    }
    /**
   * @inheritDoc
   */ static isValid(value) {
        return value?.constructor?.enumName === this.enumName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSerializableIsh"])(value, this);
    }
    static members() {
        return this._members;
    }
    static values() {
        return Object.values(this._members);
    }
    static fromName(name) {
        const result = this._members[name];
        if (!result) throw new TypeError(`${name} is not a member of ${this.enumName}`);
        return result;
    }
    static fromValue(value) {
        const result = this._byValue[value];
        if (result === undefined) throw new TypeError(`${value} is not a value of any member of ${this.enumName}`);
        return result;
    }
    static create(context, name, members) {
        const ChildEnum = class extends Enum {
        };
        ChildEnum.enumName = name;
        context.results[name] = ChildEnum;
        ChildEnum._members = {};
        ChildEnum._byValue = {};
        for (const [key, value] of Object.entries(members)){
            const inst = new ChildEnum(key, value);
            ChildEnum._members[key] = inst;
            ChildEnum._byValue[value] = inst;
            ChildEnum[key] = ()=>inst;
        }
        return ChildEnum;
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/reference.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reference",
    ()=>Reference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
class Reference extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrPrimitiveType"] {
    /* jshint unused: false */ resolve() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrDefinitionError"]('"resolve" method should be implemented in the descendant class');
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/struct.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Struct",
    ()=>Struct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/reference.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
;
class Struct extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"] {
    constructor(attributes, maxDepth){
        const resolvedMaxDepth = maxDepth ?? new.target?._maxDepth;
        super(resolvedMaxDepth);
        this._attributes = attributes || {};
    }
    /**
   * @inheritDoc
   */ static read(reader, remainingDepth = this._maxDepth) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"].checkDepth(remainingDepth);
        const attributes = {};
        for (const [fieldName, type] of this._fields){
            attributes[fieldName] = type.read(reader, remainingDepth - 1);
        }
        return new this(attributes, this._maxDepth);
    }
    /**
   * @inheritDoc
   */ static write(value, writer) {
        if (!this.isValid(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"](`${value} has struct name ${value?.constructor?.structName}, not ${this.structName}: ${JSON.stringify(value)}`);
        }
        for (const [fieldName, type] of this._fields){
            const attribute = value._attributes[fieldName];
            type.write(attribute, writer);
        }
    }
    /**
   * @inheritDoc
   */ static isValid(value) {
        return value?.constructor?.structName === this.structName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSerializableIsh"])(value, this);
    }
    static create(context, name, fields, maxDepth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"].DEFAULT_MAX_DEPTH) {
        const ChildStruct = class extends Struct {
        };
        ChildStruct.structName = name;
        ChildStruct._maxDepth = maxDepth;
        context.results[name] = ChildStruct;
        const mappedFields = new Array(fields.length);
        for(let i = 0; i < fields.length; i++){
            const fieldDescriptor = fields[i];
            const fieldName = fieldDescriptor[0];
            let field = fieldDescriptor[1];
            if (field instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"]) {
                field = field.resolve(context);
            }
            mappedFields[i] = [
                fieldName,
                field
            ];
            // create accessors
            ChildStruct.prototype[fieldName] = createAccessorMethod(fieldName);
        }
        ChildStruct._fields = mappedFields;
        return ChildStruct;
    }
}
function createAccessorMethod(name) {
    return function readOrWriteAttribute(value) {
        if (value !== undefined) {
            this._attributes[name] = value;
        }
        return this._attributes[name];
    };
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/union.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Union",
    ()=>Union
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$void$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/void.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/reference.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
;
;
;
;
class Union extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"] {
    constructor(aSwitch, value, maxDepth){
        const resolvedMaxDepth = maxDepth ?? new.target?._maxDepth;
        super(resolvedMaxDepth);
        this.set(aSwitch, value);
    }
    set(aSwitch, value) {
        if (typeof aSwitch === 'string') {
            aSwitch = this.constructor._switchOn.fromName(aSwitch);
        }
        this._switch = aSwitch;
        const arm = this.constructor.armForSwitch(this._switch);
        this._arm = arm;
        this._armType = arm === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$void$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Void"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$void$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Void"] : this.constructor._arms[arm];
        this._value = value;
    }
    get(armName = this._arm) {
        if (this._arm !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$void$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Void"] && this._arm !== armName) throw new TypeError(`${armName} not set`);
        return this._value;
    }
    switch() {
        return this._switch;
    }
    arm() {
        return this._arm;
    }
    armType() {
        return this._armType;
    }
    value() {
        return this._value;
    }
    static armForSwitch(aSwitch) {
        const member = this._switches.get(aSwitch);
        if (member !== undefined) {
            return member;
        }
        if (this._defaultArm) {
            return this._defaultArm;
        }
        throw new TypeError(`Bad union switch: ${aSwitch}`);
    }
    static armTypeForArm(arm) {
        if (arm === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$void$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Void"]) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$void$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Void"];
        }
        return this._arms[arm];
    }
    /**
   * @inheritDoc
   */ static read(reader, remainingDepth = this._maxDepth) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"].checkDepth(remainingDepth);
        const aSwitch = this._switchOn.read(reader, remainingDepth - 1);
        const arm = this.armForSwitch(aSwitch);
        const armType = arm === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$void$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Void"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$void$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Void"] : this._arms[arm];
        let value;
        if (armType !== undefined) {
            value = armType.read(reader, remainingDepth - 1);
        } else {
            value = arm.read(reader, remainingDepth - 1);
        }
        return new this(aSwitch, value, this._maxDepth);
    }
    /**
   * @inheritDoc
   */ static write(value, writer) {
        if (!this.isValid(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrWriterError"](`${value} has union name ${value?.unionName}, not ${this.unionName}: ${JSON.stringify(value)}`);
        }
        this._switchOn.write(value.switch(), writer);
        value.armType().write(value.value(), writer);
    }
    /**
   * @inheritDoc
   */ static isValid(value) {
        return value?.constructor?.unionName === this.unionName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSerializableIsh"])(value, this);
    }
    static create(context, name, config, maxDepth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NestedXdrType"].DEFAULT_MAX_DEPTH) {
        const ChildUnion = class extends Union {
        };
        ChildUnion.unionName = name;
        ChildUnion._maxDepth = maxDepth;
        context.results[name] = ChildUnion;
        if (config.switchOn instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"]) {
            ChildUnion._switchOn = config.switchOn.resolve(context);
        } else {
            ChildUnion._switchOn = config.switchOn;
        }
        ChildUnion._switches = new Map();
        ChildUnion._arms = {};
        // resolve default arm
        let defaultArm = config.defaultArm;
        if (defaultArm instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"]) {
            defaultArm = defaultArm.resolve(context);
        }
        ChildUnion._defaultArm = defaultArm;
        for (const [aSwitch, armName] of config.switches){
            const key = typeof aSwitch === 'string' ? ChildUnion._switchOn.fromName(aSwitch) : aSwitch;
            ChildUnion._switches.set(key, armName);
        }
        // add enum-based helpers
        // NOTE: we don't have good notation for "is a subclass of XDR.Enum",
        //  and so we use the following check (does _switchOn have a `values`
        //  attribute) to approximate the intent.
        if (ChildUnion._switchOn.values !== undefined) {
            for (const aSwitch of ChildUnion._switchOn.values()){
                // Add enum-based constructors
                ChildUnion[aSwitch.name] = function ctr(value) {
                    return new ChildUnion(aSwitch, value);
                };
                // Add enum-based "set" helpers
                ChildUnion.prototype[aSwitch.name] = function set(value) {
                    return this.set(aSwitch, value);
                };
            }
        }
        if (config.arms) {
            for (const [armsName, value] of Object.entries(config.arms)){
                ChildUnion._arms[armsName] = value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"] ? value.resolve(context) : value;
                // Add arm accessor helpers
                if (value !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$void$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Void"]) {
                    ChildUnion.prototype[armsName] = function get() {
                        return this.get(armsName);
                    };
                }
            }
        }
        return ChildUnion;
    }
}
;
}),
"[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/config.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/int.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$hyper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/hyper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/unsigned-int.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$hyper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/unsigned-hyper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$xdr$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/xdr-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$double$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/double.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$quadruple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/quadruple.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$bool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/bool.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$opaque$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/opaque.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$var$2d$opaque$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/var-opaque.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$var$2d$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/var-array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$void$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/void.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/enum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$struct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/struct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$union$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/union.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/node_modules/.pnpm/@stellar_js-xdr@4.0.0/node_modules/@stellar/js-xdr/src/reference.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// eslint-disable-next-line max-classes-per-file
class SimpleReference extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"] {
    constructor(name){
        super();
        this.name = name;
    }
    resolve(context) {
        const defn = context.definitions[this.name];
        return defn.resolve(context);
    }
}
class ArrayReference extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"] {
    constructor(childReference, length, variable = false){
        super();
        this.childReference = childReference;
        this.length = length;
        this.variable = variable;
    }
    resolve(context) {
        let resolvedChild = this.childReference;
        let length = this.length;
        if (resolvedChild instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"]) {
            resolvedChild = resolvedChild.resolve(context);
        }
        if (length instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"]) {
            length = length.resolve(context);
        }
        if (this.variable) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$var$2d$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VarArray"](resolvedChild, length);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Array"](resolvedChild, length);
    }
}
class OptionReference extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"] {
    constructor(childReference){
        super();
        this.childReference = childReference;
        this.name = childReference.name;
    }
    resolve(context) {
        let resolvedChild = this.childReference;
        if (resolvedChild instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"]) {
            resolvedChild = resolvedChild.resolve(context);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"](resolvedChild);
    }
}
class SizedReference extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"] {
    constructor(sizedType, length){
        super();
        this.sizedType = sizedType;
        this.length = length;
    }
    resolve(context) {
        let length = this.length;
        if (length instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"]) {
            length = length.resolve(context);
        }
        return new this.sizedType(length);
    }
}
class Definition {
    constructor(constructor, name, cfg){
        this.constructor = constructor;
        this.name = name;
        this.config = cfg;
    }
    // resolve calls the constructor of this definition with the provided context
    // and this definitions config values.  The definitions constructor should
    // populate the final type on `context.results`, and may refer to other
    // definitions through `context.definitions`
    resolve(context) {
        if (this.name in context.results) {
            return context.results[this.name];
        }
        return this.constructor(context, this.name, this.config);
    }
}
// let the reference resolution system do its thing
// the "constructor" for a typedef just returns the resolved value
function createTypedef(context, typeName, value) {
    if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$reference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reference"]) {
        value = value.resolve(context);
    }
    context.results[typeName] = value;
    return value;
}
function createConst(context, name, value) {
    context.results[name] = value;
    return value;
}
class TypeBuilder {
    constructor(destination){
        this._destination = destination;
        this._definitions = {};
    }
    enum(name, members) {
        const result = new Definition(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Enum"].create, name, members);
        this.define(name, result);
    }
    struct(name, members) {
        const result = new Definition(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$struct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Struct"].create, name, members);
        this.define(name, result);
    }
    union(name, cfg) {
        const result = new Definition(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$union$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Union"].create, name, cfg);
        this.define(name, result);
    }
    typedef(name, cfg) {
        const result = new Definition(createTypedef, name, cfg);
        this.define(name, result);
    }
    const(name, cfg) {
        const result = new Definition(createConst, name, cfg);
        this.define(name, result);
    }
    void() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$void$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Void"];
    }
    bool() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$bool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bool"];
    }
    int() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Int"];
    }
    hyper() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$hyper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hyper"];
    }
    uint() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$int$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedInt"];
    }
    uhyper() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$unsigned$2d$hyper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedHyper"];
    }
    float() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"];
    }
    double() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$double$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Double"];
    }
    quadruple() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$quadruple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quadruple"];
    }
    string(length) {
        return new SizedReference(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["String"], length);
    }
    opaque(length) {
        return new SizedReference(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$opaque$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Opaque"], length);
    }
    varOpaque(length) {
        return new SizedReference(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$var$2d$opaque$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VarOpaque"], length);
    }
    array(childType, length) {
        return new ArrayReference(childType, length);
    }
    varArray(childType, maxLength) {
        return new ArrayReference(childType, maxLength, true);
    }
    option(childType) {
        return new OptionReference(childType);
    }
    define(name, definition) {
        if (this._destination[name] === undefined) {
            this._definitions[name] = definition;
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$node_modules$2f2e$pnpm$2f40$stellar_js$2d$xdr$40$4$2e$0$2e$0$2f$node_modules$2f40$stellar$2f$js$2d$xdr$2f$src$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XdrDefinitionError"](`${name} is already defined`);
        }
    }
    lookup(name) {
        return new SimpleReference(name);
    }
    resolve() {
        for (const defn of Object.values(this._definitions)){
            defn.resolve({
                definitions: this._definitions,
                results: this._destination
            });
        }
    }
}
function config(fn, types = {}) {
    if (fn) {
        const builder = new TypeBuilder(types);
        fn(builder);
        builder.resolve();
    }
    return types;
}
;
}),
]);

//# sourceMappingURL=1-7k_%40stellar_js-xdr_src_0nppe7e._.js.map