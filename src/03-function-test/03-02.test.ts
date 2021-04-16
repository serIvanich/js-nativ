import {CityType} from "../02-object/02-02";
import {addManyToBudget, createMessage, demolishHousesOnTheStreet, repairHouse, toFireStaff, toHireStaff} from "../03-function/03-02";

let city: CityType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            }
        ],
        governmentBuildings:[
            {
                type: 'HOSPITAL', budget: 200000,
                staffCount: 200, address: { street: {title: 'Central Str'}
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000,
                staffCount: 1000, address: { street: {title: 'South Str'}
                }
            },
        ],
        citizensNumber: 1000000

    }
})

test('budget should be changed for HOSPITAL', () => {
    addManyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})

test('Budget should be changed for FIRE-STATION', () => {
    addManyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('Houses should be destroyed', () => {
    let newCity = demolishHousesOnTheStreet(city, 'Happy street')

    expect(newCity.houses.length).toBe(1)
    expect(newCity.houses[0].id).toBe(1)
})

test('House should be repaired', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

test('staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be downsized', () => {
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test('Greeting message should be correct for city', () => {
    const message = createMessage(city)

    expect(message).toBe('Hello New York citizens. I want you be happy. All 1000000 men')
})