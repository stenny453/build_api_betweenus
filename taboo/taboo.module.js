"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabooModule = void 0;
const common_1 = require("@nestjs/common");
const taboo_controller_1 = require("./taboo.controller");
const taboo_service_1 = require("./taboo.service");
const taboo_entity_1 = require("./entities/taboo.entity");
const typeorm_1 = require("@nestjs/typeorm");
const client_module_1 = require("../users/client/client.module");
const model_module_1 = require("../users/model/model.module");
let TabooModule = class TabooModule {
};
TabooModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([taboo_entity_1.TabooEntity]),
            client_module_1.ClientModule,
            model_module_1.ModelModule
        ],
        controllers: [taboo_controller_1.TabooController],
        providers: [taboo_service_1.TabooService],
        exports: [
            taboo_service_1.TabooService
        ]
    })
], TabooModule);
exports.TabooModule = TabooModule;
//# sourceMappingURL=taboo.module.js.map