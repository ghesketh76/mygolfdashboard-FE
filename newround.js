const baseURL = "http://localhost:3000"
const newRoundURL = `${baseURL}/newrounds`
const courseURL = `${baseURL}/golfcourses`

const newRoundForm = document.querySelector('.new-round-form')
const courseDropDown = document.querySelector('#course-dropdown')

newRoundForm.addEventListener('submit', postNewRound)

console.log(newRoundForm)

fetch(courseURL)
    .then(response => response.json())
    .then(courses => courses.forEach(course => {
        const courseOption = document.createElement('option')
        courseOption.value = course.id
        courseOption.textContent = course.name
        courseDropDown.append(courseOption)
    }))

function postNewRound (event) {
    event.preventDefault()
    const newRoundData = new FormData(event.target)
    const golfcourse_id = newRoundData.get('golfcourse_id')
    const score = newRoundData.get('score')
    const newRound = {golfcourse_id, score}
   
    fetch(newRoundURL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newRound)
    }).then(response => response.json())
        .then(window.location.href="/dashboard.html")
}

