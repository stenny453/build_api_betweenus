import { SettingService } from './setting.service';
import { SettingEntity } from './entities/setting.entity';
import { SettingDto } from './dto/setting.dto';
import { ModelService } from '../users/model/model.service';
import { ModelEntity } from '../users/model/entities/model.entity';
import { ModelPasswordDto } from '../users/model/dto/model-password.dto';
export declare class SettingController {
    private readonly settingService;
    private modelService;
    constructor(settingService: SettingService, modelService: ModelService);
    getSetting(model: any): Promise<SettingEntity>;
    getProfil(model: any): Promise<SettingEntity>;
    updateInfo(updateObject: any, model: ModelEntity): Promise<import("typeorm").UpdateResult>;
    login(model: ModelEntity, credentials: ModelPasswordDto): Promise<{
        message: string;
        success: boolean;
        error?: undefined;
    } | {
        message: string;
        error: boolean;
        success?: undefined;
    }>;
    createProfil(id: any): Promise<ModelEntity>;
    updateProfil(setting: SettingDto, id: any, model: any): Promise<Partial<SettingEntity>>;
}
