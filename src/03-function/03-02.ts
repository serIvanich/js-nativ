import {CityType, GovernmentBuildingType, HouseType} from "../02-object/02-02";

export function addManyToBudget(building: GovernmentBuildingType, budget: number) {
    building.budget += budget
}

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
    return city
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, count: number) => {
    building.staffCount += count
}

export const toHireStaff = (building: GovernmentBuildingType, count: number) => {
    building.staffCount -= count
}

export function createMessage(city: CityType) {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`
}
