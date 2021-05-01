function increaseAge(u: UserType) {
    u.age += 1
}

type UserType = {
    name: string,
    age: number
}
type User2Type = {
    name: string,
    age: number
    address: {title: string}
}

test('function increaseAge a work', () => {
    const user: UserType = {
        name: 'Serik',
        age: 39,
    }
    increaseAge(user)
    expect(user.age).toBe(40)
})
test('array reference test', () => {
    const users = [
        {
            name: 'Serik',
            age: 39,
        },
        {
            name: 'Gleb',
            age: 15,
        },
    ]
    let admins = users
    admins.push({name:'Banyan', age: 10})
    expect(users[2]).toEqual({name:'Banyan', age: 10})
})
test('reference type test', () => {
    const user: User2Type = {
        name: 'Serik',
        age: 39,
        address: {
            title: 'Dnepr'
        }
    }
    const user2: User2Type = {
        name: 'Olya',
        age: 37,
        address: user.address
    }
    user2.address.title = 'Maldivy'
    expect(user.address.title).toBe('Maldivy')
})
test('reference type array test', () => {
    const address = {title: 'Dnepr'}
    const user: User2Type = {
        name: 'Serik',
        age: 39,
        address: address
    }
    const user2: User2Type = {
        name: 'Olya',
        age: 37,
        address: address
    }
    const users = [user, user2, {name: 'Mikle', age: 11, address: address}]
    const admins = users
    admins[0].name = 'Sergey'
    expect(user.name).toBe('Sergey')
    expect(users[0].name).toBe('Sergey')
})

