"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const utils_1 = require("./utils");
const nice_grpc_1 = require("nice-grpc");
class UserService {
    constructor() {
        this.serviceName = "UserService";
    }
    async createOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'createOne', data, metadata);
    }
    async createOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'createOne', data, metadata);
    }
    async updateOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'updateOne', data, metadata);
    }
    async updateOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'updateOne', data, metadata);
    }
    async findOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'findOne', data, metadata);
    }
    async findOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'findOne', data, metadata);
    }
    async findMe(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'findMe', data, metadata);
    }
    async findMePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'findMe', data, metadata);
    }
    async removeOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'removeOne', data, metadata);
    }
    async removeOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'removeOne', data, metadata);
    }
    async search(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'search', data, metadata);
    }
    async searchPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'search', data, metadata);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map