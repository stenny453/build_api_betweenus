"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostShowModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_module_1 = require("../users/client/client.module");
const model_module_1 = require("../users/model/model.module");
const cost_show_controller_1 = require("./cost-show.controller");
const cost_show_service_1 = require("./cost-show.service");
const cost_show_entity_1 = require("./entities/cost-show.entity");
let CostShowModule = class CostShowModule {
};
CostShowModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([cost_show_entity_1.CostShowEntity]),
            model_module_1.ModelModule,
            client_module_1.ClientModule
        ],
        controllers: [cost_show_controller_1.CostShowController],
        providers: [cost_show_service_1.CostShowService]
    })
], CostShowModule);
exports.CostShowModule = CostShowModule;
//# sourceMappingURL=cost-show.module.js.map