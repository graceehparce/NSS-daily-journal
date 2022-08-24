import { Entries } from "./Entries.js"
import { JournalForm } from "./JournalForm.js"

export const DailyJournal = () => {
    return `
        <article>
            ${JournalForm()}        
        </article>
    
        <div class="entryList">
        <h2 class="entryListTitle">Entries</h2>
            ${Entries()}
        </div>
    `
}