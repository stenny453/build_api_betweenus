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
exports.ModelEntity = void 0;
const user_role_enum_1 = require("../../../enums/user-role.enum");
const user_state_enum_1 = require("../../../enums/user-state.enum");
const typeorm_1 = require("typeorm");
const album_entity_1 = require("../../../album/entities/album.entity");
const profile_entity_1 = require("../../../profil/entities/profile.entity");
const setting_entity_1 = require("../../../setting/entities/setting.entity");
const log_entity_1 = require("../../../log/entities/log.entity");
const credit_entity_1 = require("../../../credit/entities/credit.entity");
const room_entity_1 = require("../../../room/entities/room.entity");
const room_private_entity_1 = require("../../../room-private/entities/room-private.entity");
const room_vip_entity_1 = require("../../../room-vip/entities/room-vip.entity");
const timer_entity_1 = require("../../../timer/entities/timer.entity");
let ModelEntity = class ModelEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ModelEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    __metadata("design:type", String)
], ModelEntity.prototype, "pseudo", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    __metadata("design:type", String)
], ModelEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ModelEntity.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ModelEntity.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ModelEntity.prototype, "day_birth", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ModelEntity.prototype, "month_birth", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ModelEntity.prototype, "year_birth", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ModelEntity.prototype, "date_birth", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: user_state_enum_1.UserStateEnum,
        default: user_state_enum_1.UserStateEnum.WAITING
    }),
    __metadata("design:type", String)
], ModelEntity.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ModelEntity.prototype, "path_recto", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ModelEntity.prototype, "path_verso", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ModelEntity.prototype, "path_soft", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ModelEntity.prototype, "path_cin", void 0);
__decorate([
    typeorm_1.Column({
        default: 1
    }),
    __metadata("design:type", Number)
], ModelEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: user_role_enum_1.UserRoleEnum,
        default: user_role_enum_1.UserRoleEnum.MODEL
    }),
    __metadata("design:type", String)
], ModelEntity.prototype, "role", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ModelEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ModelEntity.prototype, "salt", void 0);
__decorate([
    typeorm_1.OneToMany(type => album_entity_1.AlbumEntity, (album) => album.model, {
        nullable: true,
        cascade: true
    }),
    __metadata("design:type", album_entity_1.AlbumEntity)
], ModelEntity.prototype, "albums", void 0);
__decorate([
    typeorm_1.OneToOne(() => profile_entity_1.ProfileEntity, profile => profile.model, {
        eager: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", profile_entity_1.ProfileEntity)
], ModelEntity.prototype, "profile", void 0);
__decorate([
    typeorm_1.OneToOne(() => setting_entity_1.SettingEntity, setting => setting.model, {
        eager: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", setting_entity_1.SettingEntity)
], ModelEntity.prototype, "setting", void 0);
__decorate([
    typeorm_1.OneToMany(type => log_entity_1.LogEntity, (log) => log.model, {
        nullable: true,
        cascade: true
    }),
    __metadata("design:type", log_entity_1.LogEntity)
], ModelEntity.prototype, "logs", void 0);
__decorate([
    typeorm_1.OneToOne(() => credit_entity_1.CreditEntity, credit => credit.model, {
        eager: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", credit_entity_1.CreditEntity)
], ModelEntity.prototype, "credit", void 0);
__decorate([
    typeorm_1.OneToMany(type => room_entity_1.RoomEntity, (room) => room.model, {
        nullable: true,
        cascade: true
    }),
    __metadata("design:type", room_entity_1.RoomEntity)
], ModelEntity.prototype, "rooms", void 0);
__decorate([
    typeorm_1.OneToMany(type => room_private_entity_1.RoomPrivateEntity, (privateRoom) => privateRoom.model, {
        nullable: true,
        cascade: true
    }),
    __metadata("design:type", room_private_entity_1.RoomPrivateEntity)
], ModelEntity.prototype, "privateRooms", void 0);
__decorate([
    typeorm_1.OneToMany(type => room_vip_entity_1.RoomVipEntity, (vipRoom) => vipRoom.model, {
        nullable: true,
        cascade: true
    }),
    __metadata("design:type", room_vip_entity_1.RoomVipEntity)
], ModelEntity.prototype, "vipRooms", void 0);
__decorate([
    typeorm_1.OneToMany(type => timer_entity_1.TimerEntity, (timer) => timer.model, {
        nullable: true,
        cascade: true
    }),
    __metadata("design:type", timer_entity_1.TimerEntity)
], ModelEntity.prototype, "timer", void 0);
ModelEntity = __decorate([
    typeorm_1.Entity('model')
], ModelEntity);
exports.ModelEntity = ModelEntity;
//# sourceMappingURL=model.entity.js.map