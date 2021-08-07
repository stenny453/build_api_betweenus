import { TimestampEntities } from '../../generics/timestamp.entities';
import { ClientEntity } from '../../users/client/entities/client.entity';
import { ModelEntity } from '../../users/model/entities/model.entity';
export declare class TimerEntity extends TimestampEntities {
    id: number;
    leaved: boolean;
    lastUpdated: Date;
    type: string;
    push: string;
    client: ClientEntity;
    model: ModelEntity;
}
