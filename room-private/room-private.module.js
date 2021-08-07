"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomPrivateModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_module_1 = require("../users/client/client.module");
const model_module_1 = require("../users/model/model.module");
const room_private_entity_1 = require("./entities/room-private.entity");
const room_private_controller_1 = require("./room-private.controller");
const room_private_service_1 = require("./room-private.service");
const profile_module_1 = require("../profil/profile.module");
let RoomPrivateModule = class RoomPrivateModule {
};
RoomPrivateModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([room_private_entity_1.RoomPrivateEntity]),
            model_module_1.ModelModule,
            client_module_1.ClientModule,
            profile_module_1.ProfileModule
        ],
        controllers: [room_private_controller_1.RoomPrivateController],
        providers: [room_private_service_1.RoomPrivateService],
        exports: [
            room_private_service_1.RoomPrivateService
        ]
    })
], RoomPrivateModule);
exports.RoomPrivateModule = RoomPrivateModule;
//# sourceMappingURL=room-private.module.js.map