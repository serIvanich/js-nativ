import {StudentType} from "../02-object/02-01";

export const addSkill = (s: StudentType, skill: string) => {
    s.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function beActive(s: StudentType) {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, country: string) => {
    return s.address.city.countryTitle === country
}