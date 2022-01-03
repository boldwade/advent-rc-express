import AdventService from '../services/advent.service';
import * as sinon from 'sinon';

const testInputDataByDay = {
    '1': [],
    '2': [],
    '3': ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'],
    '4': `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

  22 13 17 11  0
   8  2 23  4 24
  21  9 14 16  7
   6 10  3 18  5
   1 12 20 15 19

   3 15  0  2 22
   9 18 13 17  5
  19  8  7 25 23
  20 11 10 24  4
  14 21 16 12  6

  14 21 17 24  4
  10 16 15  9 19
  18  8 23 26 20
  22 11 13  6  5
   2  0 12  3  7`,
};

afterAll(async () => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Advents', () => {
    describe('advent 3', () => {
        it('gets day 3', async () => {
            const service = new AdventService();
            sinon.stub(service, 'getInputByDay').returns(Promise.resolve(testInputDataByDay['3']));
            const result = await service.getResultByDay('3');
            expect(result).toEqual(234);
        });

        it('gets day 3a', async () => {
            const service = new AdventService();
            sinon.stub(service, 'getInputByDay').returns(Promise.resolve(testInputDataByDay['3']));
            const result = await service.getResultByDay('3a');
            expect(result).toEqual(230);
        });
    });
});
