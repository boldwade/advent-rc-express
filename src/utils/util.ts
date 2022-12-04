/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
    // eslint-disable-next-line prettier/prettier
  }
  return value !== null && typeof value === 'object' && !Object.keys(value).length;
};

// use adventDay3Part2
// export const convertToDecimal = (a: number, c: number, i: number) => a + (i === 0 || c === 0 ? c : Math.pow(2, i));

export const parseNumeric = (input: string[]) => input.map(x => Number.parseInt(x));

export function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
