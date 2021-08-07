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
exports.TabooController = void 0;
const common_1 = require("@nestjs/common");
const taboo_service_1 = require("./taboo.service");
const taboo_dto_1 = require("./dto/taboo.dto");
const user_decorator_1 = require("../decorators/user.decorator");
const model_auth_guard_1 = require("../users/model/guards/model-auth.guard");
let TabooController = class TabooController {
    constructor(tabooService) {
        this.tabooService = tabooService;
    }
    async getTaboo() {
        return this.tabooService.getTaboo();
    }
    async addTaboo(taboo) {
        return this.tabooService.addTaboo(taboo);
    }
    async deleteTaboo(id) {
        return this.tabooService.deleteTaboo(id);
    }
};
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TabooController.prototype, "getTaboo", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [taboo_dto_1.TabooDto]),
    __metadata("design:returntype", Promise)
], TabooController.prototype, "addTaboo", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TabooController.prototype, "deleteTaboo", null);
TabooController = __decorate([
    common_1.Controller('taboo'),
    __metadata("design:paramtypes", [taboo_service_1.TabooService])
], TabooController);
exports.TabooController = TabooController;
//# sourceMappingURL=taboo.controller.js.map