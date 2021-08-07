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
exports.SettingController = void 0;
const common_1 = require("@nestjs/common");
const model_auth_guard_1 = require("../users/model/guards/model-auth.guard");
const setting_service_1 = require("./setting.service");
const user_decorator_1 = require("../decorators/user.decorator");
const setting_dto_1 = require("./dto/setting.dto");
const model_service_1 = require("../users/model/model.service");
const model_entity_1 = require("../users/model/entities/model.entity");
const model_password_dto_1 = require("../users/model/dto/model-password.dto");
let SettingController = class SettingController {
    constructor(settingService, modelService) {
        this.settingService = settingService;
        this.modelService = modelService;
    }
    async getSetting(model) {
        return await this.settingService.getSettingInfo(model);
    }
    async getProfil(model) {
        return await this.settingService.getModelInfo(model);
    }
    async updateInfo(updateObject, model) {
        const updateCriteria = {
            id: model.id
        };
        return await this.modelService.updatePartialModel(updateCriteria, updateObject);
    }
    async login(model, credentials) {
        return await this.modelService.changePassword(credentials, model);
    }
    async createProfil(id) {
        return await this.settingService.createSetting(id);
    }
    async updateProfil(setting, id, model) {
        return await this.settingService.updateSetting(id, setting, model);
    }
};
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Get(),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "getSetting", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Get('info'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "getProfil", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Patch('/model'),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, model_entity_1.ModelEntity]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "updateInfo", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post('password'),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [model_entity_1.ModelEntity,
        model_password_dto_1.ModelPasswordDto]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "login", null);
__decorate([
    common_1.Post('create/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "createProfil", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Patch(':id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __param(2, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [setting_dto_1.SettingDto, Object, Object]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "updateProfil", null);
SettingController = __decorate([
    common_1.Controller('setting'),
    __metadata("design:paramtypes", [setting_service_1.SettingService,
        model_service_1.ModelService])
], SettingController);
exports.SettingController = SettingController;
//# sourceMappingURL=setting.controller.js.map