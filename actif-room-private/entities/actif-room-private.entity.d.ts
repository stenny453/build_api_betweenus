import { RoomPrivateEntity } from '../../room-private/entities/room-private.entity';
import { ClientEntity } from '../../users/client/entities/client.entity';
import { TimestampEntities } from '../../generics/timestamp.entities';
export declare class ActifRoomPrivateEntity extends TimestampEntities {
    id: number;
    client: Partial<ClientEntity>;
    type_room: string;
    roomPrivate?: RoomPrivateEntity;
}
