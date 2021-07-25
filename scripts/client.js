console.log('in client.js');

// create an array that is a  global variable
let employeesArray = [];

$(document).ready(onReady);

function onReady() {
    console.log('Ready!');

    // Listener for submit button
    $(document).on('click', '#submitButton', clickSubmit);

    // Listener for delete button
    $(document).on('click', '#deleteButton', deleteEmployee);
    
}

function clickSubmit (event) {
    console.log('this is', $(this));
    console.log('event', event);
    
    console.log('clickSubmit');
    
    // Create variable to store the employee 
    // info from the getEmployeeInfo function
    let employeeEntry = getEmployeeInfo();

    // Push the employee info to the employeesArray
    employeesArray.push(employeeEntry);
    console.log('all the employees', employeesArray);

    // Clear input fields
    $('.inputField').val('');

    // Render employee objects to the DOM
    displayEmployeesOnDOM();

    // Sum all salaries
    let totalSalaries = sumSalaries();

    // Set total salaries
    $('#salaryTotal').text(totalSalaries.toFixed(2));

    
}

// Function to create employee objects
function getEmployeeInfo() {
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNum').val(),
        title: $('#title').val(),
        annualSalary: Number($('#annualSalary').val()),
    };

    return employee;
}

// Function to display employee info in the table on the DOM
function displayEmployeesOnDOM() {

    // empty display to start
    $('#employeeTable').empty();

    // Loop through employees array and display each one on the DOM
    for (let employee of employeesArray) {
        $('.tableRow').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.title}</td>
                <td>${employee.annualSalary}</td>
                <td><button class="deleteButton">Delete</button></td>
            </tr>
        `);
    }
}

function sumSalaries() {
    let totalSalaries = 0;
    for(employee of employeesArray) {
        totalSalaries += employee.annualSalary;
        if (totalSalaries>20000) {
            $('.totalSalaries').css('background-color', 'red');
        }
    }

    return totalSalaries;
}

function deleteEmployee(event) {
    console.log('click delete');
    $(this).closest('tr').remove();
    console.log('deleted data');
    
    
}
