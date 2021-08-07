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
exports.CreditController = void 0;
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../decorators/user.decorator");
const model_auth_guard_1 = require("../users/model/guards/model-auth.guard");
const credit_service_1 = require("./credit.service");
const credit_dto_1 = require("./dto/credit.dto");
const add_credit_client_dto_1 = require("./dto/add-credit-client.dto");
let CreditController = class CreditController {
    constructor(creditService) {
        this.creditService = creditService;
    }
    async getCredit(model) {
        return await this.creditService.getCreditModel(model);
    }
    async getCreditClient(client) {
        return await this.creditService.getCreditClient(client);
    }
    async createCredit(id) {
        return await this.creditService.createCredit(id);
    }
    async createCreditClient(id) {
        return await this.creditService.createCreditClient(id);
    }
    async buyCreditClient(data) {
        return await this.creditService.buyCreditClient(data);
    }
    async updateCredit(credit, id, model) {
        return await this.creditService.updateCredit(id, credit, model);
    }
};
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Get(),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CreditController.prototype, "getCredit", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Get('client'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CreditController.prototype, "getCreditClient", null);
__decorate([
    common_1.Post('create/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CreditController.prototype, "createCredit", null);
__decorate([
    common_1.Post('create/client/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CreditController.prototype, "createCreditClient", null);
__decorate([
    common_1.Patch('client'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_credit_client_dto_1.AddCreditClientDto]),
    __metadata("design:returntype", Promise)
], CreditController.prototype, "buyCreditClient", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Patch(':id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('id', common_1.ParseIntPipe)),
    __param(2, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [credit_dto_1.CreditDto, Object, Object]),
    __metadata("design:returntype", Promise)
], CreditController.prototype, "updateCredit", null);
CreditController = __decorate([
    common_1.Controller('credit'),
    __metadata("design:paramtypes", [credit_service_1.CreditService])
], CreditController);
exports.CreditController = CreditController;
//# sourceMappingURL=credit.controller.js.map