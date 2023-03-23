import { fetchLetters, fetchTopics } from "./dataAccess.js"
import { createHTML } from "./createHTML.js"
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchLetters()
        .then(() => fetchTopics())
        .then(
            () => {
                mainContainer.innerHTML = createHTML()
            })
}

render()

mainContainer.addEventListener("stateChanged", customEvent => {render()})