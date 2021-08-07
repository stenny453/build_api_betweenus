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
exports.LogService = void 0;
const status_model_enum_1 = require("./../enums/status-model.enum");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const model_service_1 = require("../users/model/model.service");
const typeorm_2 = require("typeorm");
const log_entity_1 = require("./entities/log.entity");
const profile_service_1 = require("../profil/profile.service");
let LogService = class LogService {
    constructor(logRepository, modelService, profileService) {
        this.logRepository = logRepository;
        this.modelService = modelService;
        this.profileService = profileService;
    }
    async addLog(log, model) {
        const newLog = await this.logRepository.create(log);
        newLog.model = model;
        await this.logRepository.save(newLog);
        return await this.saveDate(newLog, model);
    }
    async saveDate(log, model) {
        let profile = null;
        return await this.profileService.getProfil(model).then((data) => {
            profile = data;
            if (log.description === "connection") {
                profile.status = status_model_enum_1.StatusModelEnum.INLINE;
                this.profileService.updateLastConnection(profile.id, log.createdAt, model);
                this.profileService.updateProfil(profile.id, profile, model);
            }
            if (log.description === "deconnection") {
                profile.status = status_model_enum_1.StatusModelEnum.OFFLINE;
                this.profileService.updateProfil(profile.id, profile, model);
            }
            return true;
        });
    }
    async getLogs(model) {
        return await this.logRepository.find({ model });
    }
};
LogService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(log_entity_1.LogEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        model_service_1.ModelService,
        profile_service_1.ProfileService])
], LogService);
exports.LogService = LogService;
//# sourceMappingURL=log.service.js.map