import AdventService from "../advent.service";
import * as sinon from "sinon";
import { testInputDataByDay } from "./advent.2022.input";

describe('Advent Tests', () => {

  describe('Day 1', () => {
    const rawInput: string[] = testInputDataByDay['1'].split('\n');
    let service: AdventService;

    beforeEach(() => {
      service = new AdventService('2022');
      sinon.stub(service, 'fetchInputByDay').returns(Promise.resolve(rawInput));
    });

    it('Has valid input', () => {
      expect(rawInput.length).toEqual(14)
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

});
