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

// console.log('3 Завдання:', spinWords("Just gniddik there is still one more"));

// !==========================================================================

// Convert string to camel case(6 kyu)✅
// 4. https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// 1. Якісь інші пропуски можуть бути?
// 2. Цифри можуть бути?
// Object.defineProperty(String.prototype, 'capitalize', {
// 	value: function () {
// 		return this.charAt(0).toUpperCase() + this.slice(1);
// 	},
// 	enumerable: false
// });

// function toCamelCase(str) {
// 	let res = []
// 	let arrayFromStr = str.split(/[_ -]/)
// 	res.push(arrayFromStr[0])

// 1.5 год сидів і виправляв цей іф. Потім видалив все взагалі - запрацювало)
// 	if (arrayFromStr[0][0] === arrayFromStr[0][0].toUpperCase()) {
// 	if (arrayFromStr[0][0] === arrayFromStr[0][0].match(/[A-Z]/g)) {

// 	if (arrayFromStr[0][0]) {
// 		for (let i = 1; i < arrayFromStr.length; i++) {
// 			res.push(arrayFromStr[i].capitalize())
// 		}
// 	}
// 	else if (arrayFromStr[0][0] !== /[A-Z]/) {
// 		for (let j = 1; j < arrayFromStr.length; j++) {
// 			res.push(arrayFromStr[j].capitalize())
// 		}
// 	}
// 	return res.join('')
// }
// console.log('4 Завдання:', toCamelCase("She-stealth-Warr_or"));

// !==========================================================================

// Sum Strings as Numbers(4 kyu)❌✅
// 5. https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
// sumStrings('1','2') // => '3'
// function sumStrings(a, b) {
// 	return ((+a) + (+b)).toString()
// }
// console.log('5 Завдання:', sumStrings('1', '2'));

// !==========================================================================

// Moving Zeros To The End(5 kyu)✅
// 6. https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
// var moveZeros = function (arr) {
//    var count = 0;
//    for (i = 0; i < arr.length; i++) {
//       if (arr[i] === 0) {
//          arr.splice(i, 1);
//          i--;
//          count++;
//       }
//    }
//    for (i = 0; i < count; i++) {
//       arr.push(0);
//    }
//    return arr;
// };
// console.log("6 Завдання:", moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// !==========================================================================

// Counting Duplicates(6 kyu)
// 7. https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
// function duplicateCount(text) {

// }
// console.log('7 Завдання:', duplicateCount("aabbcde"));

// !==========================================================================

// 16+18=214(7 kyu)
// 8. https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript
// 16
// +
// 18
// --
// 214
// function add(num1, num2) {

// }
// console.log('8 Завдання:', add(222, 11));

// !==========================================================================

// The Hashtag Generator(5 kyu)
// 9. https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
// function generateHashtag(str) {

// }
// console.log('9 Завдання:', add('A dcds edef Dfff'));

// !==========================================================================
