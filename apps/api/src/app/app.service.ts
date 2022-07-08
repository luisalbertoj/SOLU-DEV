import { Injectable } from '@nestjs/common';
import { Message } from '@solu-dev/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
