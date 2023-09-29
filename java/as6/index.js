const employee = {
    name: 'John Doe',
    jobTitle: 'Software Engineer',
    salary: 60000,
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// Function 2: destructivelyUpdateEmployeeWithKeyAndValue
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function 3: deleteFromEmployeeByKey
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function 4: destructivelyDeleteFromEmployeeByKey
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Testing the functions
console.log(updateEmployeeWithKeyAndValue(employee, 'salary', 70000));
console.log(employee); // Original employee object is unchanged

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'jobTitle', 'Senior Software Engineer'));
console.log(employee); // Original employee object is mutated

console.log(deleteFromEmployeeByKey(employee, 'salary'));
console.log(employee); // Original employee object is unchanged

console.log(destructivelyDeleteFromEmployeeByKey(employee, 'jobTitle'));
console.log(employee); // Original employee object is mutated