const baseURL = "http://localhost:3000"
const courseURL = `${baseURL}/golfcourses`
const newRoundURL = `${baseURL}/newrounds`

const courseDropDown = document.querySelector('#course-dropdown')
const teeDropDown = document.querySelector('#teebox-dropdown')
const newRoundForm = document.querySelector('.new-round')

fetch(courseURL)
    .then(response => response.json())
    .then(courses => courses.forEach(course => {
        const courseOption = document.createElement('option')
        courseOption.value = course.id
        courseOption.textContent = course.name
        courseDropDown.append(courseOption)
    }))

newRoundForm.addEventListener('submit', postNewRound)

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
        .then(round => console.log(round))
}