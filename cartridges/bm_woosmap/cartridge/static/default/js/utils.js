function prettyPrint(elements) {
    for (var i = 0; i < elements.length; i++) {
        var ugly = elements.item(i).value;
        var obj = JSON.parse(ugly);
        elements.item(i).value = JSON.stringify(obj, undefined, 4);
    }
}

var jsonAreas = document.getElementsByClassName('json-textarea');
prettyPrint(jsonAreas);
