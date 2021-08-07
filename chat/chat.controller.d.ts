import { ChatService } from './chat.service';
import { AddChatDto } from './dto/add-chat.dto';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    postMessage(message: AddChatDto): Promise<any>;
    getMessage(type: any, id: any): Promise<any>;
}
