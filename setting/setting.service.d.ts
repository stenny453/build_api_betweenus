import { SettingEntity } from './entities/setting.entity';
import { ModelService } from '../users/model/model.service';
import { Repository } from 'typeorm';
import { ModelEntity } from '../users/model/entities/model.entity';
import { SettingDto } from './dto/setting.dto';
export declare class SettingService {
    private settingRepository;
    private modelService;
    constructor(settingRepository: Repository<SettingEntity>, modelService: ModelService);
    getModelInfo(model: any): Promise<any>;
    getSettingInfo(model: any): Promise<any>;
    createSetting(id: number): Promise<ModelEntity>;
    updateSetting(id: number, setting: SettingDto, model: any): Promise<Partial<SettingEntity>>;
}
