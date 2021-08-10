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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const room_service_1 = require("./room/room.service");
const model_service_1 = require("./users/model/model.service");
const room_private_service_1 = require("./room-private/room-private.service");
const room_vip_service_1 = require("./room-vip/room-vip.service");
let AppGateway = class AppGateway {
    constructor(roomService, roomPrivateService, roomVipService, modelService) {
        this.roomService = roomService;
        this.roomPrivateService = roomPrivateService;
        this.roomVipService = roomVipService;
        this.modelService = modelService;
        this.logger = new common_1.Logger('AppGateway');
    }
    afterInit(server) {
        this.logger.log('Initialized');
    }
    handleDisconnect(client) {
        this.logger.log(`Disconnected ${client.handshake.address}`);
    }
    handleConnection(client, ...args) {
        this.logger.log(`Connected ${client.handshake.address}`);
    }
    async handleJoinRoom(client, data) {
        client.join(data.room);
        switch (data.show) {
            case 'free':
                await this.joinFree(data.room);
                break;
            case 'private':
                await this.joinPrivate(data.room, data.clientId, data.clientPseudo);
                break;
            case 'vip':
                await this.joinVip(data.room);
                break;
            default:
                break;
        }
    }
    async handleLeaveRoom(client, data) {
        client.leave(data.room);
        switch (data.show) {
            case 'free':
                await this.leaveFree(data.room, data.role);
                break;
            case 'private':
                await this.leavePrivate(data.room, data.role);
                break;
            case 'vip':
                await this.leaveVip(data.room, data.role);
                break;
            default:
                break;
        }
    }
    handleMessage(client, data) {
        this.server.emit(`message ${data.room}`, data.message);
    }
    async handlePassToPrivate(client, data) {
        this.server.emit(`Pass to private ${data.room}`, data);
        this.leaveFree(data.room, '');
    }
    async handlePassToVIP(client, data) {
        this.server.emit(`Pass to VIP ${data.room}`, data);
        this.leaveFree(data.room, '');
    }
    async handleInvitationVIP(client, data) {
        this.server.emit(`pass VIP ${data.clientId} ${data.room}`, data);
    }
    async joinFree(room) {
        return await this.roomService.updateActif(room, true).then((back) => {
            this.server.emit(`joined ${room}`, back);
        });
    }
    async joinPrivate(room, clientId, clientPseudo) {
        return await this.roomPrivateService.updateActif(room, true).then((actif) => {
            const data = {
                actif: actif,
                id: clientId,
                pseudo: clientPseudo
            };
            this.server.emit(`joined ${room}`, data);
        });
    }
    async joinVip(room) {
        return await this.roomVipService.updateActif(room, true).then((actif) => {
            this.server.emit(`joined ${room}`, actif);
        });
    }
    async leaveFree(room, role) {
        await this.roomService.updateActif(room, false).then((back) => {
            this.server.emit(`leaved ${room}`, back);
            if (role === 'model') {
                this.server.emit(`model leaved ${room}`, back);
            }
        });
    }
    async leavePrivate(room, role) {
        await this.roomPrivateService.updateActif(room, false).then((back) => {
            this.server.emit(`leaved ${room}`, back);
            if (role === 'model') {
                this.server.emit(`model leaved ${room}`, back);
            }
        });
    }
    async leaveVip(room, role) {
        await this.roomVipService.updateActif(room, false).then((back) => {
            this.server.emit(`leaved ${room}`, back);
            if (role === 'model') {
                this.server.emit(`model leaved ${room}`, back);
            }
        });
    }
    async handlePeerId(client, data) {
        this.server.emit(`peerId ${data.room}`, data);
    }
    async handleAskPeerId(client, data) {
        this.server.emit(`ask peerId ${data.room}`, data);
    }
    async handleAnsPeerId(client, data) {
        this.server.emit(`ans peerId ${data.clientId} ${data.room}`, data);
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", socket_io_1.Server)
], AppGateway.prototype, "server", void 0);
__decorate([
    websockets_1.SubscribeMessage('join'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "handleJoinRoom", null);
__decorate([
    websockets_1.SubscribeMessage('leave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "handleLeaveRoom", null);
__decorate([
    websockets_1.SubscribeMessage('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "handleMessage", null);
__decorate([
    websockets_1.SubscribeMessage('Pass to private'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "handlePassToPrivate", null);
__decorate([
    websockets_1.SubscribeMessage('Pass to VIP'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "handlePassToVIP", null);
__decorate([
    websockets_1.SubscribeMessage('Invitation to VIP'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "handleInvitationVIP", null);
__decorate([
    websockets_1.SubscribeMessage('peerId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "handlePeerId", null);
__decorate([
    websockets_1.SubscribeMessage('ask peerId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "handleAskPeerId", null);
__decorate([
    websockets_1.SubscribeMessage('ans peerId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], AppGateway.prototype, "handleAnsPeerId", null);
AppGateway = __decorate([
    websockets_1.WebSocketGateway(4000, { path: '/socket' }),
    __metadata("design:paramtypes", [room_service_1.RoomService,
        room_private_service_1.RoomPrivateService,
        room_vip_service_1.RoomVipService,
        model_service_1.ModelService])
], AppGateway);
exports.AppGateway = AppGateway;
//# sourceMappingURL=app.gateway.js.map