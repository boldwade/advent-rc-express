export const adventDay2Map = (input: string[]) =>
  input.map(x => {
    const m = x.split(' ');
    return { type: m[0] as movementType, spaces: Number.parseInt(m[1]) };
  });

export const adventDay2a = (input: movement[]) => {
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

export const adventDay2b = (input: movement[]) => {
  let height = 0;
  let distance = 0;
  let aim = 0;

  input.forEach(x => {
    switch (x.type) {
      case 'forward':
        distance += x.spaces;
        height += aim * x.spaces;
        break;
      case 'down':
        aim += x.spaces;
        break;
      case 'up':
        aim -= x.spaces;
        break;
    }
  });

  console.log('result', distance, height, aim, height * distance);
  return height * distance;
};
