import { NestMiddleware } from '@nestjs/common';
import * as cors from 'cors';
export declare class CorsMiddleware implements NestMiddleware {
    static configure(opts: cors.CorsOptions): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
