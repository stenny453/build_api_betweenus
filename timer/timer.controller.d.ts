import { TimerService } from './timer.service';
import { AddTimerDto } from './dto/add-timer.dto';
import { CreditTimerDto } from './dto/credit-timer.dto';
export declare class TimerController {
    private timerService;
    constructor(timerService: TimerService);
    getTimer(client: any, data: AddTimerDto): Promise<import("./entities/timer.entity").TimerEntity>;
    beginTimerModel(model: any, data: AddTimerDto): Promise<import("./entities/timer.entity").TimerEntity>;
    updateTimer(client: any, data: any): Promise<import("./entities/timer.entity").TimerEntity>;
    creditTimer(client: any, data: CreditTimerDto): Promise<Partial<import("../credit/entities/credit.entity").CreditEntity>>;
}
