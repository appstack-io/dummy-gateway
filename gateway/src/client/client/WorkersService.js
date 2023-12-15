"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkersService = void 0;
const utils_1 = require("./utils");
const nice_grpc_1 = require("nice-grpc");
class WorkersService {
    constructor() {
        this.serviceName = "WorkersService";
    }
    async publishJob(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'publishJob', data, metadata);
    }
    async publishJobPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'publishJob', data, metadata);
    }
    async healthCheck(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'healthCheck', data, metadata);
    }
    async healthCheckPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'healthCheck', data, metadata);
    }
}
exports.WorkersService = WorkersService;
//# sourceMappingURL=WorkersService.js.map