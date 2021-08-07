"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const model_service_1 = require("./model.service");
const model_controller_1 = require("./model.controller");
const model_entity_1 = require("./entities/model.entity");
const passport_model_strategy_1 = require("./strategy/passport-model.strategy");
const client_module_1 = require("../client/client.module");
const client_entity_1 = require("../client/entities/client.entity");
const mail_module_1 = require("../../mail/mail.module");
const MODEL_SECRET = 'modelBetweenUs';
let ModelModule = class ModelModule {
};
ModelModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([model_entity_1.ModelEntity, client_entity_1.ClientEntity]),
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt'
            }),
            jwt_1.JwtModule.register({
                secret: MODEL_SECRET,
                signOptions: { expiresIn: '86400s' },
            }),
            client_module_1.ClientModule,
            mail_module_1.MailModule
        ],
        controllers: [model_controller_1.ModelController],
        providers: [
            model_service_1.ModelService,
            passport_model_strategy_1.JwtModelStrategy
        ],
        exports: [
            model_service_1.ModelService
        ]
    })
], ModelModule);
exports.ModelModule = ModelModule;
//# sourceMappingURL=model.module.js.map