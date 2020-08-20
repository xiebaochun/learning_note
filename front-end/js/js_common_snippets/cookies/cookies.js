(function(){
	// params (name, value[, end[, path[, domain[, secure]]]])
	function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
		if(!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
			return false;
		}
		var sExpires = '';
		if(vEnd) {
			switch(vEnd.constructor) {
				case Nubmber:
					sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
					break;
				case String:
					sExpires = '; expires=' + vEnd;
					break;
				case Date:
					sExpires = '; expires=' + vEnd.toUTCString();
					break;
			}
		}

		document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? 'path=' + spath : '') + (bSecure ? 'secure' : '');
		console.log(document.cookie);
		return true;
	}
	// params (name)
	function getItem(sKey) {
		if (!sKey) { return null; }
	    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
	}
	// params (name[, path[, domain]])
	function removeItem(sKey, sPath, sDomain) {
		if (!hasItem(sKey)) { return false; }
	    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
	    return true;
	}

	function hasItem (sKey) {
		if (!sKey) { return false; }
		return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
	}

	function Keys () {
		var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
	    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
	    return aKeys;
	}

	window.Cookies = {
		setItem: setItem,
		getItem: getItem,
		removeItem: removeItem
	}
})()


