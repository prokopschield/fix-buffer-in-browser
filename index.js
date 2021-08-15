if (typeof window === 'undefined') {
	Object.assign(global, {
		window: global,
	});
}

if (typeof global === 'undefined') {
	Object.assign(window, {
		global: window,
	});
}

if (!('Buffer' in window)) {
	Object.assign(window, require('buffer/'));
}

module.exports = Buffer;
