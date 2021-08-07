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
exports.LogEntity = void 0;
const timestamp_entities_1 = require("../../generics/timestamp.entities");
const typeorm_1 = require("typeorm");
const user_role_enum_1 = require("../../enums/user-role.enum");
const model_entity_1 = require("../../users/model/entities/model.entity");
let LogEntity = class LogEntity extends timestamp_entities_1.TimestampEntities {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LogEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: user_role_enum_1.UserRoleEnum,
        default: user_role_enum_1.UserRoleEnum.MODEL
    }),
    __metadata("design:type", String)
], LogEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], LogEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(type => model_entity_1.ModelEntity, (model) => model.logs, {
        eager: true
    }),
    __metadata("design:type", model_entity_1.ModelEntity)
], LogEntity.prototype, "model", void 0);
LogEntity = __decorate([
    typeorm_1.Entity('log')
], LogEntity);
exports.LogEntity = LogEntity;
//# sourceMappingURL=log.entity.js.map