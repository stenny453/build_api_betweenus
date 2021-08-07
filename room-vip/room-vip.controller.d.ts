import { RoomVipService } from './room-vip.service';
export declare class RoomVipController {
    private readonly roomVipService;
    constructor(roomVipService: RoomVipService);
    getColor(): {
        color: string;
    };
    getInfoClient(id: any): Promise<Partial<import("../users/client/entities/client.entity").ClientEntity>>;
    getRoomModel(id: any): Promise<{
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
    createRoom(model: any, data: any): Promise<{
        room: number;
    }>;
    getGain(id: any): Promise<import("./entities/room-vip.entity").RoomVipEntity[]>;
    getRoom(id: any): Promise<import("./entities/room-vip.entity").RoomVipEntity>;
}
