import { ModelService } from 'src/users/model/model.service';
import { Repository } from 'typeorm';
import { ModelEntity } from '../users/model/entities/model.entity';
import { ClientService } from '../users/client/client.service';
import { RoomVipEntity } from './entities/room-vip.entity';
import { ProfileService } from '../profil/profile.service';
export declare class RoomVipService {
    private roomVipRepository;
    private modelService;
    private clientService;
    private profilService;
    constructor(roomVipRepository: Repository<RoomVipEntity>, modelService: ModelService, clientService: ClientService, profilService: ProfileService);
    getColorCode(): {
        color: string;
    };
    createRoom(model: ModelEntity, clientId?: number): Promise<{
        room: number;
    }>;
    getLastRoom(id: number): Promise<{
        idRoom: any;
        actif: number;
        clientId?: undefined;
        gain?: undefined;
    } | {
        idRoom: number;
        actif: number;
        clientId: number;
        gain: number;
    }>;
    getInfoClient(id: number): Promise<Partial<import("../users/client/entities/client.entity").ClientEntity>>;
    updateActif(idRoom: string, upgrade: boolean): Promise<number>;
    updateGain(idRoom: number, gain: number): Promise<false | RoomVipEntity>;
    getRoom(id: number): Promise<RoomVipEntity>;
    getGain(id: number): Promise<RoomVipEntity[]>;
}
