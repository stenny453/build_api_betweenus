import { INestApplicationContext } from '@nestjs/common';
import { AbstractWsAdapter, MessageMappingProperties } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { CustomOrigin } from '@nestjs/common/interfaces/external/cors-options.interface';
export declare class SocketIoAdapter extends AbstractWsAdapter {
    private corsOrigin?;
    constructor(appOrHttpServer?: INestApplicationContext | any, corsOrigin?: boolean | string | RegExp | (string | RegExp)[] | CustomOrigin);
    create(port: number, options?: any & {
        namespace?: string;
        server?: any;
    }): any;
    createIOServer(port: number, options?: any): any;
    bindMessageHandlers(client: any, handlers: MessageMappingProperties[], transform: (data: any) => Observable<any>): void;
    mapPayload(payload: any): {
        data: any;
        ack?: () => any;
    };
}
