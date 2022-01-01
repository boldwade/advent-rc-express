export const adventDayThreePartTwo = (input: string[]) => {
  console.log('adventDayThreePartTwo', input);

  const getCommonBit = (position: number, inputArray: string[], defaultBit: 0 | 1): 0 | 1 => {
    const oneCount = inputArray.filter(x => x[position] === '1')?.length ?? 0;
    if (oneCount === inputArray.length / 2) return defaultBit;
    return oneCount > inputArray.length / 2 ? 1 : 0;
  };

  let o2Result: string[] = input;
  let position = 0;
  do {
    const commonBit = getCommonBit(position, o2Result, 1);
    o2Result = o2Result.filter(x => x[position] === commonBit + '');
    position++;
  } while (o2Result.length > 1 || position < input[0].length);

  return o2Result[0];
};
