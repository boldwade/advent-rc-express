export const Day6Map = (input: string[]): string[] => input.filter(x => !!x);

const getFindUniqueMarker = (input: string[], markerLength: number) => {
  let result = '';
  for (const stream of input) {
    let startOfMarkerIndex = 0;
    let comparisonIndex = markerLength;
    do {
      const currentChar = stream[startOfMarkerIndex];
      const start = startOfMarkerIndex + 1;
      if (stream.substring(start, start + comparisonIndex).includes(currentChar)) comparisonIndex = markerLength;
      else comparisonIndex--;
      startOfMarkerIndex++;
    } while (comparisonIndex > 0);

    result += startOfMarkerIndex + 1;
  }

  return result;
};

export const Day6a = (input: string[]): string => getFindUniqueMarker(input, 3);

export const Day6b = (input: string[]): string => getFindUniqueMarker(input, 13);
