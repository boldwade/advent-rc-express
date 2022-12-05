const alphaPriority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export interface Rucksack {
  length: number;
  compartment1: string;
  compartment2: string;
}

export const Day3Map = (input: string[]): Rucksack[] => input.map(x => {
  const length = x.length / 2;
  return {
    compartment1: x.substring(0, length),
    compartment2: x.substring(length),
    length,
  };
});

export const Day3a = (input: Rucksack[]): number => {
  let result: number = 0;

  input.forEach(x => {
    const matchFound = [...x.compartment1].find(y => x.compartment2.indexOf(y) > -1);
    if (!matchFound) return;
    result += (alphaPriority.indexOf(matchFound) + 1);
  });

  return result;
};

export const Day3b = (input: Rucksack[]): number => {
  let result: number = 0;

  const rawInputs = input.map(x => (x.compartment1 + x.compartment2));
  const inputGroups: string[][] = [];
  for (let i = 0; i < rawInputs.length; i += 3) {
    const r = [rawInputs[i], rawInputs[i + 1], rawInputs[i + 2]];
    inputGroups.push(r);
  }

  inputGroups.forEach(x => {
    const matchFound = [...x[0]].find(y => x[1].indexOf(y) > -1 && x[2].indexOf(y) > -1);
    if (!matchFound) return;
    result += (alphaPriority.indexOf(matchFound) + 1);
  });

  return result;
};
