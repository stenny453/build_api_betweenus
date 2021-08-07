import { ModelService } from 'src/users/model/model.service';
import { Repository } from 'typeorm';
import { CreditEntity } from './entities/credit.entity';
import { ModelEntity } from '../users/model/entities/model.entity';
import { CreditDto } from './dto/credit.dto';
import { ClientService } from '../users/client/client.service';
import { AddCreditClientDto } from './dto/add-credit-client.dto';
import { ClientEntity } from '../users/client/entities/client.entity';
export declare class CreditService {
    private creditRepository;
    private modelService;
    private clientService;
    constructor(creditRepository: Repository<CreditEntity>, modelService: ModelService, clientService: ClientService);
    getCreditModel(model: ModelEntity): Promise<any>;
    getCreditClient(client: ClientEntity): Promise<any>;
    createCredit(id: number): Promise<any>;
    createCreditClient(id: number): Promise<any>;
    updateCredit(id: number, credit: CreditDto, client: any): Promise<Partial<CreditEntity>>;
    buyCreditClient(credit: AddCreditClientDto): Promise<Partial<CreditEntity>>;
}
