export const adventDay6Map = (input: string[]): number[] => input[0].split(',').map(x => parseInt(x));

export const adventDay6 = (input: number[], numberOfDays = 80): number => {
  try {
    for (let i = 0; i < numberOfDays; i++) {
      input = input.map(x => x - 1);
      const countOfNewLanternFish = input.filter(x => x === -1)?.length ?? 0;
      const newLanternFish = Array.from({ length: countOfNewLanternFish }, _ => 8);
      input = input.map(x => (x === -1 ? 6 : x));
      input.push(...newLanternFish);
    }

    console.log('Day 6 result', input.length);
    return input.length;
  } catch (e) {
    console.log('ERROR', e);
  }
  return -1;
};

export const adventDay6a = (input: number[]) => adventDay6(input, 128);
