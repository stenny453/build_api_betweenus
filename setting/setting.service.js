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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingService = void 0;
const common_1 = require("@nestjs/common");
const setting_entity_1 = require("./entities/setting.entity");
const model_service_1 = require("../users/model/model.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let SettingService = class SettingService {
    constructor(settingRepository, modelService) {
        this.settingRepository = settingRepository;
        this.modelService = modelService;
    }
    async getModelInfo(model) {
        const newModel = await this.modelService.getModel(model.id);
        const { state, role, salt, password, profile } = newModel, result = __rest(newModel, ["state", "role", "salt", "password", "profile"]);
        return result;
    }
    async getSettingInfo(model) {
        const newModel = await this.modelService.getModel(model.id);
        const result = __rest(newModel.setting, []);
        return result;
    }
    async createSetting(id) {
        const model = await this.modelService.getModel(id);
        const setting = {
            sound_message: 1,
            sound_notification: 1,
            mail_notification: 0
        };
        const newSetting = await this.settingRepository.save(setting);
        model.setting = newSetting;
        return await this.modelService.updateModel(id, model);
    }
    async updateSetting(id, setting, model) {
        const newSetting = await this.settingRepository.preload(Object.assign({ id }, setting));
        if (model.setting.id === newSetting.id) {
            if (!newSetting) {
                throw new common_1.NotFoundException(`Le cv d'id ${id} n'existe pas`);
            }
            const resultSetting = await this.settingRepository.save(newSetting);
            const result = __rest(resultSetting, []);
            return result;
        }
        else
            throw new common_1.UnauthorizedException();
    }
};
SettingService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(setting_entity_1.SettingEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        model_service_1.ModelService])
], SettingService);
exports.SettingService = SettingService;
//# sourceMappingURL=setting.service.js.map