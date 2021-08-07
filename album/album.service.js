"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const model_service_1 = require("../users/model/model.service");
const album_entity_1 = require("./entities/album.entity");
const user_role_enum_1 = require("../enums/user-role.enum");
const album_model_enum_1 = require("../enums/album-model.enum");
let AlbumService = class AlbumService {
    constructor(albumRepository, modelService) {
        this.albumRepository = albumRepository;
        this.modelService = modelService;
    }
    async addAlbum(albums, model) {
        for (let i = 0; i < albums.length; i++) {
            const newAlbum = await this.albumRepository.create(albums[i]);
            newAlbum.model = model;
            await this.albumRepository.save(newAlbum);
        }
        return {
            message: true
        };
    }
    async getModelAlbum(model) {
        if (model.role === user_role_enum_1.UserRoleEnum.ADMIN)
            return await this.albumRepository.find();
        return await this.albumRepository.find({ model });
    }
    async getCountModelAlbum(model) {
        const nbVIP = await this.albumRepository.count({ model, "type_album": "vip" });
        const nbPrivate = await this.albumRepository.count({ model, "type_album": "private" });
        const nbFree = await this.albumRepository.count({ model, "type_album": "free" });
        return {
            "vip": nbVIP,
            "private": nbPrivate,
            "free": nbFree
        };
    }
    async getIntervalSpecificAlbum(model, album) {
        return await (await this.albumRepository.find({ model, "type_album": album.type_album }))
            .slice(album.begin, album.end);
    }
    async deleteAlbum(id, model) {
        const albumToRemove = await this.findAlbumById(id, model);
        return await this.albumRepository.remove(albumToRemove);
    }
    async findAlbumById(id, model) {
        const album = await this.albumRepository.findOne(id);
        if (!album) {
            throw new common_1.NotFoundException(`Album d'id ${id} n'existe pas`);
        }
        if (this.modelService.isOwnerOrAdmin(album, model))
            return album;
        else
            throw new common_1.UnauthorizedException();
    }
    async getAlbums(modelId, type_album) {
        const model = await this.modelService.getModel(modelId);
        return await this.albumRepository.find({ model, type_album });
    }
};
AlbumService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(album_entity_1.AlbumEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        model_service_1.ModelService])
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map