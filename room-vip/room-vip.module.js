"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomVipModule = void 0;
const common_1 = require("@nestjs/common");
const room_vip_controller_1 = require("./room-vip.controller");
const room_vip_service_1 = require("./room-vip.service");
const room_vip_entity_1 = require("./entities/room-vip.entity");
const typeorm_1 = require("@nestjs/typeorm");
const client_module_1 = require("../users/client/client.module");
const model_module_1 = require("../users/model/model.module");
const profile_module_1 = require("../profil/profile.module");
let RoomVipModule = class RoomVipModule {
};
RoomVipModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([room_vip_entity_1.RoomVipEntity]),
            model_module_1.ModelModule,
            client_module_1.ClientModule,
            profile_module_1.ProfileModule
        ],
        controllers: [room_vip_controller_1.RoomVipController],
        providers: [room_vip_service_1.RoomVipService],
        exports: [
            room_vip_service_1.RoomVipService
        ]
    })
], RoomVipModule);
exports.RoomVipModule = RoomVipModule;
//# sourceMappingURL=room-vip.module.js.map