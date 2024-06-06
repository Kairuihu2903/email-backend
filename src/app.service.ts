import { Injectable } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): string {
    return 'Hello World!';
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): string {
    return this.appService.getData();
  }
}
