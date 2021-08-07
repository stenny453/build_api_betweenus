import { ModelService } from './model.service';
import { ModelRegisterDto } from './dto/model-register.dto';
import { ModelEntity } from './entities/model.entity';
import { ModelLoginDto } from './dto/model-login.dto';
import { GetModelDto } from './dto/get-model.dto';
import { ReinitPasswordDto } from '../client/dto/reinitPassword.dto';
export declare class ModelController {
    private modelService;
    constructor(modelService: ModelService);
    register(userData: ModelRegisterDto): Promise<{
        message: string;
        error: boolean;
        pseudo: boolean;
        email?: undefined;
        id?: undefined;
        password?: undefined;
    } | {
        message: string;
        error: boolean;
        email: boolean;
        pseudo?: undefined;
        id?: undefined;
        password?: undefined;
    } | {
        id: number;
        pseudo: string;
        email: string;
        password: string;
        message?: undefined;
        error?: undefined;
    }>;
    login(credentials: ModelLoginDto): Promise<{
        message: string;
        error: boolean;
        access_token?: undefined;
    } | {
        access_token: string;
        message?: undefined;
        error?: undefined;
    }>;
    forgot(data: any): Promise<{
        success: boolean;
        message: string;
    }>;
    reinitPassword(data: ReinitPasswordDto): Promise<{
        access_token: string;
    }>;
    getList(data: GetModelDto): Promise<Partial<ModelEntity>[]>;
    getTotal(): Promise<{
        live: number;
        chat: number;
        offline: number;
    }>;
    getInfos(model: any): Promise<ModelEntity>;
    getLive(): Promise<Partial<ModelEntity>[]>;
    getNotLive(): Promise<Partial<ModelEntity>[]>;
    getInfoModel(id: any): Promise<Partial<ModelEntity>>;
}
