## Syntax

#### Read all cookies accessible from this location
`allCookies = document.cookie;`

#### Write a new cookie
`document.cookie = newCookie;`

newCookie (string of form key=value)
	path:    ;path=path(e.g.,'/','mydir'),default to the current path of the current document location)
	domain:  ;domain=domain(e.g.,'example.com' | 'subdomain.example.com' | '127.0.0.1') or [ip address]
	max-age: ;max-age=max-age-in-seconds(e.g.,60*60*24*365 or 31536000 for a year)
	expires: ;expires= date-in-GMTString-format, if not specified it will expire at the end of session
			 Date.toUTCString() to formatting this value

	secure:  Only transmitted over secure protocol ad https

The cookie value string can use encodeURIComponent() to ensure that the string does not contain any commas,semicolons,semicolons,or whitespace(which are disallowed in cookie values)


reference: 
	https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
