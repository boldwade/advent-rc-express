export const adventDay7Map = (input: string[]): number[] => input[0].split(',').map(x => parseInt(x));

export const adventDay7 = (input: number[]): number => {
  const startTime = Date.now();
  const sortedInput = input; // input.sort((a, b) => a - b);
  const minPosition = Math.min(...input);
  // const minPosition = sortedInput[0];
  const maxPosition = Math.max(...input);
  // const maxPosition = sortedInput[sortedInput.length - 1];

  const uniquePositions = new Map<number, number>();
  [...new Set(sortedInput)].forEach(v => uniquePositions.set(v, 0));
  // sortedInput.forEach(v => uniquePositions.set(v, 0));

  const distancesByIndex = new Map<number, number>();
  const distancesByValue = new Map<number, number>();

  for (let i = minPosition; i < maxPosition; i++) {
    const uniqueDistances = new Map<number, number>();
    // uniquePositions.forEach((v, k) => uniquePositions.set(k, Math.abs(i - v)));
    uniquePositions.forEach((v, k) => uniqueDistances.set(k, Math.abs(i - k) * input.filter(x => x === k).length));

    // eslint-disable-next-line prettier/prettier
    const totalDistanceValue = [...uniqueDistances.values()].reduce((p, c) => p + c, 0);
    distancesByIndex.set(i, totalDistanceValue);
    distancesByValue.set(totalDistanceValue, i);
  }

  const minDistanceKey = Math.min(...[...distancesByIndex.values()]);
  const stopTime = Date.now();

  console.log('Day 7 answer:', minDistanceKey, stopTime - startTime / 1000);
  return minDistanceKey;
  // return distancesByValue.get(minDistanceKey);
};

export const adventDay7a = (input: number[]): number => -1;
