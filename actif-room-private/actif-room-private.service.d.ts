import { Repository } from 'typeorm';
import { AddActifDto } from './dto/add-actif.dto';
import { ActifRoomPrivateEntity } from './entities/actif-room-private.entity';
import { RoomPrivateService } from '../room-private/room-private.service';
import { ClientEntity } from '../users/client/entities/client.entity';
import { ClientService } from '../users/client/client.service';
export declare class ActifRoomPrivateService {
    private actifRoomPrivateRepository;
    private roomPrivateService;
    private clientService;
    constructor(actifRoomPrivateRepository: Repository<ActifRoomPrivateEntity>, roomPrivateService: RoomPrivateService, clientService: ClientService);
    updateActif(user: ClientEntity, data: AddActifDto): Promise<ActifRoomPrivateEntity | import("typeorm").DeleteResult>;
}
