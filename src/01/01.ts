
export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}

export function splitIntoWords(sentense: string) {
    let words = sentense.toLowerCase().split(' ')
    return words.filter(el => el !== '' && el !== '-')
            .map(el => el
                .replace(/[,.!]/g, ''))
                // .replace('!', '')
                // .replace(',', ''))

}
console.log(splitIntoWords('JS, Python - the best  programmers language.'))
console.log(splitIntoWords('Hello my friend!'))

