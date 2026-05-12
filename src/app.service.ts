import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getMoedas() {
    const key = 'd073abc7'
    const url = `https://api.hgbrasil.com/finance?key=${key}`;

    try {
      const {data} = await firstValueFrom(this.httpService.get(url));

      return data.results.currencies;
    } catch (error) {
      return { error: 'Erro ao buscar os dados da API'}
    }
  }
  
  getHello(): string {
    return 'TESTE';
  }
}

