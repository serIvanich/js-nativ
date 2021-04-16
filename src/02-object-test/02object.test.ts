import { StudentType } from "../02-object/02-01"

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: 'Sergiy',
        age: 39,
        address: {
            city: {
                title: 'Dnepr',
                countryTitle: 'Ukraine',
            },
            streetTitle: 'Filatova 23',
        },
        technologies: [
            {id: 1, title: 'HTML'},
            {id: 2, title: 'CSS'},
            {id: 3, title: 'JavaScript'},

        ],
        isActive: false,

    }
})
test('student should be have 3 skill technologies', () => {
    expect(student.technologies.length).toBe(3)
})

test('student should be from Dnepr', () => {
    expect(student.address.city.title).toBe('Dnepr')
})

test('student should be no active', () => {
    expect(student.isActive).toBeFalsy()
})
