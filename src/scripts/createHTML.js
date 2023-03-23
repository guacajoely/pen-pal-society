import { letterForm } from "./letterForm.js"

export const createHTML = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="form">
    ${letterForm()}
    </section>
    <section class="letters">
        <h2>Letters</h2>

    </section>
    `
}