import { RoomPrivateService } from './room-private.service';
export declare class RoomPrivateController {
    private readonly roomPrivateService;
    constructor(roomPrivateService: RoomPrivateService);
    getColor(): {
        color: string;
    };
    getInfoClient(id: any): Promise<Partial<import("../users/client/entities/client.entity").ClientEntity>>;
    getRoomModel(id: any): Promise<{
        idRoom: any;
        actif: number;
        gain?: undefined;
    } | {
        idRoom: number;
        actif: number;
        gain: number;
    }>;
    createRoom(model: any): Promise<{
        room: number;
    }>;
    getGain(id: any): Promise<import("./entities/room-private.entity").RoomPrivateEntity[]>;
    getRoom(id: any): Promise<import("./entities/room-private.entity").RoomPrivateEntity>;
}
