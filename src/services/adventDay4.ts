/* eslint-disable prettier/prettier */
type card = number[][];

export interface BowlingDay4 {
  drawnNumbers: number[];
  cards: card[];
}

export const adventDay4Map = (input: string[]) =>
  input.map(x => {
    const m = x.split(' ');
    return { type: m[0] as movementType, spaces: Number.parseInt(m[1]) };
  });

export const adventDay4 = (input: movement[]) => {
  const card = { '1': false };
};

export const createNumbers = (minimum = 1, maximum = 90) =>
  // eslint-disable-next-line prettier/prettier
  Array
    .from({ length: maximum - minimum + 1 })
    // eslint-disable-next-line prettier/prettier
    .map((unused, index) => index + minimum);

export function createCard(currentCards, rows, columns, numbers = createNumbers()) {
  const currentCardLines = currentCards.reduce(
    (lines, card) => lines.concat(card), []
  );
  const card = [],
    generator = selectNumbers(numbers);
  while (card.length < rows) {
    const line = selectLine([
      // Both current cards & new card lines are included
      ...currentCardLines,
      ...card
    ], generator, columns);
    if (!line) {
      // We've finished all our numbers, we need to abort!
      return undefined;
    }
    card.push(line);
  }
  return card;
}

export function createCards(amount, rows, columns, numbers = createNumbers()) {
  const cards = [];
  while (cards.length < amount) {
    const card = createCard(cards, rows, columns, numbers);
    if (!card) {
      break;
    }
    cards.push(card);
  }
  return cards;
}

function isWinningLine(line, calledNumbers) {
  const missingIndex = line
    .findIndex(
      value => !calledNumbers.includes(value)
    );
  return line.length > 0 && missingIndex === -1;
}

function getWinningLines(lines, calledNumbers) {
  return lines.filter(line => isWinningLine(line, calledNumbers));
}
