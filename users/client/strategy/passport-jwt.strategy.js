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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtClientStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const client_entity_1 = require("../entities/client.entity");
const user_payload_interface_1 = require("../../interfaces/user-payload.interface");
const MODEL_SECRET = 'modelBetweenUs';
let JwtClientStrategy = class JwtClientStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(userRepository) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: MODEL_SECRET,
        });
        this.userRepository = userRepository;
    }
    async validate(payload) {
        const user = await this.userRepository.findOne({ pseudo: payload.pseudo });
        if (user) {
            const { password, salt } = user, result = __rest(user, ["password", "salt"]);
            return result;
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
};
JwtClientStrategy = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(client_entity_1.ClientEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JwtClientStrategy);
exports.JwtClientStrategy = JwtClientStrategy;
//# sourceMappingURL=passport-jwt.strategy.js.map
