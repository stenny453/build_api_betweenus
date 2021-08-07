import { CreditService } from './credit.service';
import { CreditDto } from './dto/credit.dto';
import { CreditEntity } from './entities/credit.entity';
import { AddCreditClientDto } from './dto/add-credit-client.dto';
export declare class CreditController {
    private readonly creditService;
    constructor(creditService: CreditService);
    getCredit(model: any): Promise<CreditEntity>;
    getCreditClient(client: any): Promise<CreditEntity>;
    createCredit(id: any): Promise<any>;
    createCreditClient(id: any): Promise<any>;
    buyCreditClient(data: AddCreditClientDto): Promise<Partial<CreditEntity>>;
    updateCredit(credit: CreditDto, id: any, model: any): Promise<Partial<CreditEntity>>;
}
