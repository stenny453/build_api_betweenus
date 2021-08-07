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
exports.AddChatDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AddChatDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], AddChatDto.prototype, "idRoom", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddChatDto.prototype, "message", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddChatDto.prototype, "type_source", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddChatDto.prototype, "type_chat", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], AddChatDto.prototype, "id_source", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddChatDto.prototype, "code_couleur", void 0);
exports.AddChatDto = AddChatDto;
//# sourceMappingURL=add-chat.dto.js.map