"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionService = void 0;
const utils_1 = require("./utils");
const nice_grpc_1 = require("nice-grpc");
class PermissionService {
    constructor() {
        this.serviceName = "PermissionService";
    }
    async createOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'createOne', data, metadata);
    }
    async createOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'createOne', data, metadata);
    }
    async createMany(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'createMany', data, metadata);
    }
    async createManyPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'createMany', data, metadata);
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
    async findWhereMany(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'findWhereMany', data, metadata);
    }
    async findWhereManyPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'findWhereMany', data, metadata);
    }
    async findWhereOrStar(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'findWhereOrStar', data, metadata);
    }
    async findWhereOrStarPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'findWhereOrStar', data, metadata);
    }
    async findByPermitted(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'findByPermitted', data, metadata);
    }
    async findByPermittedPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'findByPermitted', data, metadata);
    }
    async findByEntity(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'findByEntity', data, metadata);
    }
    async findByEntityPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'findByEntity', data, metadata);
    }
    async findAllActions(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'findAllActions', data, metadata);
    }
    async findAllActionsPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'findAllActions', data, metadata);
    }
    async validateOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'validateOne', data, metadata);
    }
    async validateOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'validateOne', data, metadata);
    }
    async removeOne(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'removeOne', data, metadata);
    }
    async removeOnePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'removeOne', data, metadata);
    }
    async removeWhere(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'removeWhere', data, metadata);
    }
    async removeWherePublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'removeWhere', data, metadata);
    }
    async removeWhereMany(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'removeWhereMany', data, metadata);
    }
    async removeWhereManyPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'removeWhereMany', data, metadata);
    }
    async removeAllActions(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnary)(this.serviceName, 'removeAllActions', data, metadata);
    }
    async removeAllActionsPublic(data, metadata = new nice_grpc_1.Metadata()) {
        return (0, utils_1.postToUnaryPublic)(this.serviceName, 'removeAllActions', data, metadata);
    }
}
exports.PermissionService = PermissionService;
//# sourceMappingURL=PermissionService.js.map