import { ModelService } from 'src/users/model/model.service';
import { Repository } from 'typeorm';
import { LogEntity } from './entities/log.entity';
import { AddLogDto } from './dto/add-log.dto';
import { ModelEntity } from '../users/model/entities/model.entity';
import { ProfileService } from '../profil/profile.service';
export declare class LogService {
    private logRepository;
    private modelService;
    private profileService;
    constructor(logRepository: Repository<LogEntity>, modelService: ModelService, profileService: ProfileService);
    addLog(log: AddLogDto, model: any): Promise<boolean>;
    saveDate(log: LogEntity, model: any): Promise<boolean>;
    getLogs(model: ModelEntity): Promise<LogEntity[]>;
}
