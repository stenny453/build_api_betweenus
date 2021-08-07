import { CostShowService } from './cost-show.service';
import { ShowEnum } from '../enums/show.enum';
export declare class CostShowController {
    private readonly costShowService;
    constructor(costShowService: CostShowService);
    getAllCostShow(): Promise<import("./entities/cost-show.entity").CostShowEntity[]>;
    getCostShow(type: ShowEnum): Promise<import("./entities/cost-show.entity").CostShowEntity>;
}
