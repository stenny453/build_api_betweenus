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
exports.ActifRoomPrivateController = void 0;
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../decorators/user.decorator");
const actif_room_private_service_1 = require("./actif-room-private.service");
const client_entity_1 = require("../users/client/entities/client.entity");
const add_actif_dto_1 = require("./dto/add-actif.dto");
const model_auth_guard_1 = require("../users/model/guards/model-auth.guard");
let ActifRoomPrivateController = class ActifRoomPrivateController {
    constructor(actifRoomPrivateService) {
        this.actifRoomPrivateService = actifRoomPrivateService;
    }
    async updateActif(user, data) {
        return await this.actifRoomPrivateService.updateActif(user, data);
    }
};
__decorate([
    common_1.UseGuards(model_auth_guard_1.ModelAuthGuard),
    common_1.Post(),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_entity_1.ClientEntity,
        add_actif_dto_1.AddActifDto]),
    __metadata("design:returntype", Promise)
], ActifRoomPrivateController.prototype, "updateActif", null);
ActifRoomPrivateController = __decorate([
    common_1.Controller('actif-room-private'),
    __metadata("design:paramtypes", [actif_room_private_service_1.ActifRoomPrivateService])
], ActifRoomPrivateController);
exports.ActifRoomPrivateController = ActifRoomPrivateController;
//# sourceMappingURL=actif-room-private.controller.js.map