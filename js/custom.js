function defaultValues() {
    document.getElementById("customRange1").value = 8;
    document.getElementById("passwordLength").value = 8;
    document.getElementById("customRange2").value = 1;
    document.getElementById("passwordquantity").value = 1;
    document.getElementById("gridCheck1").checked = true;
    document.getElementById("gridCheck2").checked = true;
    document.getElementById("gridCheck3").checked = true;
    document.getElementById("gridCheck4").checked = true;

    document.getElementById("jsonFormat").checked = false;
    document.getElementById("xmlFormat").checked = false;
    document.getElementById("downloadFormat").checked = false;

    document.getElementById("displayFormat").checked = true;
    document.getElementById("textFormat").checked = true;

}

function lengthChange() {
    document.getElementById("passwordLength").innerHTML = document.getElementById("customRange1").value;
    console.log("degişti : " + document.getElementById("customRange1").value);

}

function quantityChange() {
    document.getElementById("passwordquantity").innerHTML = document.getElementById("customRange2").value;
    console.log("degişti : " + document.getElementById("customRange2").value);

}