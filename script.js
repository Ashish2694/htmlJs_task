// var submit = document.getElementById("submit");
// submit.addEventListener("click", displayDetails);
// var row = 1;
// function displayDetails() {
//   var fName = document.getElementById("fName").value;
//   var lName = document.getElementById("lName").value;
//   var gender = document.getElementById("gender").value;
//   var mobile = document.getElementById("mobile").value;
//   var age = document.getElementById("age").value;
//   var state = document.getElementById("state").value;
//   console.log(fName);
//   console.log(gender);
//
//   var display = document.getElementById("display");
//   var newRow = display.insertRow(row);
//   var cell1 = newRow.insertCell(0);
//   var cell2 = newRow.insertCell(1);
//   var cell3 = newRow.insertCell(2);
//   var cell4 = newRow.insertCell(3);
//   var cell5 = newRow.insertCell(4);
//   var cell6 = newRow.insertCell(5);

//   cell1.innerHTML = fname;
//   cell2.innerHTML = lName;
//   cell3.innerHTML = gender;
//   cell4.innerHTML = mobile;
//   cell5.innerHTML = age;
//   cell6.innerHTML = state;

//   row++;
//}

var submit = document.getElementById("submit");
submit.addEventListener("click", onFormSubmit);
var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}
function readFormData() {
  var formData = {};
  formData["fName"] = document.getElementById("fName").value;
  formData["lName"] = document.getElementById("lName").value;
  formData["gender"] = document.getElementById("gender").value;
  formData["mobile"] = document.getElementById("mobile").value;
  formData["age"] = document.getElementById("age").value;
  formData["state"] = document.getElementById("state").value;
  formData["address"] = document.getElementById("address").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  console.log(data.fName);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.gender;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.mobile;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.age;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.state;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.address;
}
var reset = document.getElementById("reset");
reset.addEventListener("click", resetForm);
function resetForm() {
  document.getElementById("fName").value = "";
  document.getElementById("lName").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("age").value = "";
  document.getElementById("state").value = "";
  document.getElementById("address").value = "";
  selectedRow = null;
}
