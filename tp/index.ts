console.log("hello tsc")

// Implicit types

let myWorld = "My world!"

// Explicit types

let firstName: string = "Christoper"
let age: number = 24

// tuple type

type StringAndNumber = [string, number]

let x = ["hi", 20]

// Enums type

enum Continents
{
    Africa, // 0
    Australia, // 1
    Asia, // 2
    Antarctica, // 3
    Europe,  // 4
    NorthAmerica, // 5
    SouthAmerica // 6
}

/// enum usage -->

var regionOne = Continents.Africa // 0

// Interfaces (like structure in C )

interface User
{
    name: string,
    age: number,
}

const user: User = 
{
    name: "Laura",
    age: 20,
}

// Composing types -> Union

type WindowState = "open" | "closed" | "minimized"
type LockState = "locked" | "unlocked"
type OddNumber = 1 | 3 | 5 | 7 | 9

const odd: OddNumber = 5;

const getLength = (param:string | string[]) => 
{
    return param.length
}

getLength('test') // value returned -> 4
getLength(['salut', 'les amis']) // value returned -> 2