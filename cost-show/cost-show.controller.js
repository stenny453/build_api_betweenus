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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostShowController = void 0;
const common_1 = require("@nestjs/common");
const cost_show_service_1 = require("./cost-show.service");
const show_enum_1 = require("../enums/show.enum");
let CostShowController = class CostShowController {
    constructor(costShowService) {
        this.costShowService = costShowService;
    }
    async getAllCostShow() {
        return await this.costShowService.getAllCostShow();
    }
    async getCostShow(type) {
        return await this.costShowService.getCostShow(type);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CostShowController.prototype, "getAllCostShow", null);
__decorate([
    common_1.Get(':type'),
    __param(0, common_1.Param('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CostShowController.prototype, "getCostShow", null);
CostShowController = __decorate([
    common_1.Controller('cost-show'),
    __metadata("design:paramtypes", [cost_show_service_1.CostShowService])
], CostShowController);
exports.CostShowController = CostShowController;
//# sourceMappingURL=cost-show.controller.js.map