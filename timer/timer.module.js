"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerModule = void 0;
const common_1 = require("@nestjs/common");
const timer_controller_1 = require("./timer.controller");
const timer_service_1 = require("./timer.service");
const timer_entity_1 = require("./entities/timer.entity");
const typeorm_1 = require("@nestjs/typeorm");
const client_module_1 = require("../users/client/client.module");
const model_module_1 = require("../users/model/model.module");
const credit_module_1 = require("../credit/credit.module");
const room_vip_module_1 = require("../room-vip/room-vip.module");
const room_private_module_1 = require("../room-private/room-private.module");
let TimerModule = class TimerModule {
};
TimerModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([timer_entity_1.TimerEntity]),
            client_module_1.ClientModule,
            model_module_1.ModelModule,
            credit_module_1.CreditModule,
            room_vip_module_1.RoomVipModule,
            room_private_module_1.RoomPrivateModule
        ],
        controllers: [timer_controller_1.TimerController],
        providers: [timer_service_1.TimerService]
    })
], TimerModule);
exports.TimerModule = TimerModule;
//# sourceMappingURL=timer.module.js.map