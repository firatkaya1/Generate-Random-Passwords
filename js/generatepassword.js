function checkLowercase() {
    return document.getElementById("gridCheck1").checked;
}

function checkUppercase() {
    return document.getElementById("gridCheck2").checked;
}

function checkNumber() {
    return document.getElementById("gridCheck3").checked;
}

function checkSpecial() {
    return document.getElementById("gridCheck4").checked;
}
var values = [];
var textbox = document.getElementById("passwordSelectbox");

function getValues() {


    values.splice(0, values.length);
    if (checkLowercase()) {
        for (let index = 97; index < 123; index++) {
            values.push(String.fromCharCode(index));
        }
    }
    if (checkUppercase()) {
        for (let index = 65; index < 91; index++) {
            values.push(String.fromCharCode(index));
        }
    }
    if (checkNumber()) {
        for (let index = 48; index < 57; index++) {
            values.push(String.fromCharCode(index));
        }
    }
    if (checkSpecial()) {
        for (let index = 33; index < 48; index++) {
            values.push(String.fromCharCode(index));
        }
        for (let index = 58; index < 65; index++) {
            values.push(String.fromCharCode(index));
        }
        for (let index = 91; index < 97; index++) {
            values.push(String.fromCharCode(index));
        }
        for (let index = 123; index < 127; index++) {
            values.push(String.fromCharCode(index));
        }

    }

}



function showAllPasswords() {
    getValues();

    textbox.value = "";
    var passwordQuantity = document.getElementById("passwordquantity").value;
    var passwordLenght = document.getElementById("passwordLength").value;
    var str = "";
    var allPasswords = [];
    for (let index = 0; index < passwordQuantity; index++) {

        for (let index = 0; index < passwordLenght; index++) {
            str = str + values[Math.floor(Math.random() * values.length)]
        }
        allPasswords[index] = str;
        str = "";
    }
    if (document.getElementById("textFormat").checked) {
        convertText(allPasswords, passwordQuantity);
    }
    if (document.getElementById("jsonFormat").checked) {
        convertJson(allPasswords);
    }
    if (document.getElementById("xmlFormat").checked) {
        convertXml(allPasswords);
    }


}

function convertText(list, quantity) {
    textbox.value = "";
    for (let index = 0; index < quantity; index++) {
        textbox.value += list[index] + "\n";
    }
}

function convertJson(list) {
    textbox.value = "";
    var jsonValue = '{ "passwords" :\n[';
    for (let index = 0; index < list.length; index++) {
        jsonValue += '"' + list[index] + '",';
        if (index + 1 == list.length) {
            jsonValue = jsonValue.substring(0, jsonValue.length - 3);
            jsonValue = jsonValue + '"]}';
        }
    }
    textbox.value = jsonValue;

}

function convertXml(list) {
    textbox.value = "";
    var xmlValue = '<?xml version="1.0" encoding="UTF-8"?>\n<root>\n\t<passwords>\n';
    for (let index = 0; index < list.length; index++) {
        xmlValue = xmlValue + "<element>" + list[index] + "</element>\t\t";
        if (index + 1 == list.length) {
            xmlValue = xmlValue + "\n</element>\n</root>";
        }
    }
    textbox.value = xmlValue;


}

function checkeda(val) {
    if (val == "jsonFormat") {
        document.getElementById("jsonFormat").checked = true;
        document.getElementById("xmlFormat").checked = false;
        document.getElementById("textFormat").checked = false;
    }
    if (val == "xmlFormat") {
        document.getElementById("jsonFormat").checked = false;
        document.getElementById("xmlFormat").checked = true;
        document.getElementById("textFormat").checked = false;
    }
    if (val == "textFormat") {
        document.getElementById("jsonFormat").checked = false;
        document.getElementById("xmlFormat").checked = false;
        document.getElementById("textFormat").checked = true;
    }
    val == "";
}