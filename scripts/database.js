

const database = {
    entries: [
        {
            id: 1,
            date: "07/24/2022",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Sad"
        }, {
            id: 2,
            date: "07/25/2022",
            concept: "Box-Shadow",
            entry: "Team 1 decided that if you use box-shadow in CSS it makes everything look way cooler. Lesson, always use box-shadow.",
            mood: "Happy"
        },
        {
            id: 3,
            date: "7/30/2022",
            concept: "Observation",
            entry: "It's a good idea to ask questions if you're unsure of something. Otherwise you'll spend five days working on Cider Falls because you did your ERD wrong.",
            mood: "Sad"
        }
    ]
}


export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({ ...entry }))
    return copyOfData
}