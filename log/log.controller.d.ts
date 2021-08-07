import { LogService } from './log.service';
import { AddLogDto } from './dto/add-log.dto';
import { LogEntity } from './entities/log.entity';
export declare class LogController {
    private readonly logService;
    constructor(logService: LogService);
    addLog(log: AddLogDto, model: any): Promise<boolean>;
    getLogs(model: any): Promise<LogEntity[]>;
}
