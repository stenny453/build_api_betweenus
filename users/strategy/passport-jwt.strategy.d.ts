import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { UserPayloadInterface } from 'src/users/interfaces/user-payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userRepository;
    constructor(configService: ConfigService, userRepository: Repository<UserEntity>);
    validate(payload: UserPayloadInterface): Promise<any>;
}
export {};
