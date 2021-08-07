import { ModelService } from 'src/users/model/model.service';
import { Repository } from 'typeorm';
import { ModelEntity } from '../users/model/entities/model.entity';
import { ClientService } from '../users/client/client.service';
import { RoomPrivateEntity } from './entities/room-private.entity';
import { ProfileService } from '../profil/profile.service';
export declare class RoomPrivateService {
    private roomPrivateRepository;
    private modelService;
    private clientService;
    private profilService;
    constructor(roomPrivateRepository: Repository<RoomPrivateEntity>, modelService: ModelService, clientService: ClientService, profilService: ProfileService);
    getColorCode(): {
        color: string;
    };
    createRoom(model: ModelEntity): Promise<{
        room: number;
    }>;
    getLastRoom(id: number): Promise<{
        idRoom: any;
        actif: number;
        gain?: undefined;
    } | {
        idRoom: number;
        actif: number;
        gain: number;
    }>;
    getInfoClient(id: number): Promise<Partial<import("../users/client/entities/client.entity").ClientEntity>>;
    updateActif(idRoom: string, upgrade: boolean): Promise<number | false>;
    updateGain(idRoom: number, gain: number): Promise<false | RoomPrivateEntity>;
    getRoom(id: number): Promise<RoomPrivateEntity>;
    getGain(id: number): Promise<RoomPrivateEntity[]>;
}
