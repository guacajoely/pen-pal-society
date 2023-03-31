import { getLetters, getLetterTopics, getPenpals, getTopics } from "./dataAccess.js";

export const createLetterList = () => {
    const letters = getLetters()
    const penpals = getPenpals()
    const topics = getTopics()
    const letterTopics = getLetterTopics()

    let html = "<div id='letters-container'>"

    const listItemsArray = letters.map(letter => {

        const matchingRecipient = penpals.find((penpal) => {
            return parseInt(letter.recipientId) === penpal.id
        })

        const matchingAuthor = penpals.find((penpal) => {
            return parseInt(letter.authorId) === penpal.id
        })


        const matchingTopics = []
        for(const singleLetterTopic of letterTopics){
            if(singleLetterTopic.letterId === letter.id){
                for(const topic of topics){
                    if(topic.id === singleLetterTopic.topicId){
                        matchingTopics.push(topic.name)
                    }
                }
            }
        }

        return `<div class='letter'>
        
        <span class="bold">Dear ${matchingRecipient.name} </span>(${matchingRecipient.email}),<br><br>

        <strong>${letter.message}</strong><br><br>

        <strong>Sincerely, ${matchingAuthor.name} </strong>(${matchingAuthor.email})<br><br>

        Sent on ${new Date(letter.sendDate).toLocaleDateString()}<br><br>

        Topics:  ${matchingTopics.join(' ')}
        
        </div>`
    
    })

    html += listItemsArray.join("")
    html += "</div>"

    return html
}
