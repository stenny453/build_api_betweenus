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
exports.AlbumController = void 0;
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../decorators/user.decorator");
const model_auth_guard_1 = require("../users/model/guards/model-auth.guard");
const album_service_1 = require("./album.service");
const specific_album_model_dto_1 = require("./dto/specific-album-model.dto");
let AlbumController = class AlbumController {
    constructor(albumService) {
        this.albumService = albumService;
    }
    async getModelAlbum(user) {
        return await this.albumService.getModelAlbum(user);
    }
    async getCountModelAlbum(user) {
        return await this.albumService.getCountModelAlbum(user);
    }
    async getAlbums(data) {
        return await this.albumService.getAlbums(data.modelId, data.type_album);
    }
    async getModelSpeicifcAlbum(album, model) {
        return await this.albumService.getIntervalSpecificAlbum(model, album);
    }
    async addAlbum(albums, user) {
        console.log(albums);
        return await this.albumService.addAlbum(albums, user);
    }
    async deleteAlbum(id, model) {
        return await this.albumService.deleteAlbum(id, model);
    }
};
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Get('model'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "getModelAlbum", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Get('model/count'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "getCountModelAlbum", null);
__decorate([
    common_1.Post('getAlbums'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "getAlbums", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post('specific'),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [specific_album_model_dto_1.SpecificAlbumModelDto, Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "getModelSpeicifcAlbum", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "addAlbum", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "deleteAlbum", null);
AlbumController = __decorate([
    common_1.Controller('album'),
    __metadata("design:paramtypes", [album_service_1.AlbumService])
], AlbumController);
exports.AlbumController = AlbumController;
//# sourceMappingURL=album.controller.js.map