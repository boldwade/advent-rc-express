import { Day1a, Day1b } from "@services/2022/day1";
import { parseNumeric } from "@utils/util";
import { Day2a, Day2b, Day2Map } from "@services/2022/day2";

export const inputDayMap2022 = {
  '1': parseNumeric,
  '2': Day2Map,
};

export const resultByDayFactory2022 = {
  '1a': Day1a,
  '1b': Day1b,
  '2a': Day2a,
  '2b': Day2b,
};
