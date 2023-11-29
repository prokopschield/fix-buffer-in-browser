if (!('Buffer' in globalThis)) {
	Object.assign(globalThis, require('buffer/'));
}

module.exports = Buffer;
