import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    confirmRegisterClient(emailClient: string, pseudoClient: string, token: string): Promise<{
        success: boolean;
    }>;
    forgotPassClient(emailClient: string, pseudoClient: string, token: string): Promise<{
        success: boolean;
    }>;
    confirmRegisterModel(emailClient: string, pseudoClient: string, token: string): Promise<{
        success: boolean;
    }>;
    deactivateAccount(emailClient: string, pseudoClient: string, token: string): Promise<{
        success: boolean;
    }>;
    deleteAccount(emailClient: string, pseudoClient: string, token: string): Promise<{
        success: boolean;
    }>;
}
