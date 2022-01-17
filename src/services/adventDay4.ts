import { parseNumeric } from '@/utils/util';

/* eslint-disable prettier/prettier */
type BingoCard = Array<Array<number>>;

export interface BingoDay {
  drawnNumbers: number[];
  cards: BingoCard[];
}

export const adventDay4Map = (input: string[]): BingoDay => {
  const bingoDay: BingoDay = {
    drawnNumbers: parseNumeric(input[0].split(',')),
    cards: []
  };
  
  let bingoCard: BingoCard = [];
  input.forEach((row, index) => {
    if (index < 2) return;
    if (!row.length && bingoCard.length) {
      bingoDay.cards.push([...bingoCard]);
      bingoCard = [];
      return;
    }
    const bingoLine = parseNumeric(row.substring(1).split(' ').filter(x => x.length > 0));
    bingoCard.push(bingoLine);

    console.log('bingo', bingoLine, bingoCard);
  });
  bingoDay.cards.push([...bingoCard]);

  return bingoDay;
}

function isWinningLine(line: number[], calledNumbers: number[]) {
  const missingIndex = line.findIndex(value => !calledNumbers.includes(value));
  return line.length > 0 && missingIndex === -1;
} 

function getWinningLines(lines: Array<number[]>, calledNumbers: number[]) {
  return lines.filter(line => isWinningLine(line, calledNumbers));
}
export const adventDay4 = (input: BingoDay) => {
  const calledNumbers = [];
  const result = input.drawnNumbers.reduce((prev, curr, i) => {
    calledNumbers.push(curr);
    // TODO: change reduce to map
    // TODO: getWinningLines needs to foreach on input.cards
    const hasWinningLine = getWinningLines(input.cards[0], calledNumbers);
    return curr;
  });
};
