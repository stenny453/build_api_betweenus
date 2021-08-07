import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private configService;
    constructor(appService: AppService, configService: ConfigService);
    getHello(): string;
    uploadFiles(files: any): {
        path_recto: string;
        path_verso: string;
        path_cin: string;
        path_soft: string;
    };
    uploadAlbums(files: any): {
        paths: string[];
    };
    updateProfile(file: any): {
        path: string;
    };
}
