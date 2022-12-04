import { Controller, Param, Get } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import AdventService from '@/services/advent.service';

@Controller()
export class AdventController {
  @Get('/advent/:year/:day')
  @OpenAPI({ summary: 'Get advent input by year & day' })
  async getResultBy(@Param('year') year: '2021' | '2022', @Param('day') day: string) {
    console.log('adventController.getResultByYearDay', year, day);
    const adventService = new AdventService(year);
    const data = await adventService.getResultByDay(day);
    return { data, message: 'retrieved' };
  }
}
