import { Repository } from 'typeorm';
import { ChatEntity } from './entities/chat.entity';
import { AddChatDto } from './dto/add-chat.dto';
import { TabooService } from '../taboo/taboo.service';
export declare class ChatService {
    private chatRepository;
    private tabooService;
    constructor(chatRepository: Repository<ChatEntity>, tabooService: TabooService);
    postChat(chat: AddChatDto): Promise<any>;
    getChat(idRoom: number, type_chat?: string): Promise<any>;
}
