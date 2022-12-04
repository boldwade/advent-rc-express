export const adventDay3Map = (input: string[]) => input;

export const adventDay3a = (input: string[]) => {
  const totalBinaries = input.length;
  const binaryLength = input[0].length;
  const binaryTally: number[] = [];

  input.forEach(x => {
    x.split('').forEach((value, index) => {
      const num = Number.parseInt(value);
      if (binaryTally.length < index + 1) binaryTally.push(0);
      binaryTally[index] += num;
    });
  });

  const gammaBits: number[] = [];
  const epsilonBits: number[] = [];
  binaryTally.forEach(value => {
    const isValueLargerThanHalf = value > totalBinaries / 2;
    gammaBits.push(isValueLargerThanHalf ? 1 : 0);
    epsilonBits.push(isValueLargerThanHalf ? 0 : 1);
  });
  console.log('binaryTally', binaryTally, binaryLength, totalBinaries);

  const gammaNumber = parseInt(gammaBits.join(''), 2);
  console.log('gammaDecBits', gammaBits, gammaBits.join(''), gammaNumber);

  const epsilonNumber = parseInt(epsilonBits.join(''), 2);
  console.log(
    'epsilonDecBits',
    epsilonBits,
    epsilonBits.join(''),
    epsilonNumber,
  );

  return gammaNumber * epsilonNumber;
};

export const adventDay3b = (input: string[]) => {
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
