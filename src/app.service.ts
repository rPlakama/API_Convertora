import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMoedas(): string {
    return "Atualmente, estão disponiveis essas conversões \n DOLLAR \n EURO \n BRL";
  }
}
