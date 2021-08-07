import { RoomVipService } from './../room-vip/room-vip.service';
import { Repository } from 'typeorm';
import { TimerEntity } from './entities/timer.entity';
import { ClientEntity } from '../users/client/entities/client.entity';
import { UpdateTimerDto } from './dto/update-timer.dto';
import { AddTimerDto } from './dto/add-timer.dto';
import { ModelService } from '../users/model/model.service';
import { CreditTimerDto } from './dto/credit-timer.dto';
import { CreditService } from '../credit/credit.service';
import { ModelEntity } from '../users/model/entities/model.entity';
import { RoomPrivateService } from '../room-private/room-private.service';
export declare class TimerService {
    private timerRepository;
    private modelService;
    private creditService;
    private roomPrivateService;
    private roomVipService;
    constructor(timerRepository: Repository<TimerEntity>, modelService: ModelService, creditService: CreditService, roomPrivateService: RoomPrivateService, roomVipService: RoomVipService);
    createTimer(client: ClientEntity, data: AddTimerDto): Promise<TimerEntity>;
    createTimerModel(model: ModelEntity, data: AddTimerDto): Promise<TimerEntity>;
    updateTimer(data: UpdateTimerDto): Promise<TimerEntity>;
    getTimer(client: ClientEntity, data: AddTimerDto): Promise<TimerEntity>;
    beginTimerModel(model: ModelEntity, data: AddTimerDto): Promise<TimerEntity>;
    creditTimer(client: ClientEntity, data: CreditTimerDto): Promise<Partial<import("../credit/entities/credit.entity").CreditEntity>>;
    getSteps(created: string, updated: string): number;
}
