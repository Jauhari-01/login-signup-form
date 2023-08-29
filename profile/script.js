const fName = document.getElementById('fName');
const LName = document.getElementById('lName');
const emailId = document.getElementById('emailId');

let currentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

fName.innerText = currentUser.firstName;
LName.innerText = currentUser.lastName;
emailId.innerText = currentUser.email;