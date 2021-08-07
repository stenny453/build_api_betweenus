import { TimestampEntities } from '../../generics/timestamp.entities';
import { ModelEntity } from 'src/users/model/entities/model.entity';
import { ClientEntity } from '../../users/client/entities/client.entity';
export declare class CreditEntity extends TimestampEntities {
    id: number;
    credit: number;
    model: ModelEntity;
    client: ClientEntity;
}
