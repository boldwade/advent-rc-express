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
  const calledNumbers: number[] = [];
  let winningLines: number[][] = [];
  let drawnNumbersIndex = -1;
  let winningCardIndex = -1;
  let lastDrawnNumber = -1;

  try {

    while (!winningLines.length && drawnNumbersIndex < input.drawnNumbers.length - 1) {
      drawnNumbersIndex++;
      lastDrawnNumber = input.drawnNumbers[drawnNumbersIndex];
      calledNumbers.push(lastDrawnNumber);
      console.log('calledNumbers', calledNumbers);

      let cardsIndex = -1;
      while (!winningLines.length && cardsIndex < input.cards.length - 1) {
        cardsIndex++;
        const card = input.cards[cardsIndex];
        winningLines = getWinningLines(card, calledNumbers);
        if (winningLines.length) winningCardIndex = cardsIndex;
      }
    };

  } catch (e) {
    console.log(e);
  }

  const winningCardNumbers: number[] = [].concat(...input.cards[winningCardIndex]);
  const unmarkedNumbers = winningCardNumbers.filter(x => calledNumbers.indexOf(x) === -1);
  const sumOfUnmarked = unmarkedNumbers.reduce((prev, curr) => prev + curr, 0);
  return sumOfUnmarked * lastDrawnNumber;
};
