console.log('in client.js');

// create an array that is a  global variable
let employeesArray = [];

$(document).ready(onReady);

function onReady() {
    console.log('Ready!');

    // Listener for submit button
    $('#submitButton').on('click', clickSubmit);
    
}

function clickSubmit (event) {
    //console.log('this is', $(this));
    console.log('clickSubmit');
    
    // Create variable to store the employee 
    // info from the getEmployeeInfo function
    let employeeEntry = getEmployeeInfo();

    // Push the employee info to the employeesArray
    employeesArray.push(employeeEntry);
    console.log('all the employees', employeesArray);

    // Clear input fields
    $('.inputField').val('');
    

    
}

function getEmployeeInfo() {
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNum').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val(),
    };

    return employee;
}

function displayEmployeesOnDOM() {

    // empty display to start
    $('.tableWhole').empty();

    // Loop through employees array and display each one on the DOM
    for (let employee of employees) {
        $('.tableWhole').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.firstName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.title}</td>
                <td>${employee.annualSalary.toFixed(2)}</td>
            </tr>
        `)
    }
}