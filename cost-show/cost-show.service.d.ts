import { Repository } from 'typeorm';
import { CostShowEntity } from './entities/cost-show.entity';
import { ShowEnum } from '../enums/show.enum';
export declare class CostShowService {
    private costShowRepository;
    constructor(costShowRepository: Repository<CostShowEntity>);
    getCostShow(type: ShowEnum): Promise<CostShowEntity>;
    getAllCostShow(): Promise<CostShowEntity[]>;
}
