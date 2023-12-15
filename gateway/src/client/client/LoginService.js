"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const utils_1 = require("./utils");
const nice_grpc_1 = require("nice-grpc");
class LoginService {
    constructor() {
        this.serviceName = "LoginService";
    }
    async createOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'createOne', data, metadata);
    }
    async createOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'createOne', data, metadata);
    }
    async findOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'findOne', data, metadata);
    }
    async findOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'findOne', data, metadata);
    }
    async findWhere(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'findWhere', data, metadata);
    }
    async findWherePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'findWhere', data, metadata);
    }
    async findByPlatformId(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'findByPlatformId', data, metadata);
    }
    async findByPlatformIdPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'findByPlatformId', data, metadata);
    }
    async updateOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'updateOne', data, metadata);
    }
    async updateOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'updateOne', data, metadata);
    }
    async removeOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'removeOne', data, metadata);
    }
    async removeOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'removeOne', data, metadata);
    }
}
exports.LoginService = LoginService;
//# sourceMappingURL=LoginService.js.map