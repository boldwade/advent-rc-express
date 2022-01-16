import { HttpException } from '@exceptions/HttpException';
import axios, { AxiosRequestConfig } from 'axios';
import { adventDay1, adventDay1Part2 } from './adventDay1';
import { adventDay3, adventDay3Map, adventDay3Part2 } from './adventDay3';
import { adventDay2, adventDay2Map, adventDay2Part2 } from './adventDay2';
import { parseNumeric } from '@/utils/util';
// import { adventDay4, adventDay4Map } from './adventDay4';

export default class AdventService {
  private inputMap: Map<string, string[]> = new Map();
  private baseUrl = 'https://adventofcode.com/2021/day/{day}/input';
  private config: AxiosRequestConfig<any> = {
    method: 'get',
    headers: {
      Cookie: process.env.COOKIE,
      Host: 'adventofcode.com',
    },
  };

  public async getResultByDay(day: string): Promise<string | number> {
    if (this.inputMap.has(day))
      return this.resultByDayFactory[day](this.inputMap.get(day));

    const input = await this.getInputByDay(day);
    if (!input) throw new HttpException(400, 'An error occurred');
    const mappedInput = this.mapInputByDay[day[0]](input);
    this.inputMap.set(day, mappedInput);
    return this.resultByDayFactory[day](mappedInput);
  }

  public async getInputByDay(day: string): Promise<string[]> {
    console.log('getInputByDay', day);

    if (day === '3a') day = '3';
    if (this.inputMap.has(day)) return this.inputMap.get(day);

    const url = this.baseUrl.replace('{day}', day);

    try {
      const response = await axios.get<string>(url, this.config);
      console.log('response.data', response.data);
      if (response.status === 200) {
        const input = response.data?.split('\n');
        console.log('response item count: ', input?.length);
        return input;
      }
    } catch (error) {
      console.error('ERROR', error.response.body);
    }
    throw new HttpException(400, "You're not userData");
  }

  private mapInputByDay = {
    '1': parseNumeric,
    '2': adventDay2Map,
    '3': adventDay3Map,
    // '4': adventDay4Map,
  };

  private resultByDayFactory = {
    '1': adventDay1,
    '1a': adventDay1Part2,
    '2': adventDay2,
    '2a': adventDay2Part2,
    '3': adventDay3,
    '3a': adventDay3Part2,
    // '4': adventDay4,
  };
}
