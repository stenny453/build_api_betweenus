import { TimestampEntities } from '../../../generics/timestamp.entities';
import { CreditEntity } from 'src/credit/entities/credit.entity';
import { TimerEntity } from '../../../timer/entities/timer.entity';
import { ActifRoomPrivateEntity } from 'src/actif-room-private/entities/actif-room-private.entity';
export declare class ClientEntity extends TimestampEntities {
    id: number;
    pseudo: string;
    email: string;
    state: string;
    status: number;
    role: string;
    password: string;
    salt: string;
    credit: CreditEntity;
    timer: TimerEntity;
    rooms: ActifRoomPrivateEntity;
}
