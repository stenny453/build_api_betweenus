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
exports.ActifRoomPrivateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const model_service_1 = require("../users/model/model.service");
const typeorm_2 = require("typeorm");
const actif_room_private_entity_1 = require("./entities/actif-room-private.entity");
const room_private_service_1 = require("../room-private/room-private.service");
const client_service_1 = require("../users/client/client.service");
const album_model_enum_1 = require("../enums/album-model.enum");
let ActifRoomPrivateService = class ActifRoomPrivateService {
    constructor(actifRoomPrivateRepository, roomPrivateService, clientService) {
        this.actifRoomPrivateRepository = actifRoomPrivateRepository;
        this.roomPrivateService = roomPrivateService;
        this.clientService = clientService;
    }
    async updateActif(user, data) {
        let room = null;
        const client = await this.clientService.getInfos(user);
        if (data.type_room === album_model_enum_1.AlbumModelEnum.PRIVATE) {
            room = await this.roomPrivateService.getRoom(data.roomId);
        }
        const actifRoom = await this.actifRoomPrivateRepository.findOne({
            client: client,
            roomPrivate: room,
            type_room: data.type_room
        });
        if (!data.joined && actifRoom) {
            return await this.actifRoomPrivateRepository.delete({
                client: client, roomPrivate: room, type_room: data.type_room
            });
        }
        else if (data.joined && !actifRoom) {
            const newActif = await this.actifRoomPrivateRepository.create();
            newActif.client = client;
            newActif.roomPrivate = room;
            newActif.type_room = data.type_room;
            return await this.actifRoomPrivateRepository.save(newActif);
        }
        else {
            return null;
        }
    }
};
ActifRoomPrivateService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(actif_room_private_entity_1.ActifRoomPrivateEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        room_private_service_1.RoomPrivateService,
        client_service_1.ClientService])
], ActifRoomPrivateService);
exports.ActifRoomPrivateService = ActifRoomPrivateService;
//# sourceMappingURL=actif-room-private.service.js.map