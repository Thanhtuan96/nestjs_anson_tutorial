import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('customers')
export class CustomersController {
  @Get('')
  @ApiOperation({ summary: 'get customers' })
  @ApiResponse({ status: 200, description: 'Get all customers' })
  getCustomer() {
    return {
      email: 'tuan.khuat@corize.co.jp',
      name: 'Tuan Khuat',
      createAt: new Date(),
    };
  }
}
