export const adventDayThreeMap = (input: string[]) => input;

export const adventDayThree = (input: string[]) => {
  const totalBinaries = input.length;
  const binaryLength = input[0].length;
  const binaryTally: number[] = [];

  input.forEach(x => {
    x.split('')
      .reverse()
      .forEach((value, index) => {
        const num = Number.parseInt(value);
        if (binaryTally.length < index + 1) binaryTally.push(0);
        binaryTally[index] += num;
      });
  });

  const gammaBits: number[] = [];
  const epsilonBits: number[] = [];
  binaryTally.forEach(value => {
    gammaBits.push(value > totalBinaries / 2 ? 1 : 0);
    epsilonBits.push(value > totalBinaries / 2 ? 0 : 1);
  });
  console.log('binaryTally', binaryTally, binaryLength, totalBinaries);

  // const gammaNumber = gammaBits.reduce(convertToDecimal, 0);
  const gammaNumber = parseInt(gammaBits.join(''), 2);
  console.log('gammaDecBits', gammaBits, gammaNumber);

  // const epsilonNumber = epsilonBits.reduce(convertToDecimal, 0);
  const epsilonNumber = parseInt(epsilonBits.join(''), 2);
  console.log('epsilonDecBits', epsilonBits, epsilonNumber);

  console.log('gammaDecBits * epsilonDecBits ', gammaNumber * epsilonNumber);

  return gammaNumber * epsilonNumber;
};
