const gasStationStart = (gas, cost) => {
  for (let i = 0; i < gas.length; i++) {
    let totalGas = 0;

    for (let j = 0; j < gas.length; j++) {
      totalGas += gas[(j + i) % gas.length];
      totalGas -= cost[(j + i) % gas.length];

      if (totalGas < 0) {
        break; // not enough gas
      } else if (j === gas.length - 1) {
        return i; // reached last station
      }
    }
  }

  return -1;
};

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

console.log(gasStationStart(gas, cost));
