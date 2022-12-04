import AdventService from "../advent.service";
import * as sinon from "sinon";
import { testInputDataByDay } from "./advent.2022.input";
import { Day2Map } from "@services/2022/day2";

describe('Advent Tests', () => {

  describe('Day 1', () => {
    const rawInput: string[] = testInputDataByDay['1'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2022');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(rawInput));
    });

    it('Has valid input', () => {
      expect(rawInput.length).toEqual(14);
    });

    it('Part a - Find elf carrying most calories, calc result', async () => {
      const result = await service.getResultByDay('1a');
      expect(result).toEqual(24000);
    });

    it('Part b - Find top 3 elves carrying most calories, calc result', async () => {
      const result = await service.getResultByDay('1b');
      expect(result).toEqual(45000);
    });
  });

  describe('Day 2', () => {
    const rawInput: string[] = testInputDataByDay['2'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2022');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(rawInput));
    });

    it('Has valid input', () => {
      expect(rawInput.length).toEqual(3);
    });

    it('Has valid mapped input', () => {
      const mappedResult = Day2Map(rawInput);
      const first = mappedResult[0];
      expect(first.opponent.oppKey).toEqual('A');
      expect(first.mine.myKey).toEqual('Y');
      // expect(RPSValues[mappedResult[0].mine]).toEqual(RPSValues.Y)
      expect(first.mine.value + first.opponent.value).toEqual(3)
    });

    it('Part a - Strategy guide total score', async () => {
      const result = await service.getResultByDay('2a');
      expect(result).toEqual(15);
    });

    it('Part b - ', async () => {
      const result = await service.getResultByDay('2b');
      expect(result).toEqual(12);
    });
  });

});
