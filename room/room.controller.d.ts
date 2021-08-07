import { RoomService } from './room.service';
import { ClientEntity } from '../users/client/entities/client.entity';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    getColor(): {
        color: string;
    };
    getInfoClient(id: any): Promise<Partial<ClientEntity>>;
    getRoomModel(id: any): Promise<{
        idRoom: number;
        actif: number;
    }>;
    createRoom(model: any): Promise<{
        room: number;
    }>;
    getRoom(id: any): Promise<import("./entities/room.entity").RoomEntity>;
}
