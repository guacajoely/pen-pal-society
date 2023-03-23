import { getPenpals } from "./dataAccess.js"

export const createAuthorDropdown = () => {

    const penpals = getPenpals()

    return `<select id="dropdown-author">
                    <option value="0">Choose author...</option>
   ${
        penpals.map(penpal => {
            
            return `<option class="letterAuthor" value="${penpal.id}">${penpal.name}</option>`
        }).join("")
    }
            </select>`
}


export const createRecipientDropdown = () => {

    const penpals = getPenpals()

    return `<select id="dropdown-recipient">
                    <option value="0">Choose recipient...</option>
   ${
        penpals.map(penpal => {
            
            return `<option name="letterRecipient" value="${penpal.id}">${penpal.name}</option>`
        }).join("")
    }
            </select>`
}