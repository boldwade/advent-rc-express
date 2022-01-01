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
  console.log('binaryTally', binaryTally, binaryLength, totalBinaries, gammaBits, epsilonBits);

  const gammaDecBits = gammaBits.reduce((acc, c, index) => {
    console.log('acc', acc, c, index);
    return acc + (index === 0 || c === 0 ? c : Math.pow(2, index));
  }, 0);
  console.log('gammaDecBits', gammaDecBits);

  const epsilonDecBits = epsilonBits.reduce((acc, c, index) => {
    console.log('acc', acc, c, index);
    return acc + (index === 0 || c === 0 ? c : Math.pow(2, index));
  }, 0);
  console.log('bits', gammaDecBits, epsilonDecBits, gammaDecBits * epsilonDecBits);
  return gammaDecBits * epsilonDecBits;
};
