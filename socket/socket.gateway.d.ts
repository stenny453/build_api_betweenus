import { Server } from 'socket.io';
export declare class SocketGateway {
    server: Server;
    handleEvent(data: any, client: any): string;
}
