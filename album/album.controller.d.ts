import { AlbumService } from './album.service';
import { AddAlbumDto } from './dto/add-album.dto';
import { AlbumEntity } from './entities/album.entity';
import { SpecificAlbumModelDto } from './dto/specific-album-model.dto';
import { AlbumModelEnum } from '../enums/album-model.enum';
export declare class AlbumController {
    private readonly albumService;
    constructor(albumService: AlbumService);
    getModelAlbum(user: any): Promise<AlbumEntity[]>;
    getCountModelAlbum(user: any): Promise<{
        vip: number;
        private: number;
        free: number;
    }>;
    getAlbums(data: {
        modelId: number;
        type_album: AlbumModelEnum;
    }): Promise<AlbumEntity[]>;
    getModelSpeicifcAlbum(album: SpecificAlbumModelDto, model: any): Promise<AlbumEntity[]>;
    getAlbumFree: any;
    addAlbum(albums: AddAlbumDto[], user: any): Promise<{
        message: boolean;
    }>;
    deleteAlbum(id: any, model: any): Promise<AlbumEntity>;
}
