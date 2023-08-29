const signupBtn = document.getElementById('signupBtn');
const loginRedirectBtn = document.getElementById('loginRedirect');
const confirmpassword = document.getElementById('confirmpassword');
const password = document.getElementById('password');
const email = document.getElementById('email');
const lastName = document.getElementById('lastName');
const firstName = document.getElementById('firstName');



loginRedirectBtn.addEventListener('click',()=>{
    location.href='./login';
})


signupBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(firstName.value.trim() === '' || 
        lastName.value.trim() === '' || 
        email.value.trim() === '' ||
        password.value.trim() === '' || 
        confirmpassword.value.trim() === ''){
        alert('all fields are mandatory');
    }else{
        if(password.value.trim() !== confirmpassword.value.trim()){
            alert('password not matching!');
            password.value = '';
            confirmpassword.value = '';
        }else{
            if(localStorage.getItem('users')){
                if(checkIfUserExist(email.value)){
                    alert('Email already mapped with another user');
                }else{
                    saveUser(firstName.value,lastName.value,email.value,password.value);
                }
            }else{
                saveUser(firstName.value,lastName.value,email.value,password.value);
            }
        }
    }
});


//utilities functions
function checkIfUserExist(emailId){
    let users = JSON.parse(localStorage.getItem('users'));

    const obj = users.find(user=> user.email === emailId);

    if(obj) return true;
    return false;
}

function saveUser(fname,lname,emailId,pass){
    let obj = {
        firstName:fname,
        lastName:lname,
        email:emailId,
        password:pass
    }
    if(localStorage.getItem('users')){
        let users = JSON.parse(localStorage.getItem('users'));
        let newArr = [...users,obj];
        localStorage.setItem('users',JSON.stringify(newArr));
    }else{
        let users = [obj];
        localStorage.setItem('users',JSON.stringify(users));
    }

    //for session 
    sessionStorage.setItem('loggedInUser',JSON.stringify(obj));

    //now clean the form
    cleanTheForm();
    alert('sign up successful');
    window.location.href='./profile';
}

function cleanTheForm(){
    firstName.value='';
    lastName.value='';
    email.value='';
    password.value='';
    confirmpassword.value='';
}