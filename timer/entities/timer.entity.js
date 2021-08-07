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
exports.TimerEntity = void 0;
const show_enum_1 = require("../../enums/show.enum");
const typeorm_1 = require("typeorm");
const timestamp_entities_1 = require("../../generics/timestamp.entities");
const client_entity_1 = require("../../users/client/entities/client.entity");
const model_entity_1 = require("../../users/model/entities/model.entity");
let TimerEntity = class TimerEntity extends timestamp_entities_1.TimestampEntities {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TimerEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        default: false
    }),
    __metadata("design:type", Boolean)
], TimerEntity.prototype, "leaved", void 0);
__decorate([
    typeorm_1.Column({
        default: null
    }),
    __metadata("design:type", Date)
], TimerEntity.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: show_enum_1.ShowEnum,
        default: show_enum_1.ShowEnum.FREE
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TimerEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({
        default: null
    }),
    __metadata("design:type", String)
], TimerEntity.prototype, "push", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_entity_1.ClientEntity, (client) => client.timer, {
        eager: true,
        nullable: true
    }),
    __metadata("design:type", client_entity_1.ClientEntity)
], TimerEntity.prototype, "client", void 0);
__decorate([
    typeorm_1.ManyToOne(type => model_entity_1.ModelEntity, (model) => model.timer, {
        eager: true,
        nullable: true
    }),
    __metadata("design:type", model_entity_1.ModelEntity)
], TimerEntity.prototype, "model", void 0);
TimerEntity = __decorate([
    typeorm_1.Entity('timer')
], TimerEntity);
exports.TimerEntity = TimerEntity;
//# sourceMappingURL=timer.entity.js.map