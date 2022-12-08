export const Day6Map = (input: string[]): string[] => input;

export const Day6a = (input: string[]): string => {
  input = input.filter(x => !!x);
  let result = '';

  for (const stream of input) {
    let startOfMarkerIndex = 0;
    let comparisonIndex = 3;
    do {
      const currentChar = stream[startOfMarkerIndex];
      const start = startOfMarkerIndex + 1;
      if (stream.substring(start, start + comparisonIndex).includes(currentChar)) comparisonIndex = 3;
      else comparisonIndex--;
      startOfMarkerIndex++;
    } while (comparisonIndex > 0)

    result += (startOfMarkerIndex + 1);
  }

  return result;
};

export const Day6b = (input: string[]): string => Day6a(input);
