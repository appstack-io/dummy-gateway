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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postToUnaryPublic = exports.postToUnary = void 0;
const clientLib = __importStar(require("../combined"));
async function postToUnary(serviceName, methodName, data, metadata) {
    const definition = clientLib[`${serviceName}Definition`];
    const host = serviceName.toLowerCase().replace('service', '');
    const client = this.clientService.getClient(definition, {
        host,
        port: process.env.ASIO_MS_PRIVATE_PORT,
    });
    const result = await client[methodName](data, { metadata });
    return result;
}
exports.postToUnary = postToUnary;
async function postToUnaryPublic(serviceName, methodName, data, metadata) {
    const definition = clientLib[`${serviceName}Definition`];
    const host = serviceName.toLowerCase().replace('service', '');
    const client = this.clientService.getClient(definition, {
        host,
        port: process.env.ASIO_MS_PUBLIC_PORT,
    });
    const result = await client[methodName](data, { metadata });
    return result;
}
exports.postToUnaryPublic = postToUnaryPublic;
//# sourceMappingURL=utils.js.map