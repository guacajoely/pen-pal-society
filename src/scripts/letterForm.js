import { createAuthorDropdown, createRecipientDropdown } from "./createDropdowns.js"
import { sendLetter } from "./dataAccess.js"
import { createTopicRadios } from "./topicRadios.js"

export const letterForm = () => {
    let html = `
        <div class="field">
            <h2>Author</h2>
            ${createAuthorDropdown()}
        </div>
        <div class="field">
            <h2>Letter</h2>
            <textarea id="letter" name="letterMessage" rows="10" cols="50"></textarea>
        </div>
        <div class="field">
            <h2>Topics</h2>
            ${createTopicRadios()}
        </div>
        <div class="field">
            <h2>Recipient</h2>
            ${createRecipientDropdown()}
        </div>

        <button class="letter-submit" id="letter-submit">Send Letter</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "letter-submit") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector('select[id="dropdown-author"]').value
        const userRecipient = document.querySelector('select[id="dropdown-recipient"]').value
        const userMessage = document.querySelector("textarea[name='letterMessage']").value
        const userTopic = document.querySelector("input[name='letterTopic']:checked").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            authorId: userAuthor,
            recipientId: userRecipient,
            message: userMessage,
            sendDate: (Date.now()),
            topicId: userTopic
        }

        console.log(dataToSendToAPI)

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})