
type CityType = {
    title: string
    countryTitle: string

}

type AddressType = {
    city: CityType
    streetTitle: string

}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    address: AddressType
    technologies: Array<TechType>
    isActive: boolean
}

export const student: StudentType = {
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