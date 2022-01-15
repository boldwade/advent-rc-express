export const adventDay3Part2 = (input: string[]) => {
  console.log('adventDayThreePartTwo', input);

  const getCommonBit = (position: number, inputArray: string[]): 0 | 1 => {
    const oneCount = inputArray.filter(x => x[position] === '1')?.length ?? 0;
    const numberOfOnes = inputArray.length / 2;
    if (oneCount === numberOfOnes) return 1;
    return oneCount > numberOfOnes ? 1 : 0;
  };

  const getCommonNumber = (flipBits: boolean) => {
    let o2Result: string[] = input;
    let position = 0;
    do {
      let mcBit = getCommonBit(position, o2Result);
      mcBit = flipBits ? (mcBit === 1 ? 0 : 1) : mcBit;
      o2Result = o2Result.filter(x => x[position] === mcBit + '');
      position++;
    } while (o2Result.length > 1 && position < input[0].length);
    return o2Result;
  };

  const mc = getCommonNumber(false);
  const mcNumber = parseInt(mc[0], 2);
  console.log('mc', mc, mcNumber); // Convert binary to decimal

  const lc = getCommonNumber(true);
  const lcNumber = parseInt(lc[0], 2);
  console.log('lc1', lc, lcNumber);
  return mcNumber * lcNumber;
};
