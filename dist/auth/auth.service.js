"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.users = [
            { email: 'hospital_manager@xyz.com', password: 'Password@2025', role: 'manager' },
            { email: 'hospital_pantry@xyz.com', password: 'Password@2025', role: 'pantry' },
            { email: 'hospital_delivery@xyz.com', password: 'Password@2025', role: 'delivery' },
        ];
    }
    async login({ email, password }) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (!user)
            throw new common_1.UnauthorizedException('Invalid credentials');
        return { accessToken: this.jwtService.sign({ email, role: user.role }) };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;
