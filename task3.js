// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
// for (var i = 0; i < 11; i++) {
//  new_string += numsArr[i]
// }
// console.log(new_string);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
// new_string = numsArr.join(",");
// console.log(new_string);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = numsArr.reverse().join(" ");
// console.log(new_string);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <= 10; i++) {
//   if (numsArr[i] % 2 == 0) {
//     numsArr[i] = "even";
//   }
// }
// console.log(numsArr);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     numsArr[i] = "even";
//   }
// }
// console.log(numsArr);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let sum = 0;
// for (var i = 0; i <= 10; i++) {
//   sum += numsArr[i];
// }
// console.log(sum);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i <= 10; i++) {
//   if (numsArr[i] % 2 == 0) {
//     sum += numsArr[i];
//   }
// }
// console.log(sum);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 100;
// for (var i = 0; i <= 10; i++) {
//   if (numsArr[i] % 2 == 0) {
//     sum += numsArr[i];
//   } else {
//     sum -= numsArr[i];
//   }
// }
// console.log(sum);

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// for (var i = 0; i < numsArr.length; i++) {
//   console.log(`Array(${numsArr[i].length}) [${numsArr[i]}]`);
// }

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// var str_all = "";
// for (var i = 0; i < numsArr.length; i++) {
//   for (var j = 0; j < numsArr[i].length; j++) {
//     str_all += numsArr[i][j];
//   }
// }
// console.log(str_all);

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// let inner_array = [];
// for (var i = 0; i < numsArr.length; i++) {
//   inner_array = numsArr[i];
//   for (var j = 0; j < inner_array.length; j++) {
//     if (j % 2 == 0) {
//       inner_array[j] = "even";
//     }
//   }
//   numsArr[i] = inner_array;
// }
// console.log(numsArr);

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// var str_all = [];
// for (var i = 0; i < numsArr.length; i++) {
//   for (var j = 0; j < numsArr[i].length; j++) {
//     str_all.push(numsArr[i][j]);
//   }
// }
// console.log(str_all.reverse().join(" "));

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// var sum_odd = 0;
// var sum_even = 0;
// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];
//   for (var j = 0; j < inner_array.length; j++) {
//     if (numsArr[i][j] % 2 != 0) {
//       sum_odd += numsArr[i][j];
//     } else {
//       sum_even += numsArr[i][j];
//     }
//   }
// }
// console.log(sum_odd);
// console.log(sum_even);
