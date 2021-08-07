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
exports.ModelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const model_entity_1 = require("./entities/model.entity");
const user_role_enum_1 = require("../../enums/user-role.enum");
const status_model_enum_1 = require("../../enums/status-model.enum");
const mail_service_1 = require("../../mail/mail.service");
let ModelService = class ModelService {
    constructor(modelRepository, jwtService, mailService) {
        this.modelRepository = modelRepository;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async register(modelData) {
        const verifyModel = await this.modelRepository.findOne({ pseudo: modelData.pseudo });
        if (verifyModel)
            return {
                message: "Le pseudo est déjà utilisé",
                error: true,
                pseudo: true
            };
        const model = await this.modelRepository.create(Object.assign({}, modelData));
        model.salt = await bcrypt.genSalt();
        model.password = await bcrypt.hash(model.password, model.salt);
        try {
            await this.modelRepository.save(model);
        }
        catch (error) {
            if (error.errno && error.errno == 1062)
                return {
                    message: "L'\tadresse email existe déjà",
                    error: true,
                    email: true
                };
            throw new common_1.InternalServerErrorException('Une erreur s\'est produite');
        }
        const payload = {
            id: model.id,
            email: model.email,
            role: model.role,
            pseudo: model.pseudo
        };
        const jwt = await this.jwtService.sign(payload);
        await this.mailService.confirmRegisterModel(model.email, model.pseudo, jwt);
        return {
            id: model.id,
            pseudo: model.pseudo,
            email: model.email,
            password: model.password
        };
    }
    async login(credentials) {
        const { pseudo, password } = credentials;
        const model = await this.modelRepository.createQueryBuilder("model")
            .where("model.pseudo = :pseudo or model.email = :pseudo", {
            pseudo
        }).getOne();
        if (!model) {
            return {
                message: "Pseudo ou mot de passe erronée",
                error: true
            };
        }
        const hashPassword = await bcrypt.hash(password, model.salt);
        if (hashPassword === model.password) {
            const payload = {
                id: model.id,
                pseudo: model.pseudo,
                email: model.email,
                role: model.role
            };
            const jwt = await this.jwtService.sign(payload);
            return {
                "access_token": jwt
            };
        }
        else {
            return {
                message: "Pseudo ou mot de passe erronée",
                error: true
            };
        }
    }
    isOwnerOrAdmin(object, model) {
        return (model.role === user_role_enum_1.UserRoleEnum.ADMIN || (object.model && object.model.id === model.id));
    }
    async getModel(id) {
        return await this.modelRepository.findOne({ id });
    }
    async getInfoModel(id) {
        const model = await this.modelRepository.findOne({ id });
        if (!model)
            return null;
        const { setting, credit, password, salt, role } = model, result = __rest(model, ["setting", "credit", "password", "salt", "role"]);
        return result;
    }
    async getInfos(model) {
        const result = await this.modelRepository.findOne(model);
        if (!model)
            return null;
        const { password, salt, setting, credit } = result, info = __rest(result, ["password", "salt", "setting", "credit"]);
        return result;
    }
    async updateModel(id, model) {
        const newModel = await this.modelRepository.preload(Object.assign({ id }, model));
        return await this.modelRepository.save(newModel);
    }
    async updatePartialModel(updateCriteria, info) {
        return await this.modelRepository.update(updateCriteria, info);
    }
    async changePassword(credentials, model) {
        const { oldPassword, newPassword } = credentials;
        const newModel = await this.modelRepository.findOne(model);
        console.log('Old Password ', oldPassword);
        console.log('New Password ', newPassword);
        console.log(newModel);
        const hashPassword = await bcrypt.hash(oldPassword, newModel.salt);
        console.log(hashPassword);
        if (hashPassword === newModel.password) {
            newModel.salt = await bcrypt.genSalt();
            newModel.password = await bcrypt.hash(newPassword, newModel.salt);
            await this.modelRepository.save(newModel);
            return {
                message: "Mot de passe reinitialisé",
                success: true
            };
        }
        else {
            return {
                message: "Mot de passe erronée",
                error: true
            };
        }
    }
    async getListModel(data) {
        const models = [];
        await (await this.modelRepository.find()).forEach((model) => {
            if (model.profile) {
                if ((model.profile.status === status_model_enum_1.StatusModelEnum.LIVE_VIP) && (data.context === status_model_enum_1.StatusModelEnum.LIVE)) {
                    const { password, salt, setting, credit } = model, result = __rest(model, ["password", "salt", "setting", "credit"]);
                    models.push(result);
                }
                if (model.profile.status === data.context) {
                    const { password, salt, setting, credit } = model, result = __rest(model, ["password", "salt", "setting", "credit"]);
                    models.push(result);
                }
            }
        });
        return models.slice(data.begin, data.end);
    }
    async getTotalModel() {
        let live = 0;
        let chat = 0;
        let offline = 0;
        await (await this.modelRepository.find()).forEach((model) => {
            if (model.profile) {
                if ((model.profile.status === status_model_enum_1.StatusModelEnum.LIVE) || (model.profile.status === status_model_enum_1.StatusModelEnum.LIVE_VIP))
                    live++;
                if (model.profile.status === status_model_enum_1.StatusModelEnum.INLINE)
                    chat++;
                if (model.profile.status === status_model_enum_1.StatusModelEnum.OFFLINE)
                    offline++;
            }
        });
        return {
            live,
            chat,
            offline
        };
    }
    async reinitRoom(id) {
        const rooms = await (await this.modelRepository.findOne({ id })).rooms;
        console.log('Rooms ', rooms);
    }
    async forgot(data) {
        const client = await this.modelRepository.findOne({ email: data.email });
        if (!client) {
            return {
                success: false,
                message: 'Email non enregistré sur betweenUs'
            };
        }
        const payload = {
            id: client.id,
            email: client.email,
            role: client.role,
            pseudo: client.pseudo
        };
        const jwt = await this.jwtService.sign(payload);
        await this.mailService.forgotPassClient(client.email, client.pseudo, jwt);
        return {
            success: true,
            message: 'Email de reinitialisation envoyé'
        };
    }
    async reinitPassword(data) {
        const id = data.id;
        const model = await this.modelRepository.preload({
            id
        });
        if (!model) {
            return null;
        }
        const hashPassword = await bcrypt.hash(data.newPassword, model.salt);
        model.password = hashPassword;
        await this.modelRepository.save(model);
        const payload = {
            id: model.id,
            email: model.email,
            role: model.role,
            pseudo: model.pseudo
        };
        const jwt = await this.jwtService.sign(payload);
        return {
            "access_token": jwt
        };
    }
    async getLive() {
        const models = [];
        await (await this.modelRepository.find()).forEach((model) => {
            if (model.profile) {
                if ((model.profile.status === status_model_enum_1.StatusModelEnum.LIVE_VIP) || (model.profile.status === status_model_enum_1.StatusModelEnum.LIVE)) {
                    const { password, salt, setting, credit } = model, result = __rest(model, ["password", "salt", "setting", "credit"]);
                    models.push(result);
                }
            }
        });
        return models;
    }
    async getNotLive() {
        const models = [];
        await (await this.modelRepository.find()).forEach((model) => {
            if (model.profile) {
                if ((model.profile.status === status_model_enum_1.StatusModelEnum.INLINE) || (model.profile.status === status_model_enum_1.StatusModelEnum.OFFLINE)) {
                    const { password, salt, setting, credit } = model, result = __rest(model, ["password", "salt", "setting", "credit"]);
                    models.push(result);
                }
            }
        });
        return models;
    }
};
ModelService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(model_entity_1.ModelEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        mail_service_1.MailService])
], ModelService);
exports.ModelService = ModelService;
//# sourceMappingURL=model.service.js.map