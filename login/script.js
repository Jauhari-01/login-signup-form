const email = document.getElementById('email');
const password = document.getElementById('password');
const signInBtn = document.getElementById('signInBtn');
const notUserBtn = document.getElementById('signupRedirect');


notUserBtn.addEventListener('click',(e)=>{
    window.location.href = '../';
})

signInBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(email.value.trim()===''|| password.value.trim() ===''){

    }else{
        let users = JSON.parse(localStorage.getItem('users'));
        if(users){
            let currentUser = users.find(user=>{
                return user.email === email.value.trim();
            });
            if(currentUser){
                if(password.value.trim() === currentUser.password){
                    sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));
                    alert('Logged in');
                    window.location.href = '../profile';
                }else{
                    alert('Incorrect password');
                }
            }else{
                alert('You have not signed up');
                notUserBtn.click();
            }
        }else{
            alert('You have not signed up');
            notUserBtn.click();
        }
    }
});