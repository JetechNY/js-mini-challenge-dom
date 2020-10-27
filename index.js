/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

PLAYERS.forEach(function(player) {
    let div = document.createElement("div")
    div.className = "player"
    div.dataset.number = `${player.number}`
    //div.dataset.number = player.number
    //div.id = player.number
    div.innerHTML = `<h3>
        ${player.name} (<em>${player.nickname}</em>)
        </h3>
        <img src="${player.photo}" alt="${player.name}">`
        document.querySelector(".player-container").append(div)
})

/***** Deliverable 4 *****/
document.querySelector("[data-number = '7']").remove()