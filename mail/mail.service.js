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
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const URL = 'https://143.198.109.141/tech';
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async confirmRegisterClient(emailClient, pseudoClient, token) {
        const url = `${URL}/client/register/confirm?token=${token}`;
        await this.mailerService.sendMail({
            to: emailClient,
            subject: 'BetweenUs - Confirmer votre email',
            template: './confirmationClient',
            context: {
                name: pseudoClient,
                url,
            }
        });
        return {
            success: true
        };
    }
    async forgotPassClient(emailClient, pseudoClient, token) {
        const url = `${URL}/reinitialisation?token=${token}`;
        await this.mailerService.sendMail({
            to: emailClient,
            subject: 'BetweenUs - Mot de passe oublié',
            template: './forgot',
            context: {
                name: pseudoClient,
                url,
            }
        });
        return {
            success: true
        };
    }
    async confirmRegisterModel(emailClient, pseudoClient, token) {
        const url = `${URL}/client/register/confirm?token=${token}`;
        await this.mailerService.sendMail({
            to: emailClient,
            subject: 'BetweenUs - Inscription nouveau modèle',
            template: './inscriptionModel',
            context: {
                name: pseudoClient
            }
        });
        return {
            success: true
        };
    }
    async deactivateAccount(emailClient, pseudoClient, token) {
        const url = `${URL}/client/reactivation/account?token=${token}`;
        await this.mailerService.sendMail({
            to: emailClient,
            subject: 'BetweenUs - Désactivation de compte',
            template: './desactivationAccount',
            context: {
                name: pseudoClient,
                url
            }
        });
        return {
            success: true
        };
    }
    async deleteAccount(emailClient, pseudoClient, token) {
        await this.mailerService.sendMail({
            to: emailClient,
            subject: 'BetweenUs - Suppression de compte',
            template: './suppressionAccount',
            context: {
                name: pseudoClient
            }
        });
        return {
            success: true
        };
    }
};
MailService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map