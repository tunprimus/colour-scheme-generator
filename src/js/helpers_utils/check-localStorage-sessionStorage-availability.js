//@ts-check

/**
 * @
 * @returns {boolean}
 * @example console.log(isLocalStorageEnabled());
 */
export function isLocalStorageEnabled() {
	try {
		const key = `__storage__test`;
		window.localStorage.setItem(key, null);
		window.localStorage.removeItem(key);
		return true;
	} catch (err) {
		return false;
	}
}

/**
 * 
 * @returns {boolean}
 * @example console.log(isSessionStorageEnabled());
 */
export function isSessionStorageEnabled() {
	try {
		const key = `__storage__test`;
		window.sessionStorage.setItem(key, null);
		window.sessionStorage.removeItem(key);
		return true;
	} catch (err) {
		return false;
	}
}
