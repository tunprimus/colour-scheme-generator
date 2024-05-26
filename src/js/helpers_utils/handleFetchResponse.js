
/**
 * How to handle response .json and .text using fetch?
 * @link https://stackoverflow.com/a/56227515
 */


/**
 * 
 * @param {object} response 
 * @returns 
 */
function handleResponseStatusAndContentType(response) {
  const contentType = response.headers.get('content-type');

  if (response.status === 401) {
    throw new Error('Request was not authorised.');
  }

  if (contentType === null) {
    return Promise.resolve(null);
  } else if (contentType.startsWith('application/json;')) {
    return response.json();
  } else if (contentType.startsWith('text/plain;')) {
    return response.text();
  } else {
    throw new Error(`Unsupported response content-type: ${contentType}`);
  }
}

/**
 * Sends a fetch request to the specified address with the given options and handles the response.
 *
 * @param {string} address - The URL to send the fetch request to.
 * @param {object} options - The options to be passed to the fetch request.
 * @return {Promise} A promise that resolves to the response data or rejects with an error.
 * @example possible options = {
  method: "GET", // POST, PUT, DELETE, etc.
  headers: {
    // the content type header value is usually auto-set
    // depending on the request body
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
  referrer: "about:client", // or "" to send no Referer header,
  // or an url from the current origin
  referrerPolicy: "strict-origin-when-cross-origin", // no-referrer-when-downgrade, no-referrer, origin, same-origin...
  mode: "cors", // same-origin, no-cors
  credentials: "same-origin", // omit, include
  cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
  redirect: "follow", // manual, error
  integrity: "", // a hash, like "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController to abort request
  window: window // null
};
 */
function handleFetchResponse(address, options = {method: "GET",}) {
  const url = address;
  const requestInit = options;
  
  return fetch(
    url,
    requestInit,
  )
  .then(response => handleResponseStatusAndContentType(response))
  .catch(error => {
    console.error(error);
    return error;
  });
}

export { handleFetchResponse };
