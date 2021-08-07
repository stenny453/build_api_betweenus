import { ClientEntity } from './entities/client.entity';
import { ClientService } from './client.service';
import { ClientRegisterDto } from './dto/client-register.dto';
import { ClientLoginDto } from './dto/client-login.dto';
import { ReinitPasswordDto } from './dto/reinitPassword.dto';
import { ChangePseudoDto } from './dto/changePseudo.dto';
import { ChangePasswordDto } from './dto/changePassword.dto';
export declare class ClientController {
    private clientService;
    constructor(clientService: ClientService);
    getInfos(client: any): Promise<Partial<ClientEntity>>;
    register(userData: ClientRegisterDto): Promise<{
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
    login(credentials: ClientLoginDto): Promise<{
        message: string;
        error: boolean;
        access_token?: undefined;
        id?: undefined;
        pseudo?: undefined;
        email?: undefined;
        role?: undefined;
    } | {
        access_token: string;
        id: number;
        pseudo: string;
        email: string;
        role: string;
        message?: undefined;
        error?: undefined;
    }>;
    forgot(data: any): Promise<{
        success: boolean;
        message: string;
    }>;
    reinitPassword(data: ReinitPasswordDto): Promise<{
        access_token: string;
        id: number;
        pseudo: string;
        email: string;
        role: string;
    }>;
    confirmEmail(client: ClientEntity): Promise<any>;
    changePseudo(client: ClientEntity, data: ChangePseudoDto): Promise<{
        access_token: string;
        id: number;
        pseudo: string;
        email: string;
        role: string;
    }>;
    changePassword(client: ClientEntity, data: ChangePasswordDto): Promise<{
        error: boolean;
        message: string;
        success?: undefined;
    } | {
        success: boolean;
        message: string;
        error?: undefined;
    }>;
    deleteAccount(client: ClientEntity, data: {
        password: string;
    }): Promise<{
        error: boolean;
        message: string;
        success?: undefined;
    } | {
        success: boolean;
        message: string;
        error?: undefined;
    }>;
    restoreAccount(client: ClientEntity): Promise<{
        success: boolean;
        message: string;
    }>;
    deactivateAccount(client: ClientEntity, data: {
        password: string;
    }): Promise<{
        error: boolean;
        message: string;
        success?: undefined;
    } | {
        success: boolean;
        message: string;
        error?: undefined;
    }>;
    reactivateAccount(client: ClientEntity): Promise<{
        success: boolean;
        message: string;
    }>;
    getInfo(id: any): Promise<ClientEntity>;
}
