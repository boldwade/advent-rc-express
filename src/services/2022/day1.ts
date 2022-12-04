class Elf {
  calories: number[] = [];
  get totalCalories() {
    return this.calories.reduce((previousValue, currentValue) => previousValue + currentValue);
  }
  constructor(public key: number) {}
}

/**
 * Find elf carrying most calories
 * @param input
 */
export const Day1a = (input: number[]) => {
  const elfMap = new Map<number, Elf>();

  let key = 0;
  input.forEach(x => {
    if (isNaN(x)) {
      key++;
      return;
    }
    const caloriesByElf = elfMap.get(key) ?? new Elf(key);
    caloriesByElf.calories.push(x);

    elfMap.set(key, caloriesByElf)
  });

  let highestCaloriesElf: Elf;
  for (let elf of elfMap.values()){
    if (elf.totalCalories > (highestCaloriesElf?.totalCalories ?? 0)) highestCaloriesElf = elf;
  }

  return highestCaloriesElf.totalCalories;
};

export const Day1b = (input: number[]) => {
  return false;
};
