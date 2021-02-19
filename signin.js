const loginURL = "http://localhost:3000/login"

const login = document.querySelector('.sign-in-form')
console.log(login)

login.addEventListener('submit', loginUser)

function loginUser (event) {
    event.preventDefault()
    const loginData = new FormData(event.target)
    const username = loginData.get('username')
    const password = loginData.get('password')

    const existingUser = {username, password}

    fetch(loginURL, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(existingUser)
    })
        .then(response => response.json())
        .then(result => {
            if (result.message) {
                throw new Error(result.message)
            } else {
                localStorage.setItem('token', result.token)
                window.location.href = '/dashboard.html'
            }
        })
        .catch(error => {
            console.error(error.message)
            const errorMessage = document.querySelector('.error-message')
            errorMessage.textContent = error.message
            errorMessage.classList.remove('hidden')
        })
}

