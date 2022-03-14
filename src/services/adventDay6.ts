export const adventDay6Map = (input: string[]): number[] => input[0].split(',').map(x => parseInt(x));

export const getSumOfFish = (input: number[], numberOfDays = 80) => {
  const states = new Map<number, number>([
    [0, input.filter(x => x === 0)?.length ?? 0],
    [1, input.filter(x => x === 1)?.length ?? 0],
    [2, input.filter(x => x === 2)?.length ?? 0],
    [3, input.filter(x => x === 3)?.length ?? 0],
    [4, input.filter(x => x === 4)?.length ?? 0],
    [5, input.filter(x => x === 5)?.length ?? 0],
    [6, input.filter(x => x === 6)?.length ?? 0],
    [7, input.filter(x => x === 7)?.length ?? 0],
    [8, input.filter(x => x === 8)?.length ?? 0],
  ]);

  for (let i = 0; i < numberOfDays; i++) {
    const immutableStates = new Map(states);
    immutableStates.forEach((v, k, m) => {
      if (v === 0) return;
      if (k === 0) {
        states.set(8, states.get(8).valueOf() + v);
        states.set(6, states.get(6).valueOf() + v);
        states.set(0, Math.max(0, states.get(0).valueOf() - v));
        return;
      }
      states.set(k - 1, states.get(k - 1).valueOf() + v);
      states.set(k, Math.max(0, states.get(k).valueOf() - v));
    });
  }

  const result = Object.values(Object.fromEntries(states)).reduce((p, c) => p + c, 0);
  console.log('Fish States', result);
  return result;
};

export const adventDay6 = (fish: number[]): number => getSumOfFish(fish, 80);
export const adventDay6a = (fish: number[]): number => getSumOfFish(fish, 256);
