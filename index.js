console.log('hit')

const courseURL = 'http://localhost:3000/golfcourses'
const courseSection = document.querySelector('.show-all-courses')

const mymap = L.map('mapid').setView([39.7392, -104.99], 10);
const popup = L.popup()

fetch(courseURL)
    .then(response => response.json())
    .then(courses => courses.forEach(course => {
        const courseLink = document.createElement('h3')
        courseLink.innerHTML = `<a href="/showCourse.html?id=${course.id}">${course.name}</a>`
        courseSection.append(courseLink)
        const latitude = course.latitude
        const longitude = course.longitude
        const marker = L.marker([latitude, longitude]).addTo(mymap)
        mymap.on('click', (event) => {
            popup
                .setLatLng(event.latlng)
                .setContent(`<a href=/showCourse.html?id=${course.id}">${course.name}</a>`)
                .openOn(mymap)
        })
    }))




L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGltaXR0b2luZmluaXR5IiwiYSI6ImNrYmJzamt3dDA0YnQzMG1vbWh3NGIzaTEifQ.r2cKsjXwwnn6UiRRb_LHUA'
}).addTo(mymap);
                            
