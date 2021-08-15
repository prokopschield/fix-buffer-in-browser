if (!('Buffer' in (global || window))) {
	Object.assign(global || window, require('buffer/'));
}
module.exports = Buffer;
