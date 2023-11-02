const abc: string = 'hello world'
console.log(abc)

let myName = "Adnan"
let isAdmin: boolean = false

// ==================== declaring an array ======================
let studentNames: string[] = ['Tomal', 'Jamal', 'Babu', 'Zahir']
let studentIds: number[] = [5, 8, 2, 1]
let studentDetails: [string, number, boolean] = ['Adnan', 6, true]

//===================== declaring an object =======================
let person: {
    nationality: 'Bangladeshi'
    // fixed value

    readonly nid: number,
    // can't change the value

    firstName: string,
    middleName?: string, 
    // made it Optional

    lastName: string,
} = {
    nationality: 'Bangladeshi',
    nid: 123456,
    firstName: 'Adnan',
    lastName: 'Shojol'
}

person.middleName = 'Hossain'
// person.nid = 23456 [wont work, because 'nid' is readonly]


//===================== declaring a function =======================

function addNumber(num1: number, num2: number): number {
    return num1 + num2
}

const addNumberArroy = (num1: number, num2: number): number => {
    return num1 + num2;
}

const person2 = {
    personName: 'Adnan',
    balance: 25,
    addNumber3(num2: number): number {
        return this.balance + num2;
    }
}

const numbers: number[] = [1, 2, 3, 4]
const numbersSq: number[] = numbers.map((num: number) => num*num)