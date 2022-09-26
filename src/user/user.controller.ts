import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { LoggingInterceptor } from '@common/interceptors';

@UseInterceptors(LoggingInterceptor)
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Get('')
  getAll() {
    return this.userService.getAll();
  }
}
