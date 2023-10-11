async function fetchUserData() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();


        const usersData = data;

        const modifiedUsers = usersData.map(user => ({

            name: {
                name: 'yazan',

            },
            name: user.name,
            username: {
                username: 'yazanhammad',

            },

            username: user.username,

            email: user.email,
            email: {
                email: 'yazanhammad737@gmail.com',

            },
            address: user.address.street,
            phone: {
                phone: '0786603303',

            },
            phone: user.phone,
            website: user.website,
            company: user.company.name,
        }));


        console.log('Modified Users:');
        console.log(modifiedUsers);


        const bizUsers = modifiedUsers.filter(user => user.email.includes('.biz'));


        console.log('Users with .biz domain in their email:');
        console.log(bizUsers);


        const sortedUsers = modifiedUsers.sort((a, b) => a.name.localeCompare(b.name));


        console.log('\nSorted Users Alphabetically:');
        console.log(sortedUsers);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchUserData();
/*Inside the fetchUserData function, store the fetched user data in a variable (e.g., usersData).
Step 3: Modify Data
Still within the fetchUserData function, create modified user objects (maybe by using an array iterator method like .map) for each user with specific fields as follows:

Name
Username
Email
Address (Street name only)
Phone
Website
Company (Company name only)
and put these new objects in an array.

Log the modified list.

Step 4: Filter the Data
Filter the users data that you modified to display users only which have .biz domain in their email.
Log the filtered list.
Step 5: Sort the Data
Sort the users alphabetically by name.
Log the sorted list.
Step 6: Catch the Errors
Catch the errors and print out the error messages that might occur.
How to Run Your Program*/
