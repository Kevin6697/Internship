var errors = "Validations : ";
var student = {};
function getValues() {
  var formElements = document.getElementById("myForm");
  var name = formElements.txtname.value;
  var maths = formElements.txtmaths.value;
  var english = formElements.txtenglish.value;
  var passingYear = formElements.txtpassingyear.value;
  var nameRegex = /^[A-z]*$/;
  if (name == "") {
    errors += "<br>Name is required";
  } else if (nameRegex.test(name) == false) {
    errors += "<br>Name must be alphabets only";
  } else {
    student["name"] = name;
  }
  if (maths == "") {
    errors += "<br>Maths marks are required";
  } else if (maths > 100 || maths < 0) {
    errors += "<br>Enter valid maths marks";
  } else {
    student["maths"] = maths;
  }
  if (english == "") {
    errors += "<br>English marks are required";
  } else if (english > 100 || english < 0) {
    errors += "<br>Enter valid english marks";
  } else {
    student["english"] = english;
  }
  if (passingYear == "") {
    errors += "<br>Passing year is required";
  } else if (passingYear > 2020 || passingYear < 2000) {
    errors += "<br>Enter valid passing year";
  } else {
    student["passingYear"] = passingYear;
  }
  var boolenValue = displayError();
  if (boolenValue == true) {
    var average = calculateAverage(maths, english);
    student["average"] = average;
    student["createdDate"] = new Date().toDateString();
    setValues();
  }
}
function displayError() {
  if (errors != "Validations : ") {
    document.getElementById("displayErrors").innerHTML = errors;
    errors = "Validations : ";
    return false;
  } else {
    errors = "";
    document.getElementById("displayErrors").innerHTML = "";
    return true;
  }
}
function calculateAverage(maths, english) {
  var tmpMaths = parseFloat(maths);
  var tmpEnglish = parseFloat(english);
  return (tmpMaths + tmpEnglish) / 2;
}
function setValues() {
  var tmpIndex = sessionStorage.getItem("count");
  tmpIndex++;
  sessionStorage.setItem("count", tmpIndex);
  sessionStorage.setItem(`index${tmpIndex}`, tmpIndex);
  sessionStorage.setItem(`name${tmpIndex}`, student["name"]);
  sessionStorage.setItem(`maths${tmpIndex}`, student["maths"]);
  sessionStorage.setItem(`english${tmpIndex}`, student["english"]);
  sessionStorage.setItem(`average${tmpIndex}`, student["average"]);
  sessionStorage.setItem(`passingYear${tmpIndex}`, student["passingYear"]);
  sessionStorage.setItem(`createdDate${tmpIndex}`, student["createdDate"]);
  window.location.href = "index.html";
}
function tableDisplay() {
    if(sessionStorage.getItem("count")!=null)
    {
        var tmp = "<th>Index</th><th>Name</th><th>Maths</th><th>English</th><th>Average</th><th>Passing Year</th><th>Created Date</th>";
        document.getElementById("dataDisplay").innerHTML = tmp;
    }
  for (var i = 1; i <= sessionStorage.getItem("count"); i++) {
    var row = dataDisplay.insertRow();
    document.getElementById("dataDisplay").border = "1px";
    var c1 = row.insertCell();
    var c2 = row.insertCell();
    var c3 = row.insertCell();
    var c4 = row.insertCell();
    var c5 = row.insertCell();
    var c6 = row.insertCell();
    var c7 = row.insertCell();
    c1.innerHTML = i;
    c2.innerHTML = sessionStorage.getItem(`name${i}`);
    c3.innerHTML = sessionStorage.getItem(`maths${i}`);
    c4.innerHTML = sessionStorage.getItem(`english${i}`);
    c5.innerHTML = sessionStorage.getItem(`average${i}`);
    c6.innerHTML = sessionStorage.getItem(`passingYear${i}`);
    c7.innerHTML = sessionStorage.getItem(`createdDate${i}`);
  }
}
tableDisplay();