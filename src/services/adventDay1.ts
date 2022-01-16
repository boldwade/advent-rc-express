export const adventDay1 = (input: number[]) => {
  let result = 0;
  input.reduce((prev: number, curr: number) => {
    if (curr > prev) result++;
    return curr;
  });
  console.log('day one result', result);
  return result;
};

export const adventDay1Part2 = (input: number[]) => {
  let result = 0;

  const groups = new Map<number, number>();
  const numOfGroups = input.length - 2;
  for (let i = 0; i < numOfGroups - 1; i++) {
    groups.set(i, input[i] + input[i + 1] + input[i + 2]);
  }

  groups.forEach((value, key, map) => {
    if (key === 0) return;
    if (value > map.get(key - 1)) result++;
  });

  return result;
};
