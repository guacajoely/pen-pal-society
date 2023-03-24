const applicationState = {}
const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (responseArray) => {
                // Store the external state in application state
                applicationState.letters = responseArray
            }
        )
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (responseArray) => {
                // Store the external state in application state
                applicationState.topics = responseArray
            }
        )
}

export const fetchLetterTopics = () => {
    return fetch(`${API}/letterTopics`)
        .then(response => response.json())
        .then(
            (responseArray) => {
                // Store the external state in application state
                applicationState.letterTopics = responseArray
            }
        )
}

export const fetchPenpals = () => {
    return fetch(`${API}/penpals`)
        .then(response => response.json())
        .then(
            (responseArray) => {
                // Store the external state in application state
                applicationState.penpals = responseArray
            }
        )
}

export const getLetters = () => {
    return applicationState.letters.map(obj => ({ ...obj }))
}

export const getTopics = () => {
    return applicationState.topics.map(obj => ({ ...obj }))
}

export const getPenpals = () => {
    return applicationState.penpals.map(obj => ({ ...obj }))
}

export const getLetterTopics = () => {
    return applicationState.letterTopics.map(obj => ({ ...obj }))
}

export const sendLetter = (letter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(letter)
    }

    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const sendLetterTopic = (topic) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(topic)
    }

    return fetch(`${API}/letterTopics`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}