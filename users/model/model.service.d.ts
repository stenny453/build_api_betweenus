import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { ModelEntity } from './entities/model.entity';
import { ModelRegisterDto } from './dto/model-register.dto';
import { ModelLoginDto } from './dto/model-login.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { ModelPasswordDto } from './dto/model-password.dto';
import { GetModelDto } from './dto/get-model.dto';
import { MailService } from '../../mail/mail.service';
import { ReinitPasswordDto } from '../client/dto/reinitPassword.dto';
export declare class ModelService {
    private modelRepository;
    private jwtService;
    private mailService;
    constructor(modelRepository: Repository<ModelEntity>, jwtService: JwtService, mailService: MailService);
    register(modelData: ModelRegisterDto): Promise<{
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
    isOwnerOrAdmin(object: any, model: ModelEntity): boolean;
    getModel(id: number): Promise<ModelEntity>;
    getInfoModel(id: number): Promise<Partial<ModelEntity>>;
    getInfos(model: ModelEntity): Promise<ModelEntity>;
    updateModel(id: number, model: ModelEntity): Promise<ModelEntity>;
    updatePartialModel(updateCriteria: any, info: UpdateModelDto): Promise<import("typeorm").UpdateResult>;
    changePassword(credentials: ModelPasswordDto, model: ModelEntity): Promise<{
        message: string;
        success: boolean;
        error?: undefined;
    } | {
        message: string;
        error: boolean;
        success?: undefined;
    }>;
    getListModel(data: GetModelDto): Promise<Partial<ModelEntity>[]>;
    getTotalModel(): Promise<{
        live: number;
        chat: number;
        offline: number;
    }>;
    reinitRoom(id: number): Promise<void>;
    forgot(data: any): Promise<{
        success: boolean;
        message: string;
    }>;
    reinitPassword(data: ReinitPasswordDto): Promise<{
        access_token: string;
    }>;
    getLive(): Promise<Partial<ModelEntity>[]>;
    getNotLive(): Promise<Partial<ModelEntity>[]>;
}
