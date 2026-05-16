import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getMoedas(): Promise<any> {
    const key = this.configService.get<string>('HG_API_KEY');
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

                                                                        