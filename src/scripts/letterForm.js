import { createTopicRadios } from "./topicRadios.js"

export const letterForm = () => {
    let html = `
        <div class="field">
            <h2>Author</h2>
            *author dropdown go here*
        </div>
        <div class="field">
            <h2>Letter</h2>
            *letter input go here*
        </div>
        <div class="field">
            <h2>Topics</h2>
            ${createTopicRadios()}
        </div>
        <div class="field">
            <h2>Recipient</h2>
            *recipient dropdown go here*
        </div>

        <button class="letter-submit" id="letter-submit">Send Letter</button>
    `

    return html
}



const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "letter-submit") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector("input[name='letterAuthor']").value
        const userRecipient = document.querySelector("input[name='letterRecipient']").value
        const userTopic = document.querySelector("input[name='letterTopic']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            authorId: userAuthor,
            recipientId: userRecipient,
            sendDate: (Date.now()),
            Topic: userTopic,
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})