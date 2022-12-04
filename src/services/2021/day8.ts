export const adventDay8Map = (input: string[]): number[] => input[0].split(',').map(x => parseInt(x));

export const adventDay8a = (input: number[]): number => {
  const startTime = Date.now();

  const result = -1;

  const stopTime = Date.now();
  console.log('Day 8 answer:', result, (startTime - stopTime) / 1000);
  return result;
};

export const adventDay8b = (input: number[]): number => adventDay8a(input);
