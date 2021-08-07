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
exports.LogController = void 0;
const common_1 = require("@nestjs/common");
const log_service_1 = require("./log.service");
const add_log_dto_1 = require("./dto/add-log.dto");
const user_decorator_1 = require("../decorators/user.decorator");
const model_auth_guard_1 = require("../users/model/guards/model-auth.guard");
let LogController = class LogController {
    constructor(logService) {
        this.logService = logService;
    }
    async addLog(log, model) {
        return await this.logService.addLog(log, model);
    }
    async getLogs(model) {
        return await this.logService.getLogs(model);
    }
};
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_log_dto_1.AddLogDto, Object]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "addLog", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Get('all'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LogController.prototype, "getLogs", null);
LogController = __decorate([
    common_1.Controller('log'),
    __metadata("design:paramtypes", [log_service_1.LogService])
], LogController);
exports.LogController = LogController;
//# sourceMappingURL=log.controller.js.map