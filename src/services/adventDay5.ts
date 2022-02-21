interface lineSegment {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

type direction = 'x' | 'y';
interface tally {
  constDirection: direction;
  constValue: number;
  travelDirection: direction;
  travelValues: number[];
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
  const tallies: tally[] = [];
  const lines = input.filter(x => x.startX === x.endX || x.startY === x.endY);
  lines.forEach(l => {
    const constDirection = l.startX === l.endX ? 'x' : 'y';
    const constValue = l.startX === l.endX ? l.startX : l.startY;
    const travelDirection = constDirection === 'x' ? 'y' : 'x';
    const lineLength = Math.abs(l['start' + travelDirection.toUpperCase()] - l['end' + travelDirection.toUpperCase()]) + 1;
    const start = Math.min(l['start' + travelDirection.toUpperCase()], l['end' + travelDirection.toUpperCase()]);
    const travelValues = Array.from({ length: lineLength }, (v, i) => i + start);
    tallies.push({ constDirection, constValue, travelDirection, travelValues });
  });

  const accumulators = new Map<string, number>();
  tallies.forEach(t => {
    t.travelValues.forEach(v => {
      const key = 'x' + (t.constDirection === 'y' ? v : t.constValue) + 'y' + (t.constDirection === 'y' ? t.constValue : v);
      let value = 1;
      if (accumulators.has(key)) value += accumulators.get(key);
      accumulators.set(key, value);
    });
  });

  let countOfValuesOverOne = 0;
  accumulators.forEach(v => {
    if (v > 1) countOfValuesOverOne++;
  });
  console.log('countOfValuesOverOne', countOfValuesOverOne);
  return countOfValuesOverOne;
};

export const adventDay5Part2 = (input: lineSegment[]) => {
  return 1;
};
