import AdventService from '../services/advent.service';
import { adventDay2Map } from '../services/adventDay2';
import { testInputDataByDay } from './advent.input';
import * as sinon from 'sinon';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Advents', () => {
  describe('advent 1', () => {
    const input: string[] = testInputDataByDay['1'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService();
      sinon.stub(service, 'getInputByDay').returns(Promise.resolve(input));
    });

    it('gets day 1', async () => {
      const result = await service.getResultByDay('1');
      expect(result).toEqual(7);
    });

    it('gets day 1 part 2 - three-measurement sliding window', async () => {
      const result = await service.getResultByDay('1a');
      expect(result).toEqual(4);
    });
  });

  describe('advent 2', () => {
    const input: string[] = testInputDataByDay['2'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService();
      sinon.stub(service, 'getInputByDay').returns(Promise.resolve(input));
    });

    it('day 2 input map', async () => {
      const result = adventDay2Map(input);
      expect(result.length).toEqual(6);
    });

    it('gets day 2', async () => {
      const result = await service.getResultByDay('2');
      expect(result).toEqual(150);
    });

    it('gets day 2 part 2 - planned course 1', async () => {
      const result = await service.getResultByDay('2a');
      expect(result).toEqual(900);
    });
  });

  describe('advent 3', () => {
    const input: string[] = testInputDataByDay['3'];
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService();
      sinon.stub(service, 'getInputByDay').returns(Promise.resolve(input));
    });

    it('gets day 3', async () => {
      const result = await service.getResultByDay('3');
      expect(result).toEqual(198);
    });

    it('gets day 3a', async () => {
      const result = await service.getResultByDay('3a');
      expect(result).toEqual(230);
    });
  });

  describe('advent 4', () => {
    const input: string[] = testInputDataByDay['4'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService();
      sinon.stub(service, 'getInputByDay').returns(Promise.resolve(input));
    });

    it('gets day 4', async () => {
      const result = await service.getResultByDay('4');
      expect(result).toEqual(4512);
    });

    it('gets day 4a', async () => {
      const result = await service.getResultByDay('4a');
      expect(result).toEqual(1924);
    });
  });

  describe('advent 5', () => {
    const input: string[] = testInputDataByDay['5'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService();
      sinon.stub(service, 'getInputByDay').returns(Promise.resolve(input));
    });

    it('gets day 5', async () => {
      const result = await service.getResultByDay('5');
      expect(result).toEqual(5);
    });

    it('gets day 5a', async () => {
      const result = await service.getResultByDay('5a');
      expect(result).toEqual(12);
    });
  });

  describe('advent 6 - lantern fish', () => {
    const input: string[] = testInputDataByDay['6'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService();
      sinon.stub(service, 'getInputByDay').returns(Promise.resolve(input));
    });

    it('gets day 6', async () => {
      const result = await service.getResultByDay('6');
      expect(result).toEqual(5934);
    });

    it('gets day 6a', async () => {
      const result = await service.getResultByDay('6a');
      expect(result).toEqual(26984457539);
    });
  });

  describe('advent 7 - treacherous whale', () => {
    const input: string[] = testInputDataByDay['7'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService();
      sinon.stub(service, 'getInputByDay').returns(Promise.resolve(input));
    });

    it.only('gets day 7 - horizontal crab alignment', async () => {
      const result = await service.getResultByDay('7');
      expect(result).toEqual(37);
    });

    it.only('gets day 7a', async () => {
      const result = await service.getResultByDay('7a');
      expect(result).toEqual(168);
    });
  });
});
