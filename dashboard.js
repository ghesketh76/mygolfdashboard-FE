const baseURL = "http://localhost:3000"
const courseURL = `${baseURL}/golfcourses`
const teeBoxURL = `${baseURL}/teeboxes`

const courseDropDown = document.querySelector('#course-dropdown')
const teeDropDown = document.querySelector('#teebox-dropdown')

fetch(courseURL)
    .then(response => response.json())
    .then(courses => courses.forEach(course => {
        const courseOption = document.createElement('option')
        courseOption.value = course.id
        courseOption.textContent = course.name
        courseDropDown.append(courseOption)
        console.log(course.teeboxes)
        // const teeOption = document.createElement('option')
        // teeOption.value = course.teeboxes.id
        // console.log(teeOption)

    //   courseDropDown.addEventListener('change', (event) => {
    //       addTeeBoxes(event, course)
    //     })
    }))

// function addTeeBoxes(event, course) {
//     if (event.target.value === "7") {
//         // const currentCourse = course.find(course => event.target.value === course.id)
//         console.log(course)
//     }
// }

// console.log(courseDropDown.value)