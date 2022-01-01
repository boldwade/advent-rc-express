import { Controller, Param, Get } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import AdventService from '@/services/advent.service';

@Controller()
export class AdventController {
  public adventService = new AdventService();

  @Get('/advent/:day')
  @OpenAPI({ summary: 'Get advent input by day' })
  async getUserById(@Param('day') day: string) {
    console.log('adventController', day);
    const data = await this.adventService.getResultByDay(day);
    return { data, message: 'retrieved' };
  }
}
