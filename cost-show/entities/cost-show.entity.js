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
exports.CostShowEntity = void 0;
const typeorm_1 = require("typeorm");
const show_enum_1 = require("../../enums/show.enum");
let CostShowEntity = class CostShowEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CostShowEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: show_enum_1.ShowEnum,
        default: show_enum_1.ShowEnum.FREE
    }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], CostShowEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({
        default: 0
    }),
    __metadata("design:type", Number)
], CostShowEntity.prototype, "credit", void 0);
__decorate([
    typeorm_1.Column({
        default: 60
    }),
    __metadata("design:type", Number)
], CostShowEntity.prototype, "second", void 0);
CostShowEntity = __decorate([
    typeorm_1.Entity('cost-show')
], CostShowEntity);
exports.CostShowEntity = CostShowEntity;
//# sourceMappingURL=cost-show.entity.js.map