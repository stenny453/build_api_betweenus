import { ActifRoomPrivateService } from './actif-room-private.service';
import { ClientEntity } from '../users/client/entities/client.entity';
import { AddActifDto } from './dto/add-actif.dto';
export declare class ActifRoomPrivateController {
    private readonly actifRoomPrivateService;
    constructor(actifRoomPrivateService: ActifRoomPrivateService);
    updateActif(user: ClientEntity, data: AddActifDto): Promise<import("./entities/actif-room-private.entity").ActifRoomPrivateEntity | import("typeorm").DeleteResult>;
}
