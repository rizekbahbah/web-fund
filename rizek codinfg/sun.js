function countBuildings(arr) {
    let count = 1;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            count++;
            max = arr[i];
        }
    }
    return count;
}
let num_of_buildings_who_see_sunlight = countBuildings([2, 5, 1, 8, 3])
console.log(num_of_buildings_who_see_sunlight)


// function countBuildings(arr) {
//     let count = 0; 
//     let maxHeight = arr[arr.length-1]; 
//     for (let i = arr.length - 1; i >= 0; i--) { 
//         if (arr[i] > maxHeight) {
//             count++; 
//             maxHeight = arr[i]; 
//         }
//     }
//     return count;
// }
// let num_of_buildings_who_see_sunlight = countBuildings([2, 5, 1, 8, 3])
// console.log(num_of_buildings_who_see_sunlight)
