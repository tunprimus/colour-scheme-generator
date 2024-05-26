/* javascript - find nested object key by its value | --->>> https://stackoverflow.com/a/52526922 */

function getObjectKeyFromValue(obj, prop, val) {

  let result = Object.keys(obj).find(key => {
    if(obj[key].prop === val)
      return key;
  });
  return result;
}

