/**
 * This function parses a JSON string and converts any stringified arrays 
 * back into actual arrays within the resulting object to prevent wrongly 
 * stringified arrays.
 * @param {string} key - A JSON string that may contain stringified arrays.
 * @param {any} value - A JavaScript object with all stringified arrays converted to actual arrays.
 * @returns {any} 
 */
function replacer(key, value) {
    if (typeof value === 'string' && /^\[.*\]$/.test(value)) {
        try {
            return JSON.parse(value);
        } catch (e) {
            return value; 
        }
    }
    return value;
}

/**
 * Pretty Print JSON in all Text Areas which have the className 'json-textarea'.
 * @param {string} elements - An ugly JSON string.
 */

function prettyPrint(elements) {
    for (var i = 0; i < elements.length; i++) {
        var ugly = elements.item(i).value;
        var obj = JSON.parse(ugly);
        elements.item(i).value = JSON.stringify(obj, replacer, 4);
    }
}

var jsonAreas = document.getElementsByClassName('json-textarea');
prettyPrint(jsonAreas);
