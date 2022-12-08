export interface Stack {
  position: number;
  stack: string[];
}

export interface Instruction {
  amountToMove: number;
  moveFromPosition: number;
  moveToPosition: number;
}

export interface SupplyStacks {
  instructions: Instruction[];
  stacks: Stack[];
}

export const Day5Map = (input: string[]): SupplyStacks => {
  const supplyStacks: SupplyStacks = {
    instructions: [],
    stacks: [],
  };
  const inputSplitIndex = input.findIndex(x => x === '');
  const numberOfStacks = Math.round((input[inputSplitIndex - 2].length - 1) / 3);

  for (let y = 0; y < inputSplitIndex - 1; y++) {
    const row = input[y];
    for (let x = 0; x < numberOfStacks; x++) {
      if (!supplyStacks.stacks[x]) supplyStacks.stacks.push({ stack: [], position: x + 1 });
      const start = (4 * x) + 1;
      if (start > row.length) continue;
      const stackName = row.substring(start, start + 1);
      if (!stackName || stackName.length === 0 || stackName === ' ') continue;
      supplyStacks.stacks[x].stack.push(stackName);
    }
  }

  for (let y = inputSplitIndex + 1; y < input.length; y++) {
    const rawRow = input[y]
      .replace('move ', '')
      .replace(' from ', '|')
      .replace(' to ', '|')
      .split('|');
    supplyStacks.instructions.push({
      amountToMove: Number.parseInt(rawRow[0]),
      moveFromPosition: Number.parseInt(rawRow[1]),
      moveToPosition: Number.parseInt(rawRow[2])
    });
  }

  return supplyStacks;
};

export const Day5a = (input: SupplyStacks): string => {
  input.instructions.forEach(x => {
    for (let i = 1; i <= x.amountToMove; i++) {
      const crateToMove = input.stacks.find(y => y.position === x.moveFromPosition).stack.splice(0, 1)[0];
      input.stacks.find(y => y.position === x.moveToPosition).stack.unshift(crateToMove);
    }
  });

  return input.stacks.flatMap(x => x.stack[0]).join('');
};

export const Day5b = (input: SupplyStacks): string => Day5a(input);
