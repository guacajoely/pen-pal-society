import { getLetters, getPenpals, getTopics } from "./dataAccess.js";

export const createLetterList = () => {
    const letters = getLetters()
    const penpals = getPenpals()
    const topics = getTopics()

    let html = "<div id='letters-container>"

    const listItemsArray = letters.map(letter => {

        const matchingRecipient = penpals.find((penpal) => {
            return parseInt(letter.recipientId) === penpal.id
        })

        const matchingAuthor = penpals.find((penpal) => {
            return parseInt(letter.authorId) === penpal.id
        })

        const matchingTopic = topics.find((topic) => {
            return parseInt(letter.topicId) === topic.id
        })

        return `<div class='letter'>
        
        Dear ${matchingRecipient.name} (${matchingRecipient.email}),<br><br>

        ${letter.message}<br><br>

        Sincerely, ${matchingAuthor.name} (${matchingAuthor.email})<br><br>

        Sent on ${new Date(letter.sendDate).toLocaleDateString()}<br><br>

        Topic:  ${matchingTopic.name}
        
        </div>`
    
    })

    html += listItemsArray.join("")
    html += "</div>"

    return html
}
