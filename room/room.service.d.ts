import { ModelService } from 'src/users/model/model.service';
import { Repository } from 'typeorm';
import { RoomEntity } from './entities/room.entity';
import { ModelEntity } from '../users/model/entities/model.entity';
import { ClientService } from '../users/client/client.service';
import { ClientEntity } from '../users/client/entities/client.entity';
export declare class RoomService {
    private roomRepository;
    private modelService;
    private clientService;
    constructor(roomRepository: Repository<RoomEntity>, modelService: ModelService, clientService: ClientService);
    getColorCode(): {
        color: string;
    };
    createRoom(model: ModelEntity): Promise<{
        room: number;
    }>;
    getLastRoom(id: number): Promise<{
        idRoom: number;
        actif: number;
    }>;
    getInfoClient(id: number): Promise<Partial<ClientEntity>>;
    updateActif(idRoom: string, upgrade: boolean): Promise<number | false>;
    getRoom(id: number): Promise<RoomEntity>;
}
