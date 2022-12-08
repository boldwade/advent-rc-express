export interface ElfAssignment {
  firstElf: number[];
  secondElf: number[];
}

export const Day4Map = (input: string[]): ElfAssignment[] => {
  const sections = input.filter(x => !!x)
    .map(x => x.split(','))
    .map(x => x.map(y => y.split('-')))
    .map(x => x.map(y => y.map(z => Number.parseInt(z))));

  const result: ElfAssignment[] = sections.map(x => ({
    firstElf: x[0],
    secondElf: x[1],
  }))

  return result;
};

export const Day4a = (input: ElfAssignment[]): number => {
  let result = 0;

  const isContained = (x: number[], y: number[]) => x[0] <= y[0] && x[1] >= y[1];

  input.forEach(x => {
    if (isContained(x.firstElf, x.secondElf) || isContained(x.secondElf, x.firstElf)) result++;
  });

  return result;
};

export const Day4b = (input: ElfAssignment[]): number => {
  let result = 0;

  const anyOverlap = (x: number[], y: number[]) => x[0] <= y[0] && x[1] >= y[0]

  input.forEach(x => {
    if (anyOverlap(x.firstElf, x.secondElf) || anyOverlap(x.secondElf, x.firstElf)) result++;
  });

  return result;
};
