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
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const client_entity_1 = require("./entities/client.entity");
const client_service_1 = require("./client.service");
const client_register_dto_1 = require("./dto/client-register.dto");
const client_login_dto_1 = require("./dto/client-login.dto");
const user_decorator_1 = require("../../decorators/user.decorator");
const client_auth_guard_1 = require("./guards/client-auth.guard");
const model_auth_guard_1 = require("../model/guards/model-auth.guard");
const reinitPassword_dto_1 = require("./dto/reinitPassword.dto");
const changePseudo_dto_1 = require("./dto/changePseudo.dto");
const changePassword_dto_1 = require("./dto/changePassword.dto");
let ClientController = class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
    async getInfos(client) {
        return await this.clientService.getInfos(client);
    }
    async register(userData) {
        return await this.clientService.register(userData);
    }
    async login(credentials) {
        return await this.clientService.login(credentials);
    }
    async forgot(data) {
        return await this.clientService.forgot(data);
    }
    async reinitPassword(data) {
        return await this.clientService.reinitPassword(data);
    }
    async confirmEmail(client) {
        return await this.clientService.confirmEmail(client);
    }
    async changePseudo(client, data) {
        return await this.clientService.changePseudo(client, data);
    }
    async changePassword(client, data) {
        return await this.clientService.changePassword(client, data);
    }
    async deleteAccount(client, data) {
        return await this.clientService.deleteAccount(client, data);
    }
    async restoreAccount(client) {
        return await this.clientService.restoreAccount(client);
    }
    async deactivateAccount(client, data) {
        return await this.clientService.deactivateAccount(client, data);
    }
    async reactivateAccount(client) {
        return await this.clientService.reactivateAccount(client);
    }
    async getInfo(id) {
        return await this.clientService.getClient(id);
    }
};
__decorate([
    common_1.UseGuards(client_auth_guard_1.ClientAuthGuard),
    common_1.Get(),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getInfos", null);
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_register_dto_1.ClientRegisterDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "register", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_login_dto_1.ClientLoginDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "login", null);
__decorate([
    common_1.Post('forgot'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "forgot", null);
__decorate([
    common_1.Post('reinitPassword'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reinitPassword_dto_1.ReinitPasswordDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "reinitPassword", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post('confirm'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_entity_1.ClientEntity]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "confirmEmail", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post('changePseudo'),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_entity_1.ClientEntity,
        changePseudo_dto_1.ChangePseudoDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "changePseudo", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post('changePassword'),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_entity_1.ClientEntity,
        changePassword_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "changePassword", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post('deleteAccount'),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_entity_1.ClientEntity, Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "deleteAccount", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post('restoreAccount'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_entity_1.ClientEntity]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "restoreAccount", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post('deactivateAccount'),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_entity_1.ClientEntity, Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "deactivateAccount", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post('reactivateAccount'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_entity_1.ClientEntity]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "reactivateAccount", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getInfo", null);
ClientController = __decorate([
    common_1.Controller('client'),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map