import { UsersType } from "./associative-array";

let users: UsersType
beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Gleb'},
        '33435': {id: 33435, name: 'Olya'},
        '78': {id: 78, name: 'Tanya'},
        '11': {id: 11, name: 'Sasha'},


    }
})

test('should select corresponding user from obj', () => {
    expect(users['33435'].name).toBe('Olya')
})

test('should update corresponding user', () => {
    users[11].name = 'Alexsandr'
    expect(users[11].name).toBe('Alexsandr')
    expect(users[11]).toEqual({id: 11, name: 'Alexsandr'})
})

test('should delete corresponding user', () => {
    delete users['78']
    expect(users['78']).toBeUndefined()
})

