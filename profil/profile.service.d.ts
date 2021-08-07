import { ModelService } from 'src/users/model/model.service';
import { Repository } from 'typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { ModelEntity } from '../users/model/entities/model.entity';
import { AddProfilDto } from './dto/add-profil.dto';
import { MailService } from '../mail/mail.service';
export declare class ProfileService {
    private profilRepository;
    private modelService;
    private mailService;
    constructor(profilRepository: Repository<ProfileEntity>, modelService: ModelService, mailService: MailService);
    getProfil(model: ModelEntity): Promise<any>;
    getInfo(id: number): Promise<any>;
    addProfil(profil: AddProfilDto, model: ModelEntity): Promise<any>;
    createProfil(id: number): Promise<ModelEntity>;
    updateProfil(id: number, profil: Partial<AddProfilDto>, model: any): Promise<Partial<ProfileEntity>>;
    updateLastConnection(id: number, lastConnection: any, model: any): Promise<{
        id: number;
        like: string;
        dislike: string;
        social_network: string;
        sex_orientation: string;
        description: string;
        date_last_connection: Date;
        model: ModelEntity;
    }>;
}
