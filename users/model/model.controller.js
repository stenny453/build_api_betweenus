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
exports.ModelController = void 0;
const common_1 = require("@nestjs/common");
const model_service_1 = require("./model.service");
const model_register_dto_1 = require("./dto/model-register.dto");
const model_login_dto_1 = require("./dto/model-login.dto");
const get_model_dto_1 = require("./dto/get-model.dto");
const user_decorator_1 = require("../../decorators/user.decorator");
const model_auth_guard_1 = require("./guards/model-auth.guard");
const reinitPassword_dto_1 = require("../client/dto/reinitPassword.dto");
let ModelController = class ModelController {
    constructor(modelService) {
        this.modelService = modelService;
    }
    async register(userData) {
        return await this.modelService.register(userData);
    }
    async login(credentials) {
        return await this.modelService.login(credentials);
    }
    async forgot(data) {
        return await this.modelService.forgot(data);
    }
    async reinitPassword(data) {
        return await this.modelService.reinitPassword(data);
    }
    async getList(data) {
        return await this.modelService.getListModel(data);
    }
    async getTotal() {
        return await this.modelService.getTotalModel();
    }
    async getInfos(model) {
        return await this.modelService.getInfos(model);
    }
    async getLive() {
        return await this.modelService.getLive();
    }
    async getNotLive() {
        return await this.modelService.getNotLive();
    }
    async getInfoModel(id) {
        return await this.modelService.getInfoModel(id);
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [model_register_dto_1.ModelRegisterDto]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "register", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [model_login_dto_1.ModelLoginDto]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "login", null);
__decorate([
    common_1.Post('forgot'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "forgot", null);
__decorate([
    common_1.Post('reinitPassword'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reinitPassword_dto_1.ReinitPasswordDto]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "reinitPassword", null);
__decorate([
    common_1.Post('list'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_model_dto_1.GetModelDto]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "getList", null);
__decorate([
    common_1.Get('total'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "getTotal", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Get('info'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "getInfos", null);
__decorate([
    common_1.Get('live'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "getLive", null);
__decorate([
    common_1.Get('nolive'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "getNotLive", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "getInfoModel", null);
ModelController = __decorate([
    common_1.Controller('model'),
    __metadata("design:paramtypes", [model_service_1.ModelService])
], ModelController);
exports.ModelController = ModelController;
//# sourceMappingURL=model.controller.js.map