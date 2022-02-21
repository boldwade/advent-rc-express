interface lineSegment {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export const adventDay5Map = (input: string[]): lineSegment[] =>
  input
    .map(line => {
      if (line?.length === 0) return undefined;

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
    })
    .filter(x => x);

export const adventDay5 = (input: lineSegment[]) => {
  // Hydrothermal Venture
  return adventDay5Part2(input.filter(x => x.startX === x.endX || x.startY === x.endY));
};

export const adventDay5Part2 = (input: lineSegment[]) => {
  // Hydrothermal Venture including diagnol
  const tallies = new Map<string, number>();

  input.forEach(l => {
    const xStart = l.startX * (l.startX < l.endX ? 1 : -1);
    const xLength = Math.abs(l.startX - l.endX) + 1;
    const xTravel = Array.from({ length: xLength }, (v, i) => Math.abs(i + xStart));

    const yStart = l.startY * (l.startY < l.endY ? 1 : -1);
    const yLength = Math.abs(l.startY - l.endY) + 1;
    const yTravel = Array.from({ length: yLength }, (v, i) => Math.abs(i + yStart));

    const isStraight = l.startX === l.endX || l.startY === l.endY;

    if (isStraight) {
      xTravel.forEach(x => {
        yTravel.forEach(y => {
          const key = `x${x}y${y}`;
          const value = 1 + (tallies.has(key) ? tallies.get(key) : 0);
          tallies.set(key, value);
        });
      });
    } else {
      // Diagnol line
      for (let index = 0; index < xLength; index++) {
        const key = `x${xTravel[index]}y${yTravel[index]}`;
        const value = 1 + (tallies.has(key) ? tallies.get(key) : 0);
        tallies.set(key, value);
      }
    }
  });

  let countOfValuesOverOne = 0;
  tallies.forEach(v => {
    if (v > 1) countOfValuesOverOne++;
  });

  console.log('countOfValuesOverOne', countOfValuesOverOne);
  return countOfValuesOverOne;
};
