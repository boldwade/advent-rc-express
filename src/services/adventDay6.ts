export const adventDay6Map = (input: string[]): number[] => input[0].split(',').map(x => parseInt(x));

const getNewFishPopulation = fish => {
  let newFishCount = 0;
  const newFishPopulation = fish.map(f => {
    if (f === 0) {
      newFishCount++;
      return 6;
    }
    return f - 1;
  });
  // newFishPopulation.push(...Array(newFishCount).fill(8));
  newFishPopulation.push(...Array.from({ length: newFishCount }, _ => 8));
  return newFishPopulation;
};

export const adventDay6 = (fish: Number[], numberOfDays = 80): number => {
  for (let day = 1; day <= 80; day++) {
    fish = getNewFishPopulation(fish);
  }
  return fish.length;
};

// export const adventDay6 = (input: number[], numberOfDays = 80): number => {
//   try {
//     for (let i = 0; i < numberOfDays; i++) {
//       input = input.map(x => x - 1);
//       const countOfNewLanternFish = input.filter(x => x === -1)?.length ?? 0;
//       const newLanternFish = Array.from({ length: countOfNewLanternFish }, _ => 8);
//       input = input.map(x => (x === -1 ? 6 : x));
//       input.push(...newLanternFish);
//     }
//
//     console.log('Day 6 result', input.length);
//     return input.length;
//   } catch (e) {
//     console.log('ERROR', e);
//   }
//   return -1;
// };

// export const adventDay6a = (input: number[]) => adventDay6(input, 256);

export const adventDay6a = (input: number[]) => {
  const numberOfDays = 200;
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
    console.log('Day', i, Object.fromEntries(states));
    immutableStates.forEach((v, k, m) => {
      if (v === 0) return;
      for (let j = 0; j < v; j++) {
        if (k === 0) {
          states.set(8, states.get(8).valueOf() + 1);
          states.set(6, states.get(6).valueOf() + 1);
          states.set(0, Math.max(0, states.get(0).valueOf() - 1));
        } else {
          states.set(k - 1, states.get(k - 1).valueOf() + 1);
          states.set(k, Math.max(0, states.get(k).valueOf() - 1));
        }
      }
    });
  }

  const result = Object.values(Object.fromEntries(states)).reduce((p, c) => p + c, 0);
  console.log('Fish States1', result);
  return result;
};
