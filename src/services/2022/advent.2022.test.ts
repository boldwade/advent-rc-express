import AdventService from "../advent.service";
import * as sinon from "sinon";
import { testInputDataByDay } from "./advent.2022.input";
import { Day2Map } from "@services/2022/day2";
import { Day3Map } from "@services/2022/day3";
import { Day4Map } from "@services/2022/day4";
import { Day5Map } from "@services/2022/day5";

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
      expect(first.mine.value + first.opponent.value).toEqual(3);
    });

    it('Part a - Strategy guide total score based on expected win/lose/draw', async () => {
      const result = await service.getResultByDay('2a');
      expect(result).toEqual(15);
    });

    it('Part b - Strategy guide total score based on need to win/lose/draw', async () => {
      const result = await service.getResultByDay('2b');
      expect(result).toEqual(12);
    });
  });

  describe('Day 3', () => {
    const rawInput: string[] = testInputDataByDay['3'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2022');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(rawInput));
    });

    it('Has valid input', () => {
      expect(rawInput.length).toEqual(6);
    });

    it('Has valid mapped input', () => {
      const mappedResult = Day3Map(rawInput);
      mappedResult.forEach(x => {
        expect(x.length).toBeTruthy();
        expect(x.compartment1.length).toEqual(x.length);
        expect(x.compartment2.length).toEqual(x.length);
      });
    });

    it('Part a - Item type priority sum', async () => {
      const result = await service.getResultByDay('3a');
      expect(result).toEqual(157);
    });

    it('Part b - Badge type priority sum', async () => {
      const result = await service.getResultByDay('3b');
      expect(result).toEqual(70);
    });
  });

  describe('Day 4', () => {
    const rawInput: string[] = testInputDataByDay['4'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2022');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(rawInput));
    });

    it('Has valid input', () => {
      expect(rawInput.length).toEqual(6);
    });

    it('Has valid mapped input', () => {
      const mappedInput = Day4Map(rawInput);
      expect(mappedInput.length).toEqual(6);
      expect(mappedInput[3].secondElf[1]).toEqual(7);
    });

    it('Part a - Fully contained range pairs', async () => {
      const result = await service.getResultByDay('4a');
      expect(result).toEqual(2);
    });

    it('Part b - Any overlapping range pairs', async () => {
      const result = await service.getResultByDay('4b');
      expect(result).toEqual(4);
    });
  });

  describe('Day 5 - Supply Stacks', () => {
    const rawInput: string[] = testInputDataByDay['5'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2022');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(rawInput));
    });

    it('Has valid input', () => {
      expect(rawInput.length).toEqual(10);
    });

    it('Has valid mapped input', () => {
      const mappedInput = Day5Map(rawInput);
      expect(mappedInput.stacks.length).toEqual(3);
      expect(mappedInput.stacks.find(x => x.position === 1).stack.length).toEqual(2);
      expect(mappedInput.instructions.length).toEqual(4);
      expect(mappedInput.instructions[0].amountToMove).toEqual(1);
      expect(mappedInput.instructions[0].moveFromPosition).toEqual(2);
      expect(mappedInput.instructions[0].moveToPosition).toEqual(1);
    });

    it('Part a - Top crate at each stack', async () => {
      const result = await service.getResultByDay('5a');
      expect(result).toEqual('CMZ');
    });

    it('Part b - Rearrangement procedure', async () => {
      const result = await service.getResultByDay('5b');
      expect(result).toEqual('MCD');
    });
  });

});
