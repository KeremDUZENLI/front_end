function boolToWord(bool) {
    if (bool === true) {
        return "Yes";
    } else if (bool === false) {
        return "No";
    }
}


function areYouPlayingBanjo1(name) {
    // Implement me
    let str = name
    for (var i = 0; i < name.length; i++) {
        if (name[i] === "R" | name[i] === "r") {
            return name + " plays banjo"
        }
        else {
            return name + " does not play banjo"
        }
    }
}


function areYouPlayingBanjo2(input) {
    if (input[0] === "R" || input[0] === "r") {
        return input + " plays banjo"
    } else {
        return input + " does not play banjo"
    }
}


function grow(x) {
    let sum = 1
    for (var i = 0; i < x.length; i++) {
        sum *= x[i]
    }
    return sum
}


function simpleMultiplication(number) {
    return number % 2 == 0 ? number * 8 : number * 9
}


function squareSum(numbers) {
    let sum = 0
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]
    }

    return sum
}


// ------------------------------------------------------------------------------------------------


function main() {
    console.log(boolToWord(true))

    console.log(areYouPlayingBanjo1("RE"))
    console.log(areYouPlayingBanjo2("me"))

    console.log(grow([1, 2, 5]))

    console.log(simpleMultiplication(10))

    console.log(squareSum([1, 2, 3]))
}

main()
