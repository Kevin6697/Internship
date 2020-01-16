var errors = "Validations : ";
var student = {};
if (sessionStorage.getItem("student") == null) {
  var allStudent = [];
  sessionStorage.setItem("student", JSON.stringify(allStudent));
}
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
    document.getElementById("displayErrors").style.color = "red";
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
  var allStudentValue = JSON.parse(sessionStorage.getItem("student"));
  allStudentValue.push(student);
  sessionStorage.setItem("student", JSON.stringify(allStudentValue));
  window.location.href = "index.html";
}
function tableDisplay() {
  var allStudentValue = JSON.parse(sessionStorage.getItem("student"));
  if (allStudentValue.length != 0) {
    var tmp =
      "<th>Index</th><th>Name</th><th>Maths</th><th>English</th><th>Average</th><th>Passing Year</th><th>Created Date</th>";
    document.getElementById("dataDisplay").innerHTML = tmp;
  }
  for (var i = 0; i < allStudentValue.length; i++) {
    var row = dataDisplay.insertRow();
    document.getElementById("dataDisplay").border = "1px";
    var c1 = row.insertCell();
    var c2 = row.insertCell();
    var c3 = row.insertCell();
    var c4 = row.insertCell();
    var c5 = row.insertCell();
    var c6 = row.insertCell();
    var c7 = row.insertCell();
    c1.innerHTML = i + 1;
    c2.innerHTML = allStudentValue[i].name;
    c3.innerHTML = allStudentValue[i].maths;
    c4.innerHTML = allStudentValue[i].english;
    c5.innerHTML = allStudentValue[i].average;
    c6.innerHTML = allStudentValue[i].passingYear;
    c7.innerHTML = allStudentValue[i].createdDate;
  }
}
tableDisplay();
