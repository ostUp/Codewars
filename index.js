// Create Phone Number(6 kyu)✅
// 1. https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// function createPhoneNumber(numbers) {
// 	return `(${numbers.join('').slice(0, 3)}) ${numbers.join('').slice(3, 6)}-${numbers.join('').slice(6, 10)}`
// }
// console.log('1 Завдання:', createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// !==========================================================================

// Who likes it?(6 kyu)✅
// 2.  https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// function likes(names) {
// 	const expression = Array.isArray(names) && names.length
// 	if (expression === 0 || names === undefined) {
// 		return "no one likes this"
// 	} else if (expression === 1) {
// 		return `${names[0]} likes this`
// 	} else if (expression === 2) {
// 		return `${names[0]} and ${names[1]} like this`
// 	} else if (expression === 3) {
// 		return `${names[0]}, ${names[1]} and ${names[2]} like this`
// 	} else if (expression > 3) {
// 		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// 	}
// }
// console.log('2 Завдання:', likes(["Alex", "Jacob"]));

// !==========================================================================

// Stop gninnipS My sdroW!(6 kyu)✅
// 3. https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
// Examples:
// spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw"
// spinWords("This is a test") => returns "This is a test"
// spinWords("This is another test") => returns "This is rehtona test"
// function spinWords(string) {
// 	let res = []
// 	let arrayFromSring = string.split(' ')
// 	for (let i = 0; i < arrayFromSring.length; i++) {
// 		if (arrayFromSring[i].length >= 5) {
// 			res.push(`${arrayFromSring[i].split('').reverse().join('')}`)
// 		} else {
// 			res.push(`${arrayFromSring[i]}`)
// 		}
// 	}
// 	return res.join(' ')
// }

// console.log('3 Завдання', spinWords("Just gniddik there is still one more"));

// !==========================================================================

// Convert string to camel case(6 kyu)
// 4. https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// function toCamelCase(str){

// }
// console.log('4 Завдання', toCamelCase("The-Stealth-Warrior"));

// !==========================================================================

// 5. https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
// sumStrings('1','2') // => '3'
// function sumStrings(a,b) {

// }
// console.log('5 Завдання', sumStrings('1', '2'));