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
exports.TimerController = void 0;
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../decorators/user.decorator");
const timer_service_1 = require("./timer.service");
const model_auth_guard_1 = require("../users/model/guards/model-auth.guard");
const add_timer_dto_1 = require("./dto/add-timer.dto");
const credit_timer_dto_1 = require("./dto/credit-timer.dto");
let TimerController = class TimerController {
    constructor(timerService) {
        this.timerService = timerService;
    }
    async getTimer(client, data) {
        return await this.timerService.getTimer(client, data);
    }
    async beginTimerModel(model, data) {
        return await this.timerService.beginTimerModel(model, data);
    }
    async updateTimer(client, data) {
        console.log('Update ', data);
        return await this.timerService.updateTimer(data);
    }
    async creditTimer(client, data) {
        return await this.timerService.creditTimer(client, data);
    }
};
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post(),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, add_timer_dto_1.AddTimerDto]),
    __metadata("design:returntype", Promise)
], TimerController.prototype, "getTimer", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post('beginTimerModel'),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, add_timer_dto_1.AddTimerDto]),
    __metadata("design:returntype", Promise)
], TimerController.prototype, "beginTimerModel", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post('update'),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TimerController.prototype, "updateTimer", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post('credit'),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, credit_timer_dto_1.CreditTimerDto]),
    __metadata("design:returntype", Promise)
], TimerController.prototype, "creditTimer", null);
TimerController = __decorate([
    common_1.Controller('timer'),
    __metadata("design:paramtypes", [timer_service_1.TimerService])
], TimerController);
exports.TimerController = TimerController;
//# sourceMappingURL=timer.controller.js.map