export const adventDayOneMap = (input: string[]) => input.map(Number.parseInt);

export const adventDayOne = (input: number[]) => {
  let result = 0;
  input.reduce((prev: number, curr: number) => {
    if (curr > prev) result++;
    return curr;
  });
  console.log('day one result', result);
  return result;
};
