class Elf {
  get totalCalories() {
    return this.calories.reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  constructor(public key: number, public calories: number[] = []) {}
}

function getElvinCaloriesMap(input: number[]) {
  const elfMap = new Map<number, Elf>();

  let key = 0;
  input.forEach(x => {
    if (isNaN(x)) {
      key++;
      return;
    }
    const caloriesByElf = elfMap.get(key) ?? new Elf(key);
    caloriesByElf.calories.push(x);

    elfMap.set(key, caloriesByElf);
  });

  return elfMap;
}

/**
 * Find elf carrying most calories
 * @param input
 */
export const Day1a = (input: number[]) => {
  const elfMap = getElvinCaloriesMap(input);

  let highestCaloriesElf: Elf;
  for (let elf of elfMap.values()) {
    if (elf.totalCalories > (highestCaloriesElf?.totalCalories ?? 0)) highestCaloriesElf = elf;
  }

  return highestCaloriesElf.totalCalories;
};

/**
 * Find top 3 elves carrying most calories, return total
 * @param input
 */
export const Day1b = (input: number[]) => {
  const elfMap = getElvinCaloriesMap(input);

  const allValues: number[] = [];
  for (let elf of elfMap.values()) {
    allValues.push(elf.totalCalories);
  }

  return allValues
    .sort((x, y) => y - x)
    .slice(0, 3)
    .reduce((prev, curr) => prev + curr);
};
