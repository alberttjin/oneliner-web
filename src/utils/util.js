
/**
 * Checks cookie for a key name, return index if present, -1 if not present.
 * @param {string} name 
 */
export const checkCookie = (name) => {
  var dc = "; " + document.cookie;
  return dc.indexOf("; " + name + "=");
}

/**
 * If unique key name is in the cookie, return the value assigned to that key.
 * @param {string} name 
 */
export const getCookie = (name) => {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

/**
 * If key exists in cookie, deletes the correlated entry from the cookie.
 * @param {string} name 
 */
export const removeCookie = (name) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}