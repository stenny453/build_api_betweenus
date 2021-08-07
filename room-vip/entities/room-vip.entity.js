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
exports.RoomVipEntity = void 0;
const actif_room_private_entity_1 = require("../../actif-room-private/entities/actif-room-private.entity");
const timestamp_entities_1 = require("../../generics/timestamp.entities");
const model_entity_1 = require("../../users/model/entities/model.entity");
const typeorm_1 = require("typeorm");
let RoomVipEntity = class RoomVipEntity extends timestamp_entities_1.TimestampEntities {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RoomVipEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        default: 0
    }),
    __metadata("design:type", Number)
], RoomVipEntity.prototype, "actif", void 0);
__decorate([
    typeorm_1.Column({
        default: 0
    }),
    __metadata("design:type", Number)
], RoomVipEntity.prototype, "gain", void 0);
__decorate([
    typeorm_1.Column({
        default: 0
    }),
    __metadata("design:type", Number)
], RoomVipEntity.prototype, "clientId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => model_entity_1.ModelEntity, (model) => model.vipRooms, {
        eager: true
    }),
    __metadata("design:type", model_entity_1.ModelEntity)
], RoomVipEntity.prototype, "model", void 0);
RoomVipEntity = __decorate([
    typeorm_1.Entity('room-vip')
], RoomVipEntity);
exports.RoomVipEntity = RoomVipEntity;
//# sourceMappingURL=room-vip.entity.js.map