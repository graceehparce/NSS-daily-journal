/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = getJournalEntries()
    let allEntriesAsHTML = ""


    for (const entry of entries) {
        allEntriesAsHTML += `
        <div id=each-entry-box>
            <h3 id="each-entry">${entry.concept}</h3>
            <div id="entry-date">${entry.date}</div>
            <div id="entry-content">${entry.entry}</div>
            <div id="entry-mood">How I felt: ${entry.mood}</div>
            <div id="buttons">
                <button id="edit-button">Edit</button>
                <button id="delete-button">Delete</button>
            </div>
        </div>
       
        `
    }

    return allEntriesAsHTML
}
