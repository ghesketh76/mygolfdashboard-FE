const userURL = 'http://localhost:3000/users'

const signUp = document.querySelector('.signup')

signUp.addEventListener('submit', createNewUser)

function createNewUser(event) {
    event.preventDefault()
    const signUpData = new FormData(event.target)
    const first_name = signUpData.get('first_name')
    const last_name = signUpData.get('last_name')
    const username = signUpData.get('username')
    const password = signUpData.get('password')
    
    const newUser = {first_name, last_name, username, password}

    fetch(userURL, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
}

function redirect(){
    window.location.href="index.html"
}