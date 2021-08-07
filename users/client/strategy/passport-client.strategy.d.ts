import { Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { ClientEntity } from '../entities/client.entity';
import { UserPayloadInterface } from 'src/users/interfaces/user-payload.interface';
declare const JwtClientStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtClientStrategy extends JwtClientStrategy_base {
    private clientRepository;
    constructor(clientRepository: Repository<ClientEntity>);
    validate(payload: UserPayloadInterface): Promise<{
        id: number;
        pseudo: string;
        email: string;
        state: string;
        status: number;
        role: string;
        credit: import("../../../credit/entities/credit.entity").CreditEntity;
        timer: import("../../../timer/entities/timer.entity").TimerEntity;
        rooms: import("../../../actif-room-private/entities/actif-room-private.entity").ActifRoomPrivateEntity;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
    }>;
}
export {};
