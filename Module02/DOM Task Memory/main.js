const tiles = document.querySelectorAll(".tile");
const colors = ["red", "blue", "green", "yellow"];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;

let revealCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function addColor(color) {
    let element = document.querySelector(".tile");

    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false");

    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed");

        if (awaitingEndOfMove
            || revealed === "true"
            || element === activeTile
        ) {
            return;
        }

        element.style.backgroundColor = color;
        if (!activeTile) {
            activeTile = element;

            return;
        }

        const colorToMatch = activeTile.getAttribute("data-color");

        if (colorToMatch === color) {
            activeTile.setAttribute("data-revealed", "true");
            element.setAttribute("data-revealed", "true");

            awaitingEndOfMove = false;
            activeTile = null;
            revealCount += 2;

            if (revealCount === tileCount) {
                alert("You win!")
            }

            return;
        }

        awaitingEndOfMove = true
        setTimeout(() => {
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor = null;

            awaitingEndOfMove = false
            activeTile = null
        }, 1000);

    })
    return element
}

for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
    const color = colorsPicklist[randomIndex];
    let tile = addColor(color);
    boardElement.appendChild(tile);

    colorsPicklist.splice(randomIndex, 1);
}


// const tiles = document.querySelectorAll(".tile")
// const colors = ["red", "green", "blue", "yellow"]

// tiles.forEach(tilesForeach)
// function tilesForeach(tile) {
//     tile.onclick = () => {
//         let colorCount = 0

//         let randomIndex = Math.floor(Math.random() * 4)
//         let color = colors[randomIndex];
//         let colorItemList = document.querySelectorAll(`.board .${color}`)
//         if (colorItemList.length <= 1) {
//             console.log(colorItemList);
//             tile.classList.add(color);
//             tile.setAttribute('data-revealed', 'false');
//         }
//         if (colorItemList.length === 2) {
//             colors = colors.filter(elem => elem !== color)
//             colors.pop(color);
//         }
//     }
// }