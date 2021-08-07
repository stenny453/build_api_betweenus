import { ProfileService } from './profile.service';
import { ProfileEntity } from './entities/profile.entity';
import { AddProfilDto } from './dto/add-profil.dto';
import { ClientEntity } from '../users/client/entities/client.entity';
import { ModelEntity } from '../users/model/entities/model.entity';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    getProfil(model: any): Promise<ProfileEntity>;
    credential(user: ClientEntity): Promise<{
        id: number;
        role: string;
    }>;
    createProfil(id: any): Promise<ModelEntity>;
    getModelProfil(id: any): Promise<ProfileEntity>;
    updateProfil(profile: AddProfilDto, id: any, model: ModelEntity): Promise<Partial<ProfileEntity>>;
}
