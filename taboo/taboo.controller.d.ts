import { TabooService } from './taboo.service';
import { TabooDto } from './dto/taboo.dto';
export declare class TabooController {
    private tabooService;
    constructor(tabooService: TabooService);
    getTaboo(): Promise<import("./entities/taboo.entity").TabooEntity[]>;
    addTaboo(taboo: TabooDto): Promise<TabooDto & import("./entities/taboo.entity").TabooEntity>;
    deleteTaboo(id: any): Promise<import("typeorm").DeleteResult>;
}
