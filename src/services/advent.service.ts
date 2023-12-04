import { HttpException } from '@exceptions/HttpException';
import axios, { AxiosRequestConfig } from 'axios';
import { inputDayMap2021, resultByDayFactory2021 } from "@services/2021/advent.map.2021";
import { inputDayMap2022, resultByDayFactory2022 } from "@services/2022/advent.map.2022";

export default class AdventService {
  constructor(private readonly year: '2021' | '2022' | '2023') {
    this.year = year;
  }

  private inputMap: Map<string, string[]> = new Map();
  // @ts-ignore
  private baseUrl = `https://adventofcode.com/${this.year}/day/{day}/input`;
  private config: AxiosRequestConfig = {
    method: 'get',
    headers: {
      Cookie: process.env.COOKIE,
      Host: 'adventofcode.com',
    },
  };

  public async fetchInputByDay(day: string): Promise<string[]> {
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
    console.info('Getting input for day:', this.year, day);

    day = day.replace('a', '').replace('b', '');
    if (this.inputMap.has(day)) return this.inputMap.get(day);

    const rawInput = await this.fetchInputByDay(day);
    const mappedInput = this.inputMapByYearDay[this.year][day[0]](rawInput);
    this.inputMap.set(day, mappedInput);

    return mappedInput;
  }

  public async getResultByDay(day: string): Promise<string | number> {
    const mappedInput = await this.getMappedInputByDay(day);
    if (!mappedInput) throw new HttpException(400, 'An error occurred');

    const startTime = Date.now();
    const result = this.resultByYearDayFactory[this.year][day](mappedInput);
    const stopTime = Date.now();
    console.log('GetResultByDay', day, '=', result, 'ProcessTime', '=', (stopTime - startTime) / 1000);

    return result;
  }

  private inputMapByYearDay = {
    '2021': inputDayMap2021,
    '2022': inputDayMap2022,
  };

  private resultByYearDayFactory = {
    '2021': resultByDayFactory2021,
    '2022': resultByDayFactory2022,
  }

}
