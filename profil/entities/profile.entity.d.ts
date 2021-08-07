import { TimestampEntities } from '../../generics/timestamp.entities';
import { ModelEntity } from '../../users/model/entities/model.entity';
export declare class ProfileEntity extends TimestampEntities {
    id: number;
    like: string;
    dislike: string;
    social_network: string;
    sex_orientation: string;
    description: string;
    status: string;
    date_last_connection: Date;
    model: ModelEntity;
}
