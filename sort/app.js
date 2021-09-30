console.log('hi')

// buble sort

function standardSort(array)
{
    return array.sort((nb1, nb2)=> { return (nb1 - nb2 )})
}

function bubleSort(array)
{
    let len = array.length

    for (let i = 0 ; i < len ; i++)
    {
        for (let j = 0 ; j < len ; j++)
        {
            if (array[j + 1] < array[j])
            {
                let tmp = array[j]
                array[j + 1] = array[j]
                array[j] = tmp
            }
        }
    }
    return array
}

function standardReverse(str)
{
    return str.split("").reverse().join("")
}

function theReverse(str)
{
    if (str == "")
    {
        return ""   
    }
    else
    {
        return theReverse(str.substr(1)) + str.charAt(0)
    }
}

function quickSort(array)
{

    if (array.length === 1)
    {
        return array
    }
    
    const pivot = []
    const left = []
    const right = []

    for (let i = 0 ; i < array.length - 1 ; i++)
    {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i])
    }

    if (left.length > 0 && right.length > 0)
    {
        return [...quickSort(array), pivot, ...quickSort(array)]
    }
    else if (left.length > 0)
    {
        return [...quickSort(left), pivot]
    }
    else
    {
        return [...pivot, quickSort(right)]
    }
}

let str = "Salut les amis"
let tab = [89,4,7,90, 44, 22, 46, 6, 3, 77, 106, 33, 2]

console.log(standardSort(tab))
console.log(bubleSort(tab))
console.log(standardReverse(str))
console.log(theReverse(str))
console.log(quickSort(tab))