"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFollowService = void 0;
const utils_1 = require("./utils");
const nice_grpc_1 = require("nice-grpc");
class UserFollowService {
    constructor() {
        this.serviceName = "UserFollowService";
    }
    async createOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'createOne', data, metadata);
    }
    async createOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'createOne', data, metadata);
    }
    async removeOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'removeOne', data, metadata);
    }
    async removeOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'removeOne', data, metadata);
    }
    async findFollowers(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'findFollowers', data, metadata);
    }
    async findFollowersPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'findFollowers', data, metadata);
    }
    async findFollowees(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'findFollowees', data, metadata);
    }
    async findFolloweesPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'findFollowees', data, metadata);
    }
}
exports.UserFollowService = UserFollowService;
//# sourceMappingURL=UserFollowService.js.map