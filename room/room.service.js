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
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const model_service_1 = require("../users/model/model.service");
const typeorm_2 = require("typeorm");
const room_entity_1 = require("./entities/room.entity");
const client_service_1 = require("../users/client/client.service");
let RoomService = class RoomService {
    constructor(roomRepository, modelService, clientService) {
        this.roomRepository = roomRepository;
        this.modelService = modelService;
        this.clientService = clientService;
    }
    getColorCode() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return {
            color
        };
    }
    async createRoom(model) {
        const newRoom = await this.roomRepository.create({ actif: 0 });
        newRoom.model = model;
        const room = await this.roomRepository.save(newRoom);
        await (await this.roomRepository.find({ model })).forEach(async (room) => {
            if (room.actif > 0) {
                room.actif = 0;
                const id = room.id;
                const newRoom = await this.roomRepository.preload(Object.assign({ id }, room));
                await this.roomRepository.save(newRoom);
            }
        });
        return {
            room: room.id
        };
    }
    async getLastRoom(id) {
        const model = await this.modelService.getModel(id);
        if (!model)
            return null;
        const rooms = await (await this.roomRepository.find({ model })).sort((obj1, obj2) => {
            if (obj1.id > obj2.id) {
                return 1;
            }
            if (obj1.id < obj2.id) {
                return -1;
            }
            return 0;
        });
        const result = rooms[rooms.length - 1];
        return {
            idRoom: result.id,
            actif: result.actif
        };
    }
    async getInfoClient(id) {
        return await this.clientService.getInfo(id);
    }
    async updateActif(idRoom, upgrade) {
        const id = parseInt(idRoom);
        const room = await this.roomRepository.findOne({ id });
        if (!room) {
            return false;
        }
        const actif = room.actif;
        const result = upgrade ? actif + 1 : actif - 1;
        const updateRoom = {
            actif: result < 2 ? 1 : result
        };
        const newRoom = await this.roomRepository.preload(Object.assign({ id }, updateRoom));
        return await (await this.roomRepository.save(newRoom)).actif;
    }
    async getRoom(id) {
        return await this.roomRepository.findOne({ id });
    }
};
RoomService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(room_entity_1.RoomEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        model_service_1.ModelService,
        client_service_1.ClientService])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map