import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { ObjectId } from 'mongoose';
import { loginUserDto } from 'src/users/dto/loginUser.dto';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) { }
  async create(userID: string, userEmail: string) {
    const payload = { sub: userID, username: userEmail };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
