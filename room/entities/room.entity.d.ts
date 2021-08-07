import { ModelEntity } from "src/users/model/entities/model.entity";
import { TimestampEntities } from '../../generics/timestamp.entities';
export declare class RoomEntity extends TimestampEntities {
    id: number;
    actif: number;
    model: ModelEntity;
}
