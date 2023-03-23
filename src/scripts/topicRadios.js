import { getTopics } from "./dataAccess.js"

export const createTopicRadios = () => {
    const topics = getTopics()
    let html = "<ul>"

    const listItemsArray = topics.map(topic => {

            return `<li><input type="radio" name="letterTopic" value="${topic.id}"/> ${topic.name}</li>`
    
    })

    html += listItemsArray.join("")
    html += "</ul>"

    return html
}