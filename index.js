const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(sum, currentBatteries) {
  return sum + currentBatteries;
}, 0);

// Code your solution here
// const totalBatteries = batteryBatches.reduce(function(countObj, currentBatteries) {
//     if (countObj.hasOwnProperty(currentBatteries)) {
//       countObj[currentBatteries]++;
//     } else {
//       countObj[currentBatteries] = 1;
//     }
//     return countObj;
//   }, {});
//   const totalBatteries = Object.entries(batteryBatches).reduce(function(sum, [count, occurrences]) {
//     return sum + (count * occurrences);
//   }, 0);
