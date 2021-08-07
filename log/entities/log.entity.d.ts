import { TimestampEntities } from '../../generics/timestamp.entities';
import { ModelEntity } from 'src/users/model/entities/model.entity';
export declare class LogEntity extends TimestampEntities {
    id: number;
    type: string;
    description: string;
    model: ModelEntity;
}
