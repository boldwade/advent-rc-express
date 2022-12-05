export const DayXMap = (input: string[]): number[] => input[0].split(',').map(x => parseInt(x));

export const DayXa = (input: number[]): number => {
  const startTime = Date.now();

  const result = -1;

  const stopTime = Date.now();
  console.log('Day x answer:', result, (stopTime - startTime) / 1000);
  return result;
};

export const DayXb = (input: number[]): number => DayXa(input);
