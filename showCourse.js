console.log('hit')

const baseURL = 'http://localhost:3000/'

const queryString = window.location.search 
const queryParams = new URLSearchParams(queryString)
const id = queryParams.get('id')
const courseURL = `${baseURL}golfcourses/${id}`

const showCourse = document.querySelector('.show-course')

fetch(courseURL)
    .then(response => response.json())
    .then(course => {
        const courseName = document.createElement('h2')
        const courseAddress = document.createElement('h3')
        const courseWebsite = document.createElement('h3')
        const teeTimes = document.createElement('h3')
        const coursePhone = document.createElement('h3')
        const holes = document.createElement('h3')
        const par = document.createElement('h3')
        
        courseName.textContent = course.name
        courseAddress.textContent = `${course.address} ${course.city}, ${course.state} ${course.zip}`
        courseWebsite.innerHTML = `<a href="${course.website}">Website</a>`
        teeTimes.innerHTML = `<a href="${course.teetimes}">Book a Tee Time</a>`
        holes.textContent = `Holes: ${course.holes}`
        par.textContent = `Par: ${course.par}`
        coursePhone.textContent = `Phone: ${course.phone}`

        showCourse.append(courseName, courseAddress, coursePhone, courseWebsite, teeTimes, holes, par )
        
    })