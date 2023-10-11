import { Module } from '@nestjs/common';
import { CustomersController } from './customers/controllers/customers/customers.controller';

@Module({
  controllers: [CustomersController],
})
export class CustomerModule {}
