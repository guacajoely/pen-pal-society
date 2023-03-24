import { createAuthorDropdown, createRecipientDropdown } from "./createDropdowns.js"
import { getLetters, getTopics, sendLetter, sendLetterTopic } from "./dataAccess.js"
import { createTopics } from "./createTopics.js"

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
            ${createTopics()}
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

        //grab ALL checked checkboxes instead of single radio button
        const checkedTopics = document.querySelectorAll("input[name='letterTopic']:checked")
        const arrayOfUserTopics = Array.from(checkedTopics).map(x => x.value)

        //we need to assign the ID manually now to attach the letterID to each letterTopic object
        const currentLetters = getLetters()
        const currentLetterId = currentLetters.length + 1

        // Create a letter object out of the user input
        const dataToSendToAPI = {
            id: currentLetterId,
            authorId: userAuthor,
            recipientId: userRecipient,
            message: userMessage,
            sendDate: (Date.now()),
        }

        // Send the letter to the API for permanent storage
        sendLetter(dataToSendToAPI)
        console.log(`letter sent to ${userRecipient}`)

        // Create a letterTopic objects out of the arrayOfUserTopics
        for(const topic of arrayOfUserTopics){

            const topicObject = {
                letterId: currentLetterId,
                topicId: parseInt(topic)
            }

            // Send the letterTopic to the API for permanent storage
            sendLetterTopic(topicObject)
            console.log(`letter has been marked with topic#${topic}`)
            
        }
    }
})