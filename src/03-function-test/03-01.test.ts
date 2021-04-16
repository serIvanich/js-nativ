import {StudentType} from "../02-object/02-01";
import {addSkill, beActive, doesStudentLiveIn} from "../03-function/03-01";

let student: StudentType
beforeEach(()=> {
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

test('added new skill to technologies', () => {
    let skill  = 'React'
    addSkill(student, skill)
    expect(student.technologies.length).toBe(4)
})

test ('isActive should be true', () => {
    beActive(student)
    expect(student.isActive).toBeTruthy()
})

test('does student live in country', () => {
    let res1 = doesStudentLiveIn(student, 'Belarus')
    let res2 = doesStudentLiveIn(student, 'Ukraine')

    expect(res1).toBeFalsy()
    expect(res2).toBeTruthy()
})