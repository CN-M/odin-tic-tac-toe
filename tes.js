const arr = [1,2,3,4,5]

funcy = (total, Number) => total + Number

const newArr = arr.reduce(funcy)
const newArr1 = arr.reduce((total, number) => {
    return number == 4 ? total + 1 : number, 0
})


console.log(newArr)

