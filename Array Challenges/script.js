
function alwaysHungry(arr) {
    var fCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            fCount++;
        }
    }
    if (fCount == 0) {
        console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);

function highPass(arr, cutoff) {
    let lastArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            lastArr.push(arr[i]);
        }
    }
    return lastArr;
}

let result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);


function betterThanAverage(arr) {
    let sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let avg = sum / arr.length;
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++;
        }
    }
    return count;
}
let resultt = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(resultt);

function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

var resultt1 = reverse(["a", "b", "c", "d", "e"]);
console.log(resultt1);


function fibonacciArray(n) {
    
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        let prev = fibArr[fibArr.length-1];
        let prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}
let resultt2= fibonacciArray(10);
console.log(resultt2);