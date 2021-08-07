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
exports.TimerService = void 0;
const room_vip_service_1 = require("./../room-vip/room-vip.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const timer_entity_1 = require("./entities/timer.entity");
const model_service_1 = require("../users/model/model.service");
const credit_service_1 = require("../credit/credit.service");
const room_private_service_1 = require("../room-private/room-private.service");
let TimerService = class TimerService {
    constructor(timerRepository, modelService, creditService, roomPrivateService, roomVipService) {
        this.timerRepository = timerRepository;
        this.modelService = modelService;
        this.creditService = creditService;
        this.roomPrivateService = roomPrivateService;
        this.roomVipService = roomVipService;
    }
    async createTimer(client, data) {
        const newTimer = await this.timerRepository.create();
        const model = await this.modelService.getModel(data.modelId);
        newTimer.client = client;
        newTimer.type = data.type;
        newTimer.model = model;
        return await this.timerRepository.save(newTimer);
    }
    async createTimerModel(model, data) {
        const newTimer = await this.timerRepository.create();
        const newModel = await this.modelService.getModel(data.modelId);
        newTimer.type = data.type;
        newTimer.model = newModel;
        return await this.timerRepository.save(newTimer);
    }
    async updateTimer(data) {
        const id = data.id;
        const timer = data;
        timer.push = new Date().toString();
        const newTimer = await this.timerRepository.preload(Object.assign({ id }, timer));
        return await this.timerRepository.save(newTimer);
    }
    async getTimer(client, data) {
        const timers = await this.timerRepository.find({ client });
        if (!timers || timers.length == 0) {
            return await this.createTimer(client, data);
        }
        const timer = timers[timers.length - 1];
        if (timer.client.id == client.id && timer.leaved == false
            && timer.model && timer.model.id == data.modelId && timer.type === data.type) {
            const up = {
                id: timer.id,
                type: timer.type,
                leaved: timer.leaved,
                push: new Date().toString(),
                lastUpdated: timer.lastUpdated
            };
            return await this.updateTimer(up);
        }
        else {
            return await this.createTimer(client, data);
        }
    }
    async beginTimerModel(model, data) {
        const timers = await this.timerRepository.find({ model });
        if (!timers || timers.length == 0) {
            return await this.createTimerModel(model, data);
        }
        const timer = timers[timers.length - 1];
        if (timer.model && timer.model.id == model.id && timer.leaved == false && timer.type == data.type) {
            const up = {
                id: timer.id,
                type: timer.type,
                leaved: timer.leaved,
                push: new Date().toString(),
                lastUpdated: timer.lastUpdated
            };
            return await this.updateTimer(up);
        }
        else {
            return await this.createTimerModel(model, data);
        }
    }
    async creditTimer(client, data) {
        const model = await this.modelService.getModel(data.modelId);
        const timer = await this.timerRepository.findOne({ id: data.timerId });
        let creditClient = 0;
        let creditClientId = null;
        let creditModel = 0;
        let creditModelId = null;
        let creditTransaction = 0;
        await this.creditService.getCreditClient(client).then((data) => {
            console.log("credit client ", data);
            creditClient = data.credit ? data.credit : 0;
            creditClientId = data.id ? data.id : null;
        });
        await this.creditService.getCreditModel(model).then((data) => {
            console.log("credit model ", data);
            creditModel = data.credit ? data.credit : 0;
            creditModelId = data.id ? data.id : null;
        });
        const dateNow = new Date();
        const datePast = timer.lastUpdated ? timer.lastUpdated : dateNow;
        console.log(dateNow);
        console.log(datePast);
        const seconds = this.getSteps(datePast.toString(), dateNow.toString());
        console.log("Second ", seconds);
        creditTransaction = (data.showCredit * seconds) / data.showSecond;
        creditTransaction = Math.floor(creditTransaction);
        if (data.showType === 'vip') {
            await this.roomVipService.updateGain(data.roomId, creditTransaction);
        }
        else if (data.showType === 'private') {
            await this.roomPrivateService.updateGain(data.roomId, creditTransaction);
        }
        let newCreditClient = creditClient - creditTransaction;
        newCreditClient = newCreditClient < 0 ? 0 : newCreditClient;
        let newCreditModel = creditModel + creditTransaction;
        const updatedCreditClient = await this.creditService.updateCredit(creditClientId, { credit: newCreditClient }, client);
        await this.creditService.updateCredit(creditModelId, { credit: newCreditModel }, model);
        const newTimer = {
            id: data.timerId,
            type: data.showType,
            leaved: false,
            push: new Date().toString(),
            lastUpdated: dateNow
        };
        await this.updateTimer(newTimer);
        return updatedCreditClient;
    }
    getSteps(created, updated) {
        let step = 0;
        let hourCreated = parseInt(created.substring(16, 18));
        let hourUpdated = parseInt(updated.substring(16, 18));
        let minCreated = parseInt(created.substring(19, 21));
        let minUpdated = parseInt(updated.substring(19, 21));
        let secCreated = parseInt(created.substring(22, 24));
        let secUpdated = parseInt(updated.substring(22, 24));
        while (hourCreated < hourUpdated) {
            secCreated++;
            if (secCreated > 60) {
                minCreated++;
                secCreated = 0;
            }
            if (minCreated > 60) {
                hourCreated++;
                minCreated = 0;
            }
            step++;
        }
        while (minCreated < minUpdated) {
            secCreated++;
            if (secCreated > 60) {
                minCreated++;
                secCreated = 0;
            }
            step++;
        }
        while (secCreated < secUpdated) {
            secCreated++;
            step++;
        }
        return step;
    }
};
TimerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(timer_entity_1.TimerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        model_service_1.ModelService,
        credit_service_1.CreditService,
        room_private_service_1.RoomPrivateService,
        room_vip_service_1.RoomVipService])
], TimerService);
exports.TimerService = TimerService;
//# sourceMappingURL=timer.service.js.map