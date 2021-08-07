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
exports.ProfileEntity = void 0;
const typeorm_1 = require("typeorm");
const status_model_enum_1 = require("../../enums/status-model.enum");
const timestamp_entities_1 = require("../../generics/timestamp.entities");
const model_entity_1 = require("../../users/model/entities/model.entity");
let ProfileEntity = class ProfileEntity extends timestamp_entities_1.TimestampEntities {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProfileEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProfileEntity.prototype, "like", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProfileEntity.prototype, "dislike", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProfileEntity.prototype, "social_network", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProfileEntity.prototype, "sex_orientation", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProfileEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: status_model_enum_1.StatusModelEnum,
        default: status_model_enum_1.StatusModelEnum.OFFLINE
    }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({
        default: null
    }),
    __metadata("design:type", Date)
], ProfileEntity.prototype, "date_last_connection", void 0);
__decorate([
    typeorm_1.OneToOne(() => model_entity_1.ModelEntity, model => model.profile),
    __metadata("design:type", model_entity_1.ModelEntity)
], ProfileEntity.prototype, "model", void 0);
ProfileEntity = __decorate([
    typeorm_1.Entity('profile')
], ProfileEntity);
exports.ProfileEntity = ProfileEntity;
//# sourceMappingURL=profile.entity.js.map