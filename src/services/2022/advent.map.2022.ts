import { Day1a, Day1b } from "@services/2022/day1";
import { parseNumeric } from "@utils/util";
import { Day2a, Day2b, Day2Map } from "@services/2022/day2";
import { Day3a, Day3b, Day3Map } from "@services/2022/day3";
import { Day4a, Day4b, Day4Map } from "@services/2022/day4";
import { Day5a, Day5b, Day5Map } from "@services/2022/day5";

export const inputDayMap2022 = {
  '1': parseNumeric,
  '2': Day2Map,
  '3': Day3Map,
  '4': Day4Map,
  '5': Day5Map,
};

export const resultByDayFactory2022 = {
  '1a': Day1a,
  '1b': Day1b,
  '2a': Day2a,
  '2b': Day2b,
  '3a': Day3a,
  '3b': Day3b,
  '4a': Day4a,
  '4b': Day4b,
  '5a': Day5a,
  '5b': Day5b,
};
