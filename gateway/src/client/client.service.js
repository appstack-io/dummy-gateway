"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const nice_grpc_1 = require("nice-grpc");
const clientLib = __importStar(require("./combined"));
let ClientService = class ClientService {
    getClient(T, opts) {
        const channel = (0, nice_grpc_1.createChannel)(`${opts.host}:${opts.port}`);
        return (0, nice_grpc_1.createClient)(T, channel);
    }
    async invokeUnaryInernal(payload, opts) {
        const { service, method, data } = payload;
        const definition = clientLib[`${service}Definition`];
        const client = this.getClient(definition, opts);
        const result = await client[method](data);
        return result;
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)()
], ClientService);
//# sourceMappingURL=client.service.js.map