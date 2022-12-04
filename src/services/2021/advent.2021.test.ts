import * as sinon from "sinon";
import { testInputDataByDay } from "./advent.2021.input";
import AdventService from "../advent.service";
import { adventDay2Map } from "./day2";

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Advent 2021', () => {

  describe('Day 1', () => {
    const input: string[] = testInputDataByDay['1'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2021');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(input));
    });

    it('1a', async () => {
      const result = await service.getResultByDay('1a');
      expect(result).toEqual(7);
    });

    it('1b - three-measurement sliding window', async () => {
      const result = await service.getResultByDay('1b');
      expect(result).toEqual(4);
    });
  });

  describe('Day 2', () => {
    const input: string[] = testInputDataByDay['2'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2021');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(input));
    });

    it('Input Map', async () => {
      const result = adventDay2Map(input);
      expect(result.length).toEqual(6);
    });

    it('Day 2a', async () => {
      const result = await service.getResultByDay('2a');
      expect(result).toEqual(150);
    });

    it('Day 2b - planned course 1', async () => {
      const result = await service.getResultByDay('2b');
      expect(result).toEqual(900);
    });
  });

  describe('Day 3', () => {
    const input: string[] = testInputDataByDay['3'];
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2021');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(input));
    });

    it('Day 3a', async () => {
      const result = await service.getResultByDay('3a');
      expect(result).toEqual(198);
    });

    it('Day 3b', async () => {
      const result = await service.getResultByDay('3b');
      expect(result).toEqual(230);
    });
  });

  describe('Day 4', () => {
    const input: string[] = testInputDataByDay['4'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2021');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(input));
    });

    it('Day 4a', async () => {
      const result = await service.getResultByDay('4a');
      expect(result).toEqual(4512);
    });

    it('Day 4b', async () => {
      const result = await service.getResultByDay('4b');
      expect(result).toEqual(1924);
    });
  });

  describe('Day 5', () => {
    const input: string[] = testInputDataByDay['5'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2021');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(input));
    });

    it('Day 5a', async () => {
      const result = await service.getResultByDay('5a');
      expect(result).toEqual(5);
    });

    it('Day 5b', async () => {
      const result = await service.getResultByDay('5b');
      expect(result).toEqual(12);
    });
  });

  describe('Day 6 - lantern fish', () => {
    const input: string[] = testInputDataByDay['6'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2021');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(input));
    });

    it('Day 6a', async () => {
      const result = await service.getResultByDay('6a');
      expect(result).toEqual(5934);
    });

    it('Day 6b', async () => {
      const result = await service.getResultByDay('6b');
      expect(result).toEqual(26984457539);
    });
  });

  describe('Day 7 - treacherous whale', () => {
    const input: string[] = testInputDataByDay['7'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2021');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(input));
    });

    it('Day 7a - horizontal crab alignment', async () => {
      const result = await service.getResultByDay('7a');
      expect(result).toEqual(37);
    });

    it('Day 7b', async () => {
      const result = await service.getResultByDay('7b');
      expect(result).toEqual(168);
    });
  });

});
