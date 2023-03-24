import { getTopics } from "./dataAccess.js"

export const createTopics = () => {
    const topics = getTopics()
    let html = "<ul>"

    const listItemsArray = topics.map(topic => {

            return `<li><input type="checkbox" name="letterTopic" value="${topic.id}"/> ${topic.name}</li>`
    
    })

    html += listItemsArray.join("")
    html += "</ul>"

    return html
}