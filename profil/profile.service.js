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
exports.ProfileService = void 0;
const status_model_enum_1 = require("./../enums/status-model.enum");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const model_service_1 = require("../users/model/model.service");
const typeorm_2 = require("typeorm");
const profile_entity_1 = require("./entities/profile.entity");
const mail_service_1 = require("../mail/mail.service");
let ProfileService = class ProfileService {
    constructor(profilRepository, modelService, mailService) {
        this.profilRepository = profilRepository;
        this.modelService = modelService;
        this.mailService = mailService;
    }
    async getProfil(model) {
        const newModel = await this.modelService.getModel(model.id);
        const _a = newModel.profile, { createdAt, deletedAt, updatedAt } = _a, result = __rest(_a, ["createdAt", "deletedAt", "updatedAt"]);
        return result;
    }
    async getInfo(id) {
        const newModel = await this.modelService.getModel(id);
        const _a = newModel.profile, { createdAt, deletedAt, updatedAt } = _a, result = __rest(_a, ["createdAt", "deletedAt", "updatedAt"]);
        return result;
    }
    async addProfil(profil, model) {
        const newProfil = await this.profilRepository.save(profil);
        model.profile = newProfil;
        const id = model.id;
        return await this.modelService.updateModel(id, model);
    }
    async createProfil(id) {
        const model = await this.modelService.getModel(id);
        const profil = {
            like: '',
            dislike: '',
            sex_orientation: '',
            social_network: '',
            description: '',
            status: status_model_enum_1.StatusModelEnum.OFFLINE
        };
        const newProfil = await this.profilRepository.save(profil);
        model.profile = newProfil;
        return await this.modelService.updateModel(id, model);
    }
    async updateProfil(id, profil, model) {
        const themodel = await this.modelService.getModel(id);
        const newProfil = await this.profilRepository.preload(Object.assign({ id }, profil));
        if (model.profile.id === newProfil.id) {
            if (!newProfil) {
                throw new common_1.NotFoundException(`Le cv d'id ${id} n'existe pas`);
            }
            const newP = await this.profilRepository.save(newProfil);
            const { createdAt, deletedAt, updatedAt, status } = newP, result = __rest(newP, ["createdAt", "deletedAt", "updatedAt", "status"]);
            return result;
        }
        else
            throw new common_1.UnauthorizedException();
    }
    async updateLastConnection(id, lastConnection, model) {
        const newProfil = await this.profilRepository.preload({ id });
        newProfil.date_last_connection = lastConnection;
        if (model.profile.id === newProfil.id) {
            if (!newProfil) {
                throw new common_1.NotFoundException(`Le cv d'id ${id} n'existe pas`);
            }
            const newP = await this.profilRepository.save(newProfil);
            const { createdAt, deletedAt, updatedAt, status } = newP, result = __rest(newP, ["createdAt", "deletedAt", "updatedAt", "status"]);
            return result;
        }
        else
            throw new common_1.UnauthorizedException();
    }
};
ProfileService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(profile_entity_1.ProfileEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        model_service_1.ModelService,
        mail_service_1.MailService])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map