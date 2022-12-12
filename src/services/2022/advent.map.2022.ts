import { Day1a, Day1b } from "@services/2022/day1";
import { parseNumeric } from "@utils/util";
import { Day2a, Day2b, Day2Map } from "@services/2022/day2";
import { Day3a, Day3b, Day3Map } from "@services/2022/day3";
import { Day4a, Day4b, Day4Map } from "@services/2022/day4";
import { Day5a, Day5b, Day5Map } from "@services/2022/day5";
import { Day6a, Day6b, Day6Map } from "@services/2022/day6";
import { Day7a, Day7b, Day7Map } from "@services/2022/day7";

export const inputDayMap2022 = {
  '1': parseNumeric,
  '2': Day2Map,
  '3': Day3Map,
  '4': Day4Map,
  '5': Day5Map,
  '6': Day6Map,
  '7': Day7Map,
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
  '6a': Day6a,
  '6b': Day6b,
  '7a': Day7a,
  '7b': Day7b,
};
