export const adventDayTwoMap = (input: string[]) => {
  const advent2Input: movement[] = input.map(x => {
    const m = x.split(' ');
    return { type: m[0] as movementType, spaces: Number.parseInt(m[1]) };
  });
  return advent2Input;
};

export const adventDayTwo = (input: movement[]) => {
  console.log('Advent2', input);
  let height = 0;
  let distance = 0;
  input.forEach(x => {
    switch (x.type) {
      case 'forward':
        distance += x.spaces;
        break;
      case 'down':
        height += x.spaces;
        break;
      case 'up':
        height -= x.spaces;
        break;
    }
  });
  console.log('result', distance, height, height * distance);
  return height * distance;
};
