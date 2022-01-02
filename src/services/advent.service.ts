import { HttpException } from '@exceptions/HttpException';
import axios, { AxiosRequestConfig } from 'axios';
import { adventDayThreePartTwo } from './adventDay3Part2';
import { adventDayOne, adventDayOneMap } from './adventDayOne';
import { adventDayThree, adventDayThreeMap } from './adventDayThree';
import { adventDayTwo, adventDayTwoMap } from './adventDayTwo';

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

  public async getResultByDay(day: string, isTest?: boolean): Promise<string | number> {
    if (this.inputMap.has(day)) return this.resultByDayFactory[day](this.inputMap.get(day));

    const input = isTest ? this.testInputDataByDay[day] : await this.getInputByDay(day);
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

  private testInputDataByDay = {
    '1': [],
    '2': [],
    '3': ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'],
    '3a': ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'],
  };
}
