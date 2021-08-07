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
exports.CreditEntity = void 0;
const timestamp_entities_1 = require("../../generics/timestamp.entities");
const typeorm_1 = require("typeorm");
const model_entity_1 = require("../../users/model/entities/model.entity");
const client_entity_1 = require("../../users/client/entities/client.entity");
let CreditEntity = class CreditEntity extends timestamp_entities_1.TimestampEntities {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CreditEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CreditEntity.prototype, "credit", void 0);
__decorate([
    typeorm_1.OneToOne(() => model_entity_1.ModelEntity, model => model.credit),
    __metadata("design:type", model_entity_1.ModelEntity)
], CreditEntity.prototype, "model", void 0);
__decorate([
    typeorm_1.OneToOne(() => client_entity_1.ClientEntity, client => client.credit),
    __metadata("design:type", client_entity_1.ClientEntity)
], CreditEntity.prototype, "client", void 0);
CreditEntity = __decorate([
    typeorm_1.Entity('credit')
], CreditEntity);
exports.CreditEntity = CreditEntity;
//# sourceMappingURL=credit.entity.js.map