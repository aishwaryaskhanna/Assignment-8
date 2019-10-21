/*jslint browser */
/*global window */

var listEmployee = [];
listEmployee.push(["Arya Lannister", "CEO", 1111]);
listEmployee.push(["Daenerys Snow", "VP Sales", 3346]);
listEmployee.push(["Tyrion Stark", "CTO", 2222]);
listEmployee.push(["Jon Lannister", "Quality Assurance", 3423]);
listEmployee.push(["Sansa Lannister", "CFO", 3333]);


var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function deleteEmployee(button) {
    "use strict";
    var row = button.parentNode.parentNode;
    var table = $("employeeTable");
    table.deleteRow(row.rowIndex);
    listEmployee.splice(row.rowIndex, 1);
    $("employeeCount").innerHTML = "Showing " + listEmployee.length + " Employees";
}

function displayEmployees(name, title, extension) {
    "use strict";
    var empTable = $("employeeTable");
    var row = empTable.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = name;
    cell = row.insertCell(-1);
    cell.innerHTML = title;
    cell = row.insertCell(-1);
    cell.innerHTML = extension;
    cell = row.insertCell(-1);
    var deleteButton = document.createElement("BUTTON");
    deleteButton.setAttribute("class", "delete");
    deleteButton.setAttribute("onclick", "deleteEmployee(this);");
    deleteButton.innerHTML = "Delete";
    cell.appendChild(deleteButton);
    $("employeeCount").innerHTML = "Showing " + listEmployee.length + " Employees";

}


function addEmployee() {
    "use strict";
    var cell = window.document.getElementsByTagName("td");
    var name, title, extension, required, invalidInput = false;
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
    required = "<span>Required Field</span>";
    if (name === "") {
        invalidInput = true;
        cell[2].innerHTML = required;
    }
    if (title === "") {
        invalidInput = true;
        cell[5].innerHTML = required;
    }
    if (extension === "") {
        invalidInput = true;
        cell[8].innerHTML = required;
    }
    if (!invalidInput) {
        cell[2].innerHTML = "";
        cell[5].innerHTML = "";
        cell[8].innerHTML = "";
        listEmployee.push([name, title, extension]);
        displayEmployees(name, title, extension);
        $("employeeCount").innerHTML = "Showing " + listEmployee.length + " Employees";
        $("addEmployeeForm").reset();
    }
}

window.addEventListener("load", function () {
    "use strict";
    $("addEmployeeForm").reset();
    $("addEmployeeButton").addEventListener("click", function (e) {
        e.preventDefault();
        addEmployee();
    });
    listEmployee.forEach(function (element) {
        displayEmployees(element[0], element[1], element[2]);

    });
});




