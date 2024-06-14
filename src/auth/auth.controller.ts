import { Controller, Body, Post, ValidationPipe, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBadRequestResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { loginUserDto } from '../users/dto/loginUser.dto';
import { UsersService } from 'src/users/users.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private usersService: UsersService,
  ) { }

  @Post("")
  @ApiOkResponse()
  @ApiBadRequestResponse()
  async createToken(@Body(new ValidationPipe()) loginUserDto: loginUserDto) {
    try {
      const userID = await this.usersService.login(loginUserDto)
      return this.authService.create(userID, loginUserDto.email);
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
