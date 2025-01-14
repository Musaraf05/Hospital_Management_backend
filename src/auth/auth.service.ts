import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly users = [
    { email: 'hospital_manager@xyz.com', password: 'Password@2025', role: 'manager' },
    { email: 'hospital_pantry@xyz.com', password: 'Password@2025', role: 'pantry' },
    { email: 'hospital_delivery@xyz.com', password: 'Password@2025', role: 'delivery' },
  ];

  constructor(private readonly jwtService: JwtService) {}

  async login({ email, password }: { email: string; password: string }) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    return { accessToken: this.jwtService.sign({ email, role: user.role }) };
  }
}