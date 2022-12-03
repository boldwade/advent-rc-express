import { HttpException } from '@exceptions/HttpException';
import axios, { AxiosRequestConfig } from 'axios';
import { parseNumeric } from '@/utils/util';

import { adventDay1, adventDay1Part2 } from './adventDay1';
import { adventDay3, adventDay3Map, adventDay3Part2 } from './adventDay3';
import { adventDay2, adventDay2Map, adventDay2Part2 } from './adventDay2';
import { adventDay4, adventDay4Map, adventDay4Part2 } from './adventDay4';
import { adventDay5, adventDay5Map, adventDay5Part2 } from './adventDay5';
import { adventDay6, adventDay6a, adventDay6Map } from './adventDay6';
import { adventDay7, adventDay7a, adventDay7Map } from '@services/adventDay7';
import { adventDay8, adventDay8a, adventDay8Map } from './adventDay8';

export default class AdventService {
  private inputMap: Map<string, string[]> = new Map();
  private baseUrl = 'https://adventofcode.com/2021/day/{day}/input';
  private config: AxiosRequestConfig = {
    method: 'get',
    headers: {
      Cookie: process.env.COOKIE,
      Host: 'adventofcode.com',
    },
  };

  private async fetchInputByDay(day: string): Promise<string[]> {
    const url = this.baseUrl.replace('{day}', day);

    try {
      const response = await axios.get<string>(url, this.config);
      console.log('fetchInputByDay:response.data', response.data);
      if (response.status === 200) {
        const input = response.data?.split('\n');
        console.log('fetchInputByDay:response item count: ', input?.length);
        return input;
      }
    } catch (error) {
      console.error('fetchInputByDay:ERROR', error.response.body);
    }

    throw new HttpException(400, 'Probably check your .env token');
  }

  public async getMappedInputByDay(day: string): Promise<string[]> {
    console.log('getting input for day', day);

    day = day.replace('a', '');
    if (this.inputMap.has(day)) return this.inputMap.get(day);

    const rawInput = await this.fetchInputByDay(day);
    const mappedInput = this.inputDayMap[day[0]](rawInput);
    this.inputMap.set(day, mappedInput);

    console.log('mappedInput', mappedInput);
    return mappedInput;
  }

  public async getResultByDay(day: string): Promise<string | number> {
    const mappedInput = await this.getMappedInputByDay(day);
    if (!mappedInput) throw new HttpException(400, 'An error occurred');

    return this.resultByDayFactory[day](mappedInput);
  }

  private inputDayMap = {
    '1': parseNumeric,
    '2': adventDay2Map,
    '3': adventDay3Map,
    '4': adventDay4Map,
    '5': adventDay5Map,
    '6': adventDay6Map,
    '7': adventDay7Map,
    '8': adventDay8Map,
  };

  private resultByDayFactory = {
    '1': adventDay1,
    '1a': adventDay1Part2,
    '2': adventDay2,
    '2a': adventDay2Part2,
    '3': adventDay3,
    '3a': adventDay3Part2,
    '4': adventDay4,
    '4a': adventDay4Part2,
    '5': adventDay5,
    '5a': adventDay5Part2,
    '6': adventDay6,
    '6a': adventDay6a,
    '7': adventDay7,
    '7a': adventDay7a,
    '8': adventDay8,
    '8a': adventDay8a,
  };
}
