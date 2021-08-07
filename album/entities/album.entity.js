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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumEntity = void 0;
const typeorm_1 = require("typeorm");
const album_model_enum_1 = require("../../enums/album-model.enum");
const model_entity_1 = require("../../users/model/entities/model.entity");
let AlbumEntity = class AlbumEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AlbumEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: album_model_enum_1.AlbumModelEnum,
        default: album_model_enum_1.AlbumModelEnum.FREE
    }),
    __metadata("design:type", String)
], AlbumEntity.prototype, "type_album", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], AlbumEntity.prototype, "path_album", void 0);
__decorate([
    typeorm_1.Column({
        default: 0
    }),
    __metadata("design:type", Number)
], AlbumEntity.prototype, "price_album", void 0);
__decorate([
    typeorm_1.ManyToOne(type => model_entity_1.ModelEntity, (model) => model.albums, {
        eager: true
    }),
    __metadata("design:type", model_entity_1.ModelEntity)
], AlbumEntity.prototype, "model", void 0);
AlbumEntity = __decorate([
    typeorm_1.Entity('album')
], AlbumEntity);
exports.AlbumEntity = AlbumEntity;
//# sourceMappingURL=album.entity.js.map