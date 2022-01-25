interface lineSegment {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export const adventDay5Map = (input: string[]): lineSegment[] =>
  input.map(line => {
    const [start, end] = line
      .split(' -> ')
      .map(v => v.split(','))
      .map(x => x.map(y => Number.parseInt(y)));

    return {
      startX: start[0],
      startY: start[1],
      endX: end[0],
      endY: end[1],
    };
  });

export const adventDay5 = (input: lineSegment[]) => {
  // Get first winning board
  input = input.filter(x => x.startX === x.endX || x.startY === x.endY);
};

export const adventDay5Part2 = (input: lineSegment[]) => {
  return 1;
};
