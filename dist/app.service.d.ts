import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getMoedas(): Promise<any>;
    getHello(): string;
}
