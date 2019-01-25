export function getPeople() {
    return [
        {
            name: "Bob",
            email: "bob@gmail.com",
        }, {
            name: "Terrance",
            email: "t@g.c",
        }
    ]
}

export function getPeopleP() {
    return fetch("https://private-9e818b-foo167.apiary-mock.com/people")
        .then(res => res.json())
        .then(result => result.people)
}