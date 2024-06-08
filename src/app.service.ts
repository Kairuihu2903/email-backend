import { Injectable } from '@nestjs/common';

// create a service and controller
//define a service and a controller to handle the logic and API routes
@Injectable()
export class AppService {
  getData(): string {
    return 'Hello World!';
  }
}
