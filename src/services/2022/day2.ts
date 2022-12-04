type MyPossibleKeyType = 'X' | 'Y' | 'Z';
type OpponentsPossibleKeyType = 'A' | 'B' | 'C';
type RPSValue = 1 | 2 | 3;
type RPSTypes = 'Rock' | 'Paper' | 'Scissors';

interface RPSItem {
  defeats: RPSValue;
  defeatedBy: RPSValue;
  myKey: MyPossibleKeyType,
  name: RPSTypes;
  oppKey: OpponentsPossibleKeyType,
  value: RPSValue,
}

const RPSMap: RPSItem[] = [
  { myKey: 'X', oppKey: 'A', name: 'Rock', value: 1, defeats: 3, defeatedBy: 2 },
  { myKey: 'Y', oppKey: 'B', name: 'Paper', value: 2, defeats: 1, defeatedBy: 3 },
  { myKey: 'Z', oppKey: 'C', name: 'Scissors', value: 3, defeats: 2, defeatedBy: 1 }
];

export interface decipher {
  opponent: RPSItem;
  mine: RPSItem;
}

export const Day2Map = (input: string[]): decipher[] =>
  input
    .filter(x => !!x)
    .map(x => {
      const i = x.split(' ');
      return {
        opponent: RPSMap.find(x => x.oppKey === i[0] as OpponentsPossibleKeyType),
        mine: RPSMap.find(x => x.myKey === i[1] as MyPossibleKeyType),
      };
    })
    .filter(x => !!x);

const calculateWinLossRound = (x: decipher) => {
  if (!(x?.mine?.value || x?.opponent?.value)) return;
  let result = x.mine.value;

  if (x.mine.value === x.opponent.value) result += 3; // draw
  else if (x.mine.defeats === x.opponent.value) result += 6; // win

  return result;
}

/**
 * Strategy guide total score with how the round might end
 * @param input
 */
export const Day2a = (input: decipher[]) => {
  const rounds: number[] = [];

  input.forEach(x => {
    rounds.push(calculateWinLossRound(x));
  });

  return rounds.reduce((x, y) => x + y);
};

/**
 * Strategy guide total scores with how the round needs to end
 * @param input
 */
export const Day2b = (input: decipher[]) => {
  const rounds: number[] = [];

  input.forEach(x => {
    if (!(x?.mine?.value || x?.opponent?.value)) return;

    switch (x.mine.myKey) {
      case 'X': // loss - paper (B) defeats rock
        x.mine = RPSMap.find(y => y.defeatedBy === x.opponent.value);
        break;
      case 'Y': // draw
        x.mine = x.opponent;
        break;
      case 'Z': // win
        x.mine = RPSMap.find(y => y.defeats === x.opponent.value);
        break;
    }

    rounds.push(calculateWinLossRound(x));
  });

  // console.log('rounds', JSON.stringify(rounds));
  return rounds.reduce((x, y) => x + y);
};
