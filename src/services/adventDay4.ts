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
  let winningLines: number[][] = [];
  let drawnNumbersIndex = 0;

  try {
    do {
      const drawnNumber = input.drawnNumbers[drawnNumbersIndex];
      calledNumbers.push(drawnNumber);
      console.log('calledNumbers', calledNumbers);

      let cardsIndex = 0;
      do {
        const card = input.cards[cardsIndex];
        winningLines = getWinningLines(card, calledNumbers);

        cardsIndex++;
      } while (winningLines.length === 0 && cardsIndex < input.cards.length);

      drawnNumbersIndex++;
    } while (winningLines.length === 0 && drawnNumbersIndex < input.drawnNumbers.length);

  } catch (e) {
    console.log(e);
  }

  return winningLines;
};
