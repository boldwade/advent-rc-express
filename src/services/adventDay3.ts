export const adventDay3Map = (input: string[]) => input;

export const adventDay3 = (input: string[]) => {
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
