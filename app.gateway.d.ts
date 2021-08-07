import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { RoomService } from './room/room.service';
import { ModelService } from './users/model/model.service';
import { RoomPrivateService } from './room-private/room-private.service';
import { RoomVipService } from './room-vip/room-vip.service';
interface ChatSocket {
    room: string;
    role: string;
    id: number;
    message: string;
}
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private roomService;
    private roomPrivateService;
    private roomVipService;
    private modelService;
    server: Server;
    private logger;
    constructor(roomService: RoomService, roomPrivateService: RoomPrivateService, roomVipService: RoomVipService, modelService: ModelService);
    afterInit(server: Server): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleJoinRoom(client: Socket, data: {
        room: string;
        modelId: number;
        show?: string;
        clientId?: number;
        clientPseudo?: string;
    }): Promise<void>;
    handleLeaveRoom(client: Socket, data: {
        room: string;
        role: string;
        show?: string;
    }): Promise<void>;
    handleMessage(client: Socket, data: ChatSocket): void;
    handlePassToPrivate(client: Socket, data: {
        room: string;
        role: string;
        id: number;
        pseudo: string;
        message: string;
    }): Promise<void>;
    handlePassToVIP(client: Socket, data: {
        room: string;
        role: string;
        id: number;
        pseudo: string;
        message: string;
    }): Promise<void>;
    handleInvitationVIP(client: Socket, data: {
        room: string;
        role: string;
        clientId: number;
        message: string;
        roomVIP: string;
    }): Promise<void>;
    joinFree(room: string): Promise<void>;
    joinPrivate(room: string, clientId: number, clientPseudo: string): Promise<void>;
    joinVip(room: string): Promise<void>;
    leaveFree(room: string, role: string): Promise<void>;
    leavePrivate(room: string, role: string): Promise<void>;
    leaveVip(room: string, role: string): Promise<void>;
    handlePeerId(client: Socket, data: {
        peerId: any;
        room: string;
    }): Promise<void>;
    handleAskPeerId(client: Socket, data: {
        peerId: any;
        room: string;
        clientId: number;
    }): Promise<void>;
    handleAnsPeerId(client: Socket, data: {
        peerId: any;
        room: string;
        clientId: number;
    }): Promise<void>;
}
export {};
