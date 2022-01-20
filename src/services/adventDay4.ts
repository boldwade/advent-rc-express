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
    const bingoLine = parseNumeric(row.split(' ').filter(x => x.length > 0));
    bingoCard.push(bingoLine);
  });
  bingoDay.cards.push([...bingoCard]);

  return bingoDay;
}

function isWinningLine(line: number[], calledNumbers: number[]) {
  const missingIndex = line.findIndex(value => !calledNumbers.includes(value));
  return line.length > 0 && missingIndex === -1;
}

function getWinningRows(rows: Array<number[]>, calledNumbers: number[]) {
  return rows.filter(row => isWinningLine(row, calledNumbers));
}

function transpose(a: {}[]) {
  try {
    return Object.keys(a[0])
      .map(c => a.map((r: { [x: string]: any; }) => r[c]));
  } catch (e) {
    console.log('transpose error', e);
  }
}

function getWinningColumns(rows: Array<number[]>, calledNumbers: number[]) {
  if (!rows.length) return;
  const columns = transpose(rows);
  return columns.filter(line => isWinningLine(line, calledNumbers));
}

export const adventDay4 = (input: BingoDay) => {
  // Get first winning board
  const calledNumbers: number[] = [];
  let winningRows: number[][] = [];
  let winningColumns: number[][] = [];
  let drawnNumbersIndex = -1;
  let winningCardIndex = -1;
  let lastDrawnNumber = -1;

  try {

    while (winningCardIndex === -1 && drawnNumbersIndex < input.drawnNumbers.length - 1) {
      drawnNumbersIndex++;
      lastDrawnNumber = input.drawnNumbers[drawnNumbersIndex];
      calledNumbers.push(lastDrawnNumber);

      let cardsIndex = -1;
      while (winningCardIndex === -1 && cardsIndex < input.cards.length - 1) {
        cardsIndex++;
        const card = input.cards[cardsIndex];
        winningRows = getWinningRows(card, calledNumbers);
        if (!winningRows?.length && card?.length) {
          winningColumns = getWinningColumns(card, calledNumbers);
        }

        if (winningRows.length || winningColumns.length) winningCardIndex = cardsIndex
      }
    };

  } catch (e) {
    console.log(e);
  }

  const winningCardNumbers: number[] = [].concat(...input.cards[winningCardIndex]);
  const unmarkedNumbers = winningCardNumbers.filter(x => calledNumbers.indexOf(x) === -1);
  const sumOfUnmarked = unmarkedNumbers.reduce((prev, curr) => prev + curr, 0);
  const result = sumOfUnmarked * lastDrawnNumber;
  console.log('result', result);
  return result;
};

export const adventDay4Part2 = (input: BingoDay) => {
  // Get last winning board
  return 1;
}