
export const JournalForm = () => {
    let journalFormHTML = ""
    journalFormHTML += `
            <form class="entryForm">
            <h2 class="entryListTitle">New Entry</h2>
                    <fieldset class="entry-box">
                        <label for="entryDate">Date</label>
                        <input type="date" name="entryDate" class="entryForm__date">
                    </fieldset>
                    <fieldset class="entry-box">
                        <label>Concepts Covered</label>
                        <textarea>Type here</textarea>
                    </fieldset>
                    <fieldset class="entry-box">
                        <label>Journal Entry</label>
                        <textarea>Type here</textarea>
                    </fieldset>
                    <fieldset class="entry-box">
                        <label>How do you feel today?</label>
                        <select>
                            <option>Happy</option>
                            <option>Fine</option>
                            <option>Sad</option>
                        </select>
                    </fieldset>
                    <fieldset class="entry-box">
                        <button class="entry-box-button">Save Entry</button>
                    </fieldset>
                </form>`
    return journalFormHTML
}