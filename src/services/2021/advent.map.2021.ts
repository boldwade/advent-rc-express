import { adventDay1a, adventDay1b } from "@services/2021/day1";
import { adventDay2a, adventDay2b, adventDay2Map } from "@services/2021/day2";
import { adventDay3a, adventDay3b, adventDay3Map } from "@services/2021/day3";
import { adventDay4a, adventDay4b, adventDay4Map } from "@services/2021/day4";
import { adventDay5a, adventDay5b, adventDay5Map } from "@services/2021/day5";
import { adventDay6a, adventDay6b, adventDay6Map } from "@services/2021/day6";
import { adventDay7a, adventDay7b, adventDay7Map } from "@services/2021/day7";
import { adventDay8a, adventDay8b, adventDay8Map } from "@services/2021/day8";
import { parseNumeric } from "@utils/util";

export const inputDayMap2021 = {
  '1': parseNumeric,
  '2': adventDay2Map,
  '3': adventDay3Map,
  '4': adventDay4Map,
  '5': adventDay5Map,
  '6': adventDay6Map,
  '7': adventDay7Map,
  '8': adventDay8Map,
};

export const resultByDayFactory2021 = {
  '1a': adventDay1a,
  '1b': adventDay1b,
  '2a': adventDay2a,
  '2b': adventDay2b,
  '3a': adventDay3a,
  '3b': adventDay3b,
  '4a': adventDay4a,
  '4b': adventDay4b,
  '5a': adventDay5a,
  '5b': adventDay5b,
  '6a': adventDay6a,
  '6b': adventDay6b,
  '7a': adventDay7a,
  '7b': adventDay7b,
  '8a': adventDay8a,
  '8b': adventDay8b,
};
