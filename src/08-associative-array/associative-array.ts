export type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Gleb'},
    '33435': {id: 33435, name: 'Olya'},
    '78': {id: 78, name: 'Tanya'},
    '11': {id: 11, name: 'Sasha'},

}

console.log(Object.values(users))
let newUser = {id: 666, name: 'Ivan'}
users['666'] = newUser
console.log(Object.values(users))
delete users['78']
console.log(Object.values(users))
newUser = {id: 77, name: 'Tanysha'}
users['77'] = newUser
console.log(Object.values(users))

users['77'].name = 'Valya'
console.log(Object.values(users))
