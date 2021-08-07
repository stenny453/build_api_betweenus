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
exports.RoomVipController = void 0;
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../decorators/user.decorator");
const model_auth_guard_1 = require("../users/model/guards/model-auth.guard");
const room_vip_service_1 = require("./room-vip.service");
let RoomVipController = class RoomVipController {
    constructor(roomVipService) {
        this.roomVipService = roomVipService;
    }
    getColor() {
        return this.roomVipService.getColorCode();
    }
    async getInfoClient(id) {
        return this.roomVipService.getInfoClient(id);
    }
    getRoomModel(id) {
        return this.roomVipService.getLastRoom(id);
    }
    createRoom(model, data) {
        let id = 0;
        if (data.clientId) {
            id = parseInt(data.clientId);
        }
        console.log(model);
        console.log(id);
        return this.roomVipService.createRoom(model, id);
    }
    async getGain(id) {
        return await this.roomVipService.getGain(id);
    }
    async getRoom(id) {
        return this.roomVipService.getRoom(id);
    }
};
__decorate([
    common_1.Get('color'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoomVipController.prototype, "getColor", null);
__decorate([
    common_1.Get('client/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoomVipController.prototype, "getInfoClient", null);
__decorate([
    common_1.Get('model/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RoomVipController.prototype, "getRoomModel", null);
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post(''),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RoomVipController.prototype, "createRoom", null);
__decorate([
    common_1.Get('gain/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoomVipController.prototype, "getGain", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoomVipController.prototype, "getRoom", null);
RoomVipController = __decorate([
    common_1.Controller('room-vip'),
    __metadata("design:paramtypes", [room_vip_service_1.RoomVipService])
], RoomVipController);
exports.RoomVipController = RoomVipController;
//# sourceMappingURL=room-vip.controller.js.map