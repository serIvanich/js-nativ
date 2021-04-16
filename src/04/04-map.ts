import {GovernmentBuildingType, HouseType} from "../02-object/02-02";

export function getStreetsTitlesOfGovermentsBuildings(governmentBuildings: Array<GovernmentBuildingType>){
    return governmentBuildings.map( b => b.address.street.title )
}

export function getStreetTitlesOfHouses(houses: Array<HouseType>){
    return houses.map( b => b.address.street.title )
}

export function createMessage(houses: Array<HouseType>){
    return houses.map( b => `Hello my friends from ${b.address.street.title}` )
}
