import { ActifRoomPrivateEntity } from "src/actif-room-private/entities/actif-room-private.entity";
import { ModelEntity } from "src/users/model/entities/model.entity";
import { TimestampEntities } from '../../generics/timestamp.entities';
export declare class RoomPrivateEntity extends TimestampEntities {
    id: number;
    actif: number;
    gain: number;
    model: ModelEntity;
    clients: ActifRoomPrivateEntity;
}
