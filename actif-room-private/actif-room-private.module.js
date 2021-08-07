"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActifRoomPrivateModule = void 0;
const common_1 = require("@nestjs/common");
const model_module_1 = require("../users/model/model.module");
const actif_room_private_controller_1 = require("./actif-room-private.controller");
const actif_room_private_service_1 = require("./actif-room-private.service");
const client_module_1 = require("../users/client/client.module");
const typeorm_1 = require("@nestjs/typeorm");
const actif_room_private_entity_1 = require("./entities/actif-room-private.entity");
const room_private_module_1 = require("../room-private/room-private.module");
const room_module_1 = require("../room/room.module");
const room_vip_module_1 = require("../room-vip/room-vip.module");
let ActifRoomPrivateModule = class ActifRoomPrivateModule {
};
ActifRoomPrivateModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([actif_room_private_entity_1.ActifRoomPrivateEntity]),
            model_module_1.ModelModule,
            client_module_1.ClientModule,
            room_private_module_1.RoomPrivateModule,
            room_module_1.RoomModule,
            room_vip_module_1.RoomVipModule
        ],
        controllers: [actif_room_private_controller_1.ActifRoomPrivateController],
        providers: [actif_room_private_service_1.ActifRoomPrivateService],
        exports: [
            actif_room_private_service_1.ActifRoomPrivateService
        ]
    })
], ActifRoomPrivateModule);
exports.ActifRoomPrivateModule = ActifRoomPrivateModule;
//# sourceMappingURL=actif-room-private.module.js.map