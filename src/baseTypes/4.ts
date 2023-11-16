/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/
type Tuple = [a: string, b: number]
let person: Tuple = ['Max', 21];

export {person};