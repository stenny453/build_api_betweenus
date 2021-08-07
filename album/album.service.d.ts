import { Repository } from 'typeorm';
import { ModelService } from '../users/model/model.service';
import { AlbumEntity } from './entities/album.entity';
import { AddAlbumDto } from './dto/add-album.dto';
import { ModelEntity } from '../users/model/entities/model.entity';
import { SpecificAlbumModelDto } from './dto/specific-album-model.dto';
import { AlbumModelEnum } from 'src/enums/album-model.enum';
export declare class AlbumService {
    private albumRepository;
    private modelService;
    constructor(albumRepository: Repository<AlbumEntity>, modelService: ModelService);
    addAlbum(albums: AddAlbumDto[], model: any): Promise<{
        message: boolean;
    }>;
    getModelAlbum(model: ModelEntity): Promise<AlbumEntity[]>;
    getCountModelAlbum(model: ModelEntity): Promise<{
        vip: number;
        private: number;
        free: number;
    }>;
    getIntervalSpecificAlbum(model: ModelEntity, album: SpecificAlbumModelDto): Promise<AlbumEntity[]>;
    deleteAlbum(id: number, model: any): Promise<AlbumEntity>;
    findAlbumById(id: number, model: ModelEntity): Promise<AlbumEntity>;
    getAlbums(modelId: number, type_album: AlbumModelEnum): Promise<AlbumEntity[]>;
}
