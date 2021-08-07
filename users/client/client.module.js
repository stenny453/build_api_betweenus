"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const client_controller_1 = require("./client.controller");
const client_service_1 = require("./client.service");
const passport_client_strategy_1 = require("./strategy/passport-client.strategy");
const client_entity_1 = require("./entities/client.entity");
const dotenv = require("dotenv");
const mail_module_1 = require("../../mail/mail.module");
dotenv.config();
let ClientModule = class ClientModule {
};
ClientModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([client_entity_1.ClientEntity]),
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt'
            }),
            jwt_1.JwtModule.register({
                secret: process.env.MODEL_SECRET,
                signOptions: { expiresIn: '86400s' },
            }),
            mail_module_1.MailModule
        ],
        controllers: [client_controller_1.ClientController],
        providers: [
            client_service_1.ClientService,
            passport_client_strategy_1.JwtClientStrategy
        ],
        exports: [
            client_service_1.ClientService
        ]
    })
], ClientModule);
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map