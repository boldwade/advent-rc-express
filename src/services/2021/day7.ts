export const adventDay7Map = (input: string[]): number[] => input[0].split(',').map(x => parseInt(x));

const calculateFuelForSteps = (n: number) => (n * (n + 1)) / 2;

export const adventDay7a = (input: number[], useSteps = false): number => {
  const startTime = Date.now();

  const minPosition = Math.min(...input);
  const maxPosition = Math.max(...input);

  const uniquePositions = new Map<number, number>();
  input.forEach(v => uniquePositions.set(v, 0));

  const distancesByIndex = new Map<number, number>();
  const distancesByValue = new Map<number, number>();

  for (let i = minPosition; i < maxPosition; i++) {
    const uniqueDistances = new Map<number, number>();
    uniquePositions.forEach((v, k) => {
      const countOfSamePositions = input.filter(x => x === k).length;
      const distanceToGoal = Math.abs(i - k);
      const steps = useSteps ? calculateFuelForSteps(distanceToGoal) : 1;
      uniqueDistances.set(k, (useSteps ? steps : distanceToGoal) * countOfSamePositions);
    });

    // eslint-disable-next-line prettier/prettier
    const totalDistanceValue = [...uniqueDistances.values()].reduce((p, c) => p + c, 0);
    distancesByIndex.set(i, totalDistanceValue);
    distancesByValue.set(totalDistanceValue, i);
  }

  const minDistanceKey = Math.min(...[...distancesByIndex.values()]);
  const stopTime = Date.now();

  console.log('Day 7 answer:', minDistanceKey, (stopTime - startTime) / 1000);
  return minDistanceKey;
};

export const adventDay7b = (input: number[]): number => adventDay7a(input, true);
