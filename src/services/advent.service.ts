import { HttpException } from '@exceptions/HttpException';
import axios, { AxiosRequestConfig } from 'axios';
import { adventDayThreePartTwo } from './adventDay3Part2';
import { adventDayOne, adventDayOneMap } from './adventDay1';
import { adventDayThree, adventDayThreeMap } from './adventDay3';
import { adventDayTwo, adventDayTwoMap } from './adventDay2';

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
    if (this.inputMap.has(day)) return this.resultByDayFactory[day](this.inputMap.get(day));

    const input = await this.getInputByDay(day);
    if (!input) throw new HttpException(400, 'An error occurred');
    const mappedInput = this.mapInputByDay[day](input);
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
    '1': adventDayOneMap,
    '2': adventDayTwoMap,
    '3': adventDayThreeMap,
    '3a': adventDayThreeMap,
  };

  private resultByDayFactory = {
    '1': adventDayOne,
    '2': adventDayTwo,
    '3': adventDayThree,
    '3a': adventDayThreePartTwo,
  };
}
