import { Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { UserPayloadInterface } from 'src/users/interfaces/user-payload.interface';
import { ModelEntity } from '../entities/model.entity';
import { ClientEntity } from '../../client/entities/client.entity';
declare const JwtModelStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtModelStrategy extends JwtModelStrategy_base {
    private modelRepository;
    private clientRepository;
    constructor(modelRepository: Repository<ModelEntity>, clientRepository: Repository<ClientEntity>);
    validate(payload: UserPayloadInterface): Promise<any>;
}
export {};
