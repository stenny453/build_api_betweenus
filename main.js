"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const fs = require("fs");
async function bootstrap() {
    const privateKey = fs.readFileSync(path_1.join(__dirname, './cert', 'key.pem'));
    const certificate = fs.readFileSync(path_1.join(__dirname, './cert', 'cert.pem'));
    const httpsOptions = { key: privateKey, cert: certificate };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true, httpsOptions });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true
    }));
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('APP_PORT');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map