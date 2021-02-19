const baseURL = "http://localhost:3000"
const averageScoreURL = `${baseURL}/average_score`
const showRoundsURL = `${baseURL}/show_rounds`
const newRoundURL = `${baseURL}/newrounds`

const averageScore = document.querySelector('#average')
const newRoundButton = document.querySelector('#new-round-button')
const roundList = document.querySelector('.all-rounds')




fetch(averageScoreURL, {
    headers: {
        Authorization: `Bearer ${localStorage.token}`
    }
})
    .then(response => response.json())
    .then(score => {
        averageScore.textContent = score
    })



fetch(showRoundsURL, {
    headers: {
        Authorization: `Bearer ${localStorage.token}`
    }
})
    .then(response => response.json())
    .then(rounds => rounds.forEach(round => {
        const roundItem = document.createElement('li')
        roundItem.classList = "rounds"
        const deleteButton = document.createElement('button')
        deleteButton.textContent = "Delete"
        roundItem.textContent = `${round.golfcourse.name} - ${round.score}`
        // roundItem.append(deleteButton)
        roundList.append(roundItem)

        deleteRound(deleteButton, roundItem, round)
    }))

function deleteRound (button, item, round) {
    button.addEventListener('click', () => {
        item.remove()

        fetch(`${newRoundURL}/${round.id}`, {
            method: 'DELETE'
        })
    })
}