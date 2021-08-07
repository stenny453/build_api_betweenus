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
exports.ChatEntity = void 0;
const user_role_enum_1 = require("../../enums/user-role.enum");
const typeorm_1 = require("typeorm");
const timestamp_entities_1 = require("../../generics/timestamp.entities");
const album_model_enum_1 = require("../../enums/album-model.enum");
let ChatEntity = class ChatEntity extends timestamp_entities_1.TimestampEntities {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ChatEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ChatEntity.prototype, "idRoom", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChatEntity.prototype, "message", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: user_role_enum_1.UserRoleEnum,
        default: user_role_enum_1.UserRoleEnum.CLIENT
    }),
    __metadata("design:type", String)
], ChatEntity.prototype, "type_source", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: album_model_enum_1.AlbumModelEnum,
        default: album_model_enum_1.AlbumModelEnum.FREE
    }),
    __metadata("design:type", String)
], ChatEntity.prototype, "type_chat", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ChatEntity.prototype, "id_source", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChatEntity.prototype, "code_couleur", void 0);
ChatEntity = __decorate([
    typeorm_1.Entity('chat')
], ChatEntity);
exports.ChatEntity = ChatEntity;
//# sourceMappingURL=chat.entity.js.map