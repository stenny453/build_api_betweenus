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
exports.ClientEntity = void 0;
const typeorm_1 = require("typeorm");
const timestamp_entities_1 = require("../../../generics/timestamp.entities");
const user_state_enum_1 = require("../../../enums/user-state.enum");
const user_role_enum_1 = require("../../../enums/user-role.enum");
const credit_entity_1 = require("../../../credit/entities/credit.entity");
const timer_entity_1 = require("../../../timer/entities/timer.entity");
const actif_room_private_entity_1 = require("../../../actif-room-private/entities/actif-room-private.entity");
let ClientEntity = class ClientEntity extends timestamp_entities_1.TimestampEntities {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ClientEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "pseudo", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: user_state_enum_1.UserStateEnum,
        default: user_state_enum_1.UserStateEnum.WAITING
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "state", void 0);
__decorate([
    typeorm_1.Column({
        default: 1
    }),
    __metadata("design:type", Number)
], ClientEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: user_role_enum_1.UserRoleEnum,
        default: user_role_enum_1.UserRoleEnum.CLIENT
    }),
    __metadata("design:type", String)
], ClientEntity.prototype, "role", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ClientEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ClientEntity.prototype, "salt", void 0);
__decorate([
    typeorm_1.OneToOne(() => credit_entity_1.CreditEntity, credit => credit.client, {
        eager: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", credit_entity_1.CreditEntity)
], ClientEntity.prototype, "credit", void 0);
__decorate([
    typeorm_1.OneToMany(type => timer_entity_1.TimerEntity, (timer) => timer.client, {
        cascade: true
    }),
    __metadata("design:type", timer_entity_1.TimerEntity)
], ClientEntity.prototype, "timer", void 0);
__decorate([
    typeorm_1.OneToMany(type => actif_room_private_entity_1.ActifRoomPrivateEntity, (actifRoomPrivate) => actifRoomPrivate.client, {
        nullable: true,
        cascade: true
    }),
    __metadata("design:type", actif_room_private_entity_1.ActifRoomPrivateEntity)
], ClientEntity.prototype, "rooms", void 0);
ClientEntity = __decorate([
    typeorm_1.Entity('client')
], ClientEntity);
exports.ClientEntity = ClientEntity;
//# sourceMappingURL=client.entity.js.map