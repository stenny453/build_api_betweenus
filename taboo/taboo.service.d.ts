import { Repository } from 'typeorm';
import { TabooEntity } from './entities/taboo.entity';
import { TabooDto } from './dto/taboo.dto';
export declare class TabooService {
    private tabooRepository;
    constructor(tabooRepository: Repository<TabooEntity>);
    addTaboo(taboo: TabooDto): Promise<TabooDto & TabooEntity>;
    deleteTaboo(id: number): Promise<import("typeorm").DeleteResult>;
    getTaboo(): Promise<TabooEntity[]>;
}
