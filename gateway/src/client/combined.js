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
exports.PermissionFindByPermittedFilter = exports.PermissionRemoveWhereManyInput = exports.PermissionRemoveWhereInput = exports.PermissionRemoveOneInput = exports.PermissionValidateOneResult = exports.PermissionValidateOneInput = exports.Permitted = exports.PermissionFindWhereOrStarInput = exports.PermissionFindWhereManyInput = exports.PermissionFindWhereInput = exports.PermissionFindOneInput = exports.PermissionCreateManyInput = exports.PermissionCreateOneInput = exports.Permissions = exports.AuthorizableAs = exports.Permission = exports.UserSearchResult = exports.UserSearchResultMeta = exports.UserSearchInput = exports.UserSearchOpts = exports.UserSearchFilter = exports.UserRemoveOneInput = exports.UserFindOneInput = exports.UserUpdateOneInput = exports.UserCreateOneInput = exports.UserOnboardingFlags = exports.User = exports.LoginRemoveOneInput = exports.LoginFindByPlatformIdInput = exports.LoginFindWhereInput = exports.LoginFindOneInput = exports.LoginUpdateOneInput = exports.LoginCreateOneInput = exports.GoogleCredentials = exports.LocalCredentials = exports.Credentials = exports.Login = exports.PublishJobInput = exports.DummyJobPayload = exports.DummySearchResult = exports.DummySearchResultMeta = exports.DummySearchInput = exports.DummySearchOpts = exports.DummySearchFilter = exports.DummyRemoveOneInput = exports.DummyFindOneInput = exports.DummyUpdateOneInput = exports.DummyCreateOneInput = exports.Dummy = exports.protobufPackage = void 0;
exports.Message = exports.ConversationParticipantFindByConversationResult = exports.ConversationParticipantFindByConversationResultMeta = exports.ConversationParticipantFindByConversationInput = exports.ConversationParticipantFindByConversationOpts = exports.ConversationParticipantFindByConversationFilter = exports.ConversationParticipantRemoveOneInput = exports.ConversationParticipantFindOneInput = exports.ConversationParticipantCreateOneInput = exports.ConversationParticipant = exports.ConversationFindByParticipantResult = exports.ConversationFindByParticipantResultMeta = exports.ConversationFindByParticipantInput = exports.ConversationFindByParticipantOpts = exports.ConversationFindByParticipantFilter = exports.ConversationRemoveOneInput = exports.ConversationFindOneInput = exports.ConversationUpdateOneInput = exports.ConversationCreateOneInput = exports.Conversation = exports.Followee = exports.UserFindFolloweesResult = exports.UserFindFolloweesResultMeta = exports.UserFindFolloweesInput = exports.UserFindFolloweesOpts = exports.UserFindFolloweesFilter = exports.Follower = exports.UserFindFollowersResult = exports.UserFindFollowersResultMeta = exports.UserFindFollowersInput = exports.UserFindFollowersOpts = exports.UserFindFollowersFilter = exports.UserFollowRemoveOneInput = exports.UserFollowCreateOneInput = exports.PermissionRemoveAllActionsInput = exports.PermissionRemoveAllActionsFilter = exports.PermissionFindAllActionsResult = exports.PermissionFindAllActionsResultMeta = exports.PermissionFindAllActionsInput = exports.PermissionFindAllActionsOpts = exports.PermissionFindAllActionsFilter = exports.PermissionFindByEntityResult = exports.PermissionFindByEntityResultMeta = exports.PermissionFindByEntityInput = exports.PermissionFindByEntityOpts = exports.PermissionFindByEntityFilter = exports.PermissionFindByPermittedResult = exports.PermissionFindByPermittedResultMeta = exports.PermissionFindByPermittedInput = exports.PermissionFindByPermittedOpts = void 0;
exports.WorkersServiceDefinition = exports.MessageServiceDefinition = exports.ConversationParticipantServiceDefinition = exports.ConversationServiceDefinition = exports.UserFollowServiceDefinition = exports.PermissionServiceDefinition = exports.UserServiceDefinition = exports.LoginServiceDefinition = exports.DummyServiceDefinition = exports.WorkersHealthCheckResult = exports.PublishJobResult = exports.MessageJobPayload = exports.MessageFindByConversationResult = exports.MessageFindByConversationResultMeta = exports.MessageFindByConversationInput = exports.MessageFindByConversationOpts = exports.MessageFindByConversationFilter = exports.MessageRemoveOneInput = exports.MessageFindUniqueInput = exports.MessageFindOneInput = exports.MessageUpdateOneInput = exports.MessageCreateOneInput = exports.MessageMedia = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const empty_1 = require("./google/protobuf/empty");
const Long = require("long");
exports.protobufPackage = "main";
function createBaseDummy() {
    return { id: "", createdAt: 0, updatedAt: 0, text: "", isPublic: false };
}
exports.Dummy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.createdAt !== 0) {
            writer.uint32(16).uint64(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            writer.uint32(24).uint64(message.updatedAt);
        }
        if (message.text !== "") {
            writer.uint32(34).string(message.text);
        }
        if (message.isPublic === true) {
            writer.uint32(40).bool(message.isPublic);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDummy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.updatedAt = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.text = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.isPublic = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
            text: isSet(object.text) ? globalThis.String(object.text) : "",
            isPublic: isSet(object.isPublic) ? globalThis.Boolean(object.isPublic) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt);
        }
        if (message.text !== "") {
            obj.text = message.text;
        }
        if (message.isPublic === true) {
            obj.isPublic = message.isPublic;
        }
        return obj;
    },
    create(base) {
        return exports.Dummy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDummy();
        message.id = object.id ?? "";
        message.createdAt = object.createdAt ?? 0;
        message.updatedAt = object.updatedAt ?? 0;
        message.text = object.text ?? "";
        message.isPublic = object.isPublic ?? false;
        return message;
    },
};
function createBaseDummyCreateOneInput() {
    return { text: "", isPublic: false };
}
exports.DummyCreateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(18).string(message.text);
        }
        if (message.isPublic === true) {
            writer.uint32(40).bool(message.isPublic);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDummyCreateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.text = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.isPublic = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            text: isSet(object.text) ? globalThis.String(object.text) : "",
            isPublic: isSet(object.isPublic) ? globalThis.Boolean(object.isPublic) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.text !== "") {
            obj.text = message.text;
        }
        if (message.isPublic === true) {
            obj.isPublic = message.isPublic;
        }
        return obj;
    },
    create(base) {
        return exports.DummyCreateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDummyCreateOneInput();
        message.text = object.text ?? "";
        message.isPublic = object.isPublic ?? false;
        return message;
    },
};
function createBaseDummyUpdateOneInput() {
    return { id: "", text: "" };
}
exports.DummyUpdateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.text !== "") {
            writer.uint32(18).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDummyUpdateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.text = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            text: isSet(object.text) ? globalThis.String(object.text) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.text !== "") {
            obj.text = message.text;
        }
        return obj;
    },
    create(base) {
        return exports.DummyUpdateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDummyUpdateOneInput();
        message.id = object.id ?? "";
        message.text = object.text ?? "";
        return message;
    },
};
function createBaseDummyFindOneInput() {
    return { id: "" };
}
exports.DummyFindOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDummyFindOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.DummyFindOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDummyFindOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseDummyRemoveOneInput() {
    return { id: "" };
}
exports.DummyRemoveOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDummyRemoveOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.DummyRemoveOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDummyRemoveOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseDummySearchFilter() {
    return { text: "" };
}
exports.DummySearchFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDummySearchFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.text = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { text: isSet(object.text) ? globalThis.String(object.text) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.text !== "") {
            obj.text = message.text;
        }
        return obj;
    },
    create(base) {
        return exports.DummySearchFilter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDummySearchFilter();
        message.text = object.text ?? "";
        return message;
    },
};
function createBaseDummySearchOpts() {
    return { limit: 0, offset: 0, waitForSync: false };
}
exports.DummySearchOpts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.offset !== 0) {
            writer.uint32(16).uint64(message.offset);
        }
        if (message.waitForSync === true) {
            writer.uint32(24).bool(message.waitForSync);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDummySearchOpts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.waitForSync = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
            waitForSync: isSet(object.waitForSync) ? globalThis.Boolean(object.waitForSync) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        if (message.waitForSync === true) {
            obj.waitForSync = message.waitForSync;
        }
        return obj;
    },
    create(base) {
        return exports.DummySearchOpts.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDummySearchOpts();
        message.limit = object.limit ?? 0;
        message.offset = object.offset ?? 0;
        message.waitForSync = object.waitForSync ?? false;
        return message;
    },
};
function createBaseDummySearchInput() {
    return { filter: undefined, opts: undefined };
}
exports.DummySearchInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.filter !== undefined) {
            exports.DummySearchFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.opts !== undefined) {
            exports.DummySearchOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDummySearchInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = exports.DummySearchFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.opts = exports.DummySearchOpts.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            filter: isSet(object.filter) ? exports.DummySearchFilter.fromJSON(object.filter) : undefined,
            opts: isSet(object.opts) ? exports.DummySearchOpts.fromJSON(object.opts) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = exports.DummySearchFilter.toJSON(message.filter);
        }
        if (message.opts !== undefined) {
            obj.opts = exports.DummySearchOpts.toJSON(message.opts);
        }
        return obj;
    },
    create(base) {
        return exports.DummySearchInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDummySearchInput();
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.DummySearchFilter.fromPartial(object.filter)
            : undefined;
        message.opts = (object.opts !== undefined && object.opts !== null)
            ? exports.DummySearchOpts.fromPartial(object.opts)
            : undefined;
        return message;
    },
};
function createBaseDummySearchResultMeta() {
    return { offset: 0 };
}
exports.DummySearchResultMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.offset !== 0) {
            writer.uint32(8).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDummySearchResultMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.DummySearchResultMeta.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDummySearchResultMeta();
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBaseDummySearchResult() {
    return { meta: undefined, results: [] };
}
exports.DummySearchResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.meta !== undefined) {
            exports.DummySearchResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.results) {
            exports.Dummy.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDummySearchResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.meta = exports.DummySearchResultMeta.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.results.push(exports.Dummy.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            meta: isSet(object.meta) ? exports.DummySearchResultMeta.fromJSON(object.meta) : undefined,
            results: globalThis.Array.isArray(object?.results) ? object.results.map((e) => exports.Dummy.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.meta !== undefined) {
            obj.meta = exports.DummySearchResultMeta.toJSON(message.meta);
        }
        if (message.results?.length) {
            obj.results = message.results.map((e) => exports.Dummy.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.DummySearchResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDummySearchResult();
        message.meta = (object.meta !== undefined && object.meta !== null)
            ? exports.DummySearchResultMeta.fromPartial(object.meta)
            : undefined;
        message.results = object.results?.map((e) => exports.Dummy.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDummyJobPayload() {
    return { id: "" };
}
exports.DummyJobPayload = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDummyJobPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.DummyJobPayload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDummyJobPayload();
        message.id = object.id ?? "";
        return message;
    },
};
function createBasePublishJobInput() {
    return { dummyJobPayload: undefined, sender: "" };
}
exports.PublishJobInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dummyJobPayload !== undefined) {
            exports.DummyJobPayload.encode(message.dummyJobPayload, writer.uint32(82).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(8002).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublishJobInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.dummyJobPayload = exports.DummyJobPayload.decode(reader, reader.uint32());
                    continue;
                case 1000:
                    if (tag !== 8002) {
                        break;
                    }
                    message.sender = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            dummyJobPayload: isSet(object.dummyJobPayload) ? exports.DummyJobPayload.fromJSON(object.dummyJobPayload) : undefined,
            sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.dummyJobPayload !== undefined) {
            obj.dummyJobPayload = exports.DummyJobPayload.toJSON(message.dummyJobPayload);
        }
        if (message.sender !== "") {
            obj.sender = message.sender;
        }
        return obj;
    },
    create(base) {
        return exports.PublishJobInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublishJobInput();
        message.dummyJobPayload = (object.dummyJobPayload !== undefined && object.dummyJobPayload !== null)
            ? exports.DummyJobPayload.fromPartial(object.dummyJobPayload)
            : undefined;
        message.sender = object.sender ?? "";
        return message;
    },
};
function createBaseLogin() {
    return {
        id: "",
        createdAt: 0,
        updatedAt: 0,
        platform: "",
        platformLoginId: "",
        platformLoginSecret: "",
        userId: "",
        isNew: false,
        credentials: undefined,
    };
}
exports.Login = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.createdAt !== 0) {
            writer.uint32(16).uint64(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            writer.uint32(24).uint64(message.updatedAt);
        }
        if (message.platform !== "") {
            writer.uint32(34).string(message.platform);
        }
        if (message.platformLoginId !== "") {
            writer.uint32(42).string(message.platformLoginId);
        }
        if (message.platformLoginSecret !== "") {
            writer.uint32(50).string(message.platformLoginSecret);
        }
        if (message.userId !== "") {
            writer.uint32(58).string(message.userId);
        }
        if (message.isNew === true) {
            writer.uint32(64).bool(message.isNew);
        }
        if (message.credentials !== undefined) {
            exports.Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLogin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.updatedAt = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.platform = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.platformLoginId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.platformLoginSecret = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.isNew = reader.bool();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.credentials = exports.Credentials.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
            platform: isSet(object.platform) ? globalThis.String(object.platform) : "",
            platformLoginId: isSet(object.platformLoginId) ? globalThis.String(object.platformLoginId) : "",
            platformLoginSecret: isSet(object.platformLoginSecret) ? globalThis.String(object.platformLoginSecret) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            isNew: isSet(object.isNew) ? globalThis.Boolean(object.isNew) : false,
            credentials: isSet(object.credentials) ? exports.Credentials.fromJSON(object.credentials) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt);
        }
        if (message.platform !== "") {
            obj.platform = message.platform;
        }
        if (message.platformLoginId !== "") {
            obj.platformLoginId = message.platformLoginId;
        }
        if (message.platformLoginSecret !== "") {
            obj.platformLoginSecret = message.platformLoginSecret;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.isNew === true) {
            obj.isNew = message.isNew;
        }
        if (message.credentials !== undefined) {
            obj.credentials = exports.Credentials.toJSON(message.credentials);
        }
        return obj;
    },
    create(base) {
        return exports.Login.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLogin();
        message.id = object.id ?? "";
        message.createdAt = object.createdAt ?? 0;
        message.updatedAt = object.updatedAt ?? 0;
        message.platform = object.platform ?? "";
        message.platformLoginId = object.platformLoginId ?? "";
        message.platformLoginSecret = object.platformLoginSecret ?? "";
        message.userId = object.userId ?? "";
        message.isNew = object.isNew ?? false;
        message.credentials = (object.credentials !== undefined && object.credentials !== null)
            ? exports.Credentials.fromPartial(object.credentials)
            : undefined;
        return message;
    },
};
function createBaseCredentials() {
    return { local: undefined, google: undefined };
}
exports.Credentials = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.local !== undefined) {
            exports.LocalCredentials.encode(message.local, writer.uint32(10).fork()).ldelim();
        }
        if (message.google !== undefined) {
            exports.GoogleCredentials.encode(message.google, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCredentials();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.local = exports.LocalCredentials.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.google = exports.GoogleCredentials.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            local: isSet(object.local) ? exports.LocalCredentials.fromJSON(object.local) : undefined,
            google: isSet(object.google) ? exports.GoogleCredentials.fromJSON(object.google) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.local !== undefined) {
            obj.local = exports.LocalCredentials.toJSON(message.local);
        }
        if (message.google !== undefined) {
            obj.google = exports.GoogleCredentials.toJSON(message.google);
        }
        return obj;
    },
    create(base) {
        return exports.Credentials.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCredentials();
        message.local = (object.local !== undefined && object.local !== null)
            ? exports.LocalCredentials.fromPartial(object.local)
            : undefined;
        message.google = (object.google !== undefined && object.google !== null)
            ? exports.GoogleCredentials.fromPartial(object.google)
            : undefined;
        return message;
    },
};
function createBaseLocalCredentials() {
    return { username: "", password: "" };
}
exports.LocalCredentials = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLocalCredentials();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            password: isSet(object.password) ? globalThis.String(object.password) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.password !== "") {
            obj.password = message.password;
        }
        return obj;
    },
    create(base) {
        return exports.LocalCredentials.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLocalCredentials();
        message.username = object.username ?? "";
        message.password = object.password ?? "";
        return message;
    },
};
function createBaseGoogleCredentials() {
    return { id: "" };
}
exports.GoogleCredentials = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGoogleCredentials();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.GoogleCredentials.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGoogleCredentials();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseLoginCreateOneInput() {
    return { platform: "", platformLoginId: "", platformLoginSecret: "", userId: "", credentials: undefined };
}
exports.LoginCreateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.platform !== "") {
            writer.uint32(34).string(message.platform);
        }
        if (message.platformLoginId !== "") {
            writer.uint32(42).string(message.platformLoginId);
        }
        if (message.platformLoginSecret !== "") {
            writer.uint32(50).string(message.platformLoginSecret);
        }
        if (message.userId !== "") {
            writer.uint32(58).string(message.userId);
        }
        if (message.credentials !== undefined) {
            exports.Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginCreateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.platform = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.platformLoginId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.platformLoginSecret = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.credentials = exports.Credentials.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            platform: isSet(object.platform) ? globalThis.String(object.platform) : "",
            platformLoginId: isSet(object.platformLoginId) ? globalThis.String(object.platformLoginId) : "",
            platformLoginSecret: isSet(object.platformLoginSecret) ? globalThis.String(object.platformLoginSecret) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            credentials: isSet(object.credentials) ? exports.Credentials.fromJSON(object.credentials) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.platform !== "") {
            obj.platform = message.platform;
        }
        if (message.platformLoginId !== "") {
            obj.platformLoginId = message.platformLoginId;
        }
        if (message.platformLoginSecret !== "") {
            obj.platformLoginSecret = message.platformLoginSecret;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.credentials !== undefined) {
            obj.credentials = exports.Credentials.toJSON(message.credentials);
        }
        return obj;
    },
    create(base) {
        return exports.LoginCreateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginCreateOneInput();
        message.platform = object.platform ?? "";
        message.platformLoginId = object.platformLoginId ?? "";
        message.platformLoginSecret = object.platformLoginSecret ?? "";
        message.userId = object.userId ?? "";
        message.credentials = (object.credentials !== undefined && object.credentials !== null)
            ? exports.Credentials.fromPartial(object.credentials)
            : undefined;
        return message;
    },
};
function createBaseLoginUpdateOneInput() {
    return { id: "", platform: "", platformLoginId: "", platformLoginSecret: "", userId: "", credentials: undefined };
}
exports.LoginUpdateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.platform !== "") {
            writer.uint32(34).string(message.platform);
        }
        if (message.platformLoginId !== "") {
            writer.uint32(42).string(message.platformLoginId);
        }
        if (message.platformLoginSecret !== "") {
            writer.uint32(50).string(message.platformLoginSecret);
        }
        if (message.userId !== "") {
            writer.uint32(58).string(message.userId);
        }
        if (message.credentials !== undefined) {
            exports.Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginUpdateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.platform = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.platformLoginId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.platformLoginSecret = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.credentials = exports.Credentials.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            platform: isSet(object.platform) ? globalThis.String(object.platform) : "",
            platformLoginId: isSet(object.platformLoginId) ? globalThis.String(object.platformLoginId) : "",
            platformLoginSecret: isSet(object.platformLoginSecret) ? globalThis.String(object.platformLoginSecret) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            credentials: isSet(object.credentials) ? exports.Credentials.fromJSON(object.credentials) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.platform !== "") {
            obj.platform = message.platform;
        }
        if (message.platformLoginId !== "") {
            obj.platformLoginId = message.platformLoginId;
        }
        if (message.platformLoginSecret !== "") {
            obj.platformLoginSecret = message.platformLoginSecret;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.credentials !== undefined) {
            obj.credentials = exports.Credentials.toJSON(message.credentials);
        }
        return obj;
    },
    create(base) {
        return exports.LoginUpdateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginUpdateOneInput();
        message.id = object.id ?? "";
        message.platform = object.platform ?? "";
        message.platformLoginId = object.platformLoginId ?? "";
        message.platformLoginSecret = object.platformLoginSecret ?? "";
        message.userId = object.userId ?? "";
        message.credentials = (object.credentials !== undefined && object.credentials !== null)
            ? exports.Credentials.fromPartial(object.credentials)
            : undefined;
        return message;
    },
};
function createBaseLoginFindOneInput() {
    return { id: "" };
}
exports.LoginFindOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginFindOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.LoginFindOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginFindOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseLoginFindWhereInput() {
    return { platform: "", platformLoginId: "", platformLoginSecret: "" };
}
exports.LoginFindWhereInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.platform !== "") {
            writer.uint32(10).string(message.platform);
        }
        if (message.platformLoginId !== "") {
            writer.uint32(18).string(message.platformLoginId);
        }
        if (message.platformLoginSecret !== "") {
            writer.uint32(26).string(message.platformLoginSecret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginFindWhereInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.platform = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.platformLoginId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.platformLoginSecret = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            platform: isSet(object.platform) ? globalThis.String(object.platform) : "",
            platformLoginId: isSet(object.platformLoginId) ? globalThis.String(object.platformLoginId) : "",
            platformLoginSecret: isSet(object.platformLoginSecret) ? globalThis.String(object.platformLoginSecret) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.platform !== "") {
            obj.platform = message.platform;
        }
        if (message.platformLoginId !== "") {
            obj.platformLoginId = message.platformLoginId;
        }
        if (message.platformLoginSecret !== "") {
            obj.platformLoginSecret = message.platformLoginSecret;
        }
        return obj;
    },
    create(base) {
        return exports.LoginFindWhereInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginFindWhereInput();
        message.platform = object.platform ?? "";
        message.platformLoginId = object.platformLoginId ?? "";
        message.platformLoginSecret = object.platformLoginSecret ?? "";
        return message;
    },
};
function createBaseLoginFindByPlatformIdInput() {
    return { platform: "", platformLoginId: "" };
}
exports.LoginFindByPlatformIdInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.platform !== "") {
            writer.uint32(10).string(message.platform);
        }
        if (message.platformLoginId !== "") {
            writer.uint32(18).string(message.platformLoginId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginFindByPlatformIdInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.platform = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.platformLoginId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            platform: isSet(object.platform) ? globalThis.String(object.platform) : "",
            platformLoginId: isSet(object.platformLoginId) ? globalThis.String(object.platformLoginId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.platform !== "") {
            obj.platform = message.platform;
        }
        if (message.platformLoginId !== "") {
            obj.platformLoginId = message.platformLoginId;
        }
        return obj;
    },
    create(base) {
        return exports.LoginFindByPlatformIdInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginFindByPlatformIdInput();
        message.platform = object.platform ?? "";
        message.platformLoginId = object.platformLoginId ?? "";
        return message;
    },
};
function createBaseLoginRemoveOneInput() {
    return { id: "" };
}
exports.LoginRemoveOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginRemoveOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.LoginRemoveOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginRemoveOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseUser() {
    return { id: "", createdAt: 0, updatedAt: 0, name: "", email: "", photo: "", onboardingFlags: undefined };
}
exports.User = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.createdAt !== 0) {
            writer.uint32(16).uint64(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            writer.uint32(24).uint64(message.updatedAt);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.email !== "") {
            writer.uint32(42).string(message.email);
        }
        if (message.photo !== "") {
            writer.uint32(50).string(message.photo);
        }
        if (message.onboardingFlags !== undefined) {
            exports.UserOnboardingFlags.encode(message.onboardingFlags, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.updatedAt = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.photo = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.onboardingFlags = exports.UserOnboardingFlags.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            photo: isSet(object.photo) ? globalThis.String(object.photo) : "",
            onboardingFlags: isSet(object.onboardingFlags) ? exports.UserOnboardingFlags.fromJSON(object.onboardingFlags) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.photo !== "") {
            obj.photo = message.photo;
        }
        if (message.onboardingFlags !== undefined) {
            obj.onboardingFlags = exports.UserOnboardingFlags.toJSON(message.onboardingFlags);
        }
        return obj;
    },
    create(base) {
        return exports.User.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUser();
        message.id = object.id ?? "";
        message.createdAt = object.createdAt ?? 0;
        message.updatedAt = object.updatedAt ?? 0;
        message.name = object.name ?? "";
        message.email = object.email ?? "";
        message.photo = object.photo ?? "";
        message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
            ? exports.UserOnboardingFlags.fromPartial(object.onboardingFlags)
            : undefined;
        return message;
    },
};
function createBaseUserOnboardingFlags() {
    return { initial: false };
}
exports.UserOnboardingFlags = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.initial === true) {
            writer.uint32(8).bool(message.initial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserOnboardingFlags();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.initial = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { initial: isSet(object.initial) ? globalThis.Boolean(object.initial) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.initial === true) {
            obj.initial = message.initial;
        }
        return obj;
    },
    create(base) {
        return exports.UserOnboardingFlags.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserOnboardingFlags();
        message.initial = object.initial ?? false;
        return message;
    },
};
function createBaseUserCreateOneInput() {
    return { name: "", email: "", photo: "", onboardingFlags: undefined };
}
exports.UserCreateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.email !== "") {
            writer.uint32(42).string(message.email);
        }
        if (message.photo !== "") {
            writer.uint32(50).string(message.photo);
        }
        if (message.onboardingFlags !== undefined) {
            exports.UserOnboardingFlags.encode(message.onboardingFlags, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserCreateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.photo = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.onboardingFlags = exports.UserOnboardingFlags.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            photo: isSet(object.photo) ? globalThis.String(object.photo) : "",
            onboardingFlags: isSet(object.onboardingFlags) ? exports.UserOnboardingFlags.fromJSON(object.onboardingFlags) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.photo !== "") {
            obj.photo = message.photo;
        }
        if (message.onboardingFlags !== undefined) {
            obj.onboardingFlags = exports.UserOnboardingFlags.toJSON(message.onboardingFlags);
        }
        return obj;
    },
    create(base) {
        return exports.UserCreateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserCreateOneInput();
        message.name = object.name ?? "";
        message.email = object.email ?? "";
        message.photo = object.photo ?? "";
        message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
            ? exports.UserOnboardingFlags.fromPartial(object.onboardingFlags)
            : undefined;
        return message;
    },
};
function createBaseUserUpdateOneInput() {
    return { id: "", name: "", email: "", photo: "", onboardingFlags: undefined };
}
exports.UserUpdateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.email !== "") {
            writer.uint32(42).string(message.email);
        }
        if (message.photo !== "") {
            writer.uint32(50).string(message.photo);
        }
        if (message.onboardingFlags !== undefined) {
            exports.UserOnboardingFlags.encode(message.onboardingFlags, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserUpdateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.photo = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.onboardingFlags = exports.UserOnboardingFlags.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            photo: isSet(object.photo) ? globalThis.String(object.photo) : "",
            onboardingFlags: isSet(object.onboardingFlags) ? exports.UserOnboardingFlags.fromJSON(object.onboardingFlags) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.photo !== "") {
            obj.photo = message.photo;
        }
        if (message.onboardingFlags !== undefined) {
            obj.onboardingFlags = exports.UserOnboardingFlags.toJSON(message.onboardingFlags);
        }
        return obj;
    },
    create(base) {
        return exports.UserUpdateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserUpdateOneInput();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.email = object.email ?? "";
        message.photo = object.photo ?? "";
        message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
            ? exports.UserOnboardingFlags.fromPartial(object.onboardingFlags)
            : undefined;
        return message;
    },
};
function createBaseUserFindOneInput() {
    return { id: "" };
}
exports.UserFindOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFindOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.UserFindOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFindOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseUserRemoveOneInput() {
    return { id: "" };
}
exports.UserRemoveOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserRemoveOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.UserRemoveOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserRemoveOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseUserSearchFilter() {
    return { name: "" };
}
exports.UserSearchFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserSearchFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.UserSearchFilter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserSearchFilter();
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseUserSearchOpts() {
    return { limit: 0, offset: 0, waitForSync: false };
}
exports.UserSearchOpts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.offset !== 0) {
            writer.uint32(16).uint64(message.offset);
        }
        if (message.waitForSync === true) {
            writer.uint32(24).bool(message.waitForSync);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserSearchOpts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.waitForSync = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
            waitForSync: isSet(object.waitForSync) ? globalThis.Boolean(object.waitForSync) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        if (message.waitForSync === true) {
            obj.waitForSync = message.waitForSync;
        }
        return obj;
    },
    create(base) {
        return exports.UserSearchOpts.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserSearchOpts();
        message.limit = object.limit ?? 0;
        message.offset = object.offset ?? 0;
        message.waitForSync = object.waitForSync ?? false;
        return message;
    },
};
function createBaseUserSearchInput() {
    return { filter: undefined, opts: undefined };
}
exports.UserSearchInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.filter !== undefined) {
            exports.UserSearchFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.opts !== undefined) {
            exports.UserSearchOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserSearchInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = exports.UserSearchFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.opts = exports.UserSearchOpts.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            filter: isSet(object.filter) ? exports.UserSearchFilter.fromJSON(object.filter) : undefined,
            opts: isSet(object.opts) ? exports.UserSearchOpts.fromJSON(object.opts) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = exports.UserSearchFilter.toJSON(message.filter);
        }
        if (message.opts !== undefined) {
            obj.opts = exports.UserSearchOpts.toJSON(message.opts);
        }
        return obj;
    },
    create(base) {
        return exports.UserSearchInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserSearchInput();
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.UserSearchFilter.fromPartial(object.filter)
            : undefined;
        message.opts = (object.opts !== undefined && object.opts !== null)
            ? exports.UserSearchOpts.fromPartial(object.opts)
            : undefined;
        return message;
    },
};
function createBaseUserSearchResultMeta() {
    return { offset: 0 };
}
exports.UserSearchResultMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.offset !== 0) {
            writer.uint32(8).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserSearchResultMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.UserSearchResultMeta.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserSearchResultMeta();
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBaseUserSearchResult() {
    return { meta: undefined, users: [] };
}
exports.UserSearchResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.meta !== undefined) {
            exports.UserSearchResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.users) {
            exports.User.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserSearchResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.meta = exports.UserSearchResultMeta.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.users.push(exports.User.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            meta: isSet(object.meta) ? exports.UserSearchResultMeta.fromJSON(object.meta) : undefined,
            users: globalThis.Array.isArray(object?.users) ? object.users.map((e) => exports.User.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.meta !== undefined) {
            obj.meta = exports.UserSearchResultMeta.toJSON(message.meta);
        }
        if (message.users?.length) {
            obj.users = message.users.map((e) => exports.User.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.UserSearchResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserSearchResult();
        message.meta = (object.meta !== undefined && object.meta !== null)
            ? exports.UserSearchResultMeta.fromPartial(object.meta)
            : undefined;
        message.users = object.users?.map((e) => exports.User.fromPartial(e)) || [];
        return message;
    },
};
function createBasePermission() {
    return {
        id: "",
        createdAt: 0,
        updatedAt: 0,
        entity: "",
        entityId: "",
        permittedEntity: "",
        permittedEntityId: "",
        action: "",
    };
}
exports.Permission = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.createdAt !== 0) {
            writer.uint32(16).uint64(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            writer.uint32(24).uint64(message.updatedAt);
        }
        if (message.entity !== "") {
            writer.uint32(34).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(42).string(message.entityId);
        }
        if (message.permittedEntity !== "") {
            writer.uint32(50).string(message.permittedEntity);
        }
        if (message.permittedEntityId !== "") {
            writer.uint32(58).string(message.permittedEntityId);
        }
        if (message.action !== "") {
            writer.uint32(66).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.updatedAt = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.permittedEntity = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.permittedEntityId = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.action = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
            permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
            permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
            action: isSet(object.action) ? globalThis.String(object.action) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt);
        }
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.permittedEntity !== "") {
            obj.permittedEntity = message.permittedEntity;
        }
        if (message.permittedEntityId !== "") {
            obj.permittedEntityId = message.permittedEntityId;
        }
        if (message.action !== "") {
            obj.action = message.action;
        }
        return obj;
    },
    create(base) {
        return exports.Permission.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermission();
        message.id = object.id ?? "";
        message.createdAt = object.createdAt ?? 0;
        message.updatedAt = object.updatedAt ?? 0;
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        message.permittedEntity = object.permittedEntity ?? "";
        message.permittedEntityId = object.permittedEntityId ?? "";
        message.action = object.action ?? "";
        return message;
    },
};
function createBaseAuthorizableAs() {
    return { entity: "", entityId: "" };
}
exports.AuthorizableAs = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entity !== "") {
            writer.uint32(10).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(18).string(message.entityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthorizableAs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        return obj;
    },
    create(base) {
        return exports.AuthorizableAs.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAuthorizableAs();
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        return message;
    },
};
function createBasePermissions() {
    return { permissions: [] };
}
exports.Permissions = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            permissions: globalThis.Array.isArray(object?.permissions)
                ? object.permissions.map((e) => exports.Permission.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.permissions?.length) {
            obj.permissions = message.permissions.map((e) => exports.Permission.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Permissions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissions();
        message.permissions = object.permissions?.map((e) => exports.Permission.fromPartial(e)) || [];
        return message;
    },
};
function createBasePermissionCreateOneInput() {
    return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}
exports.PermissionCreateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entity !== "") {
            writer.uint32(34).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(42).string(message.entityId);
        }
        if (message.permittedEntity !== "") {
            writer.uint32(50).string(message.permittedEntity);
        }
        if (message.permittedEntityId !== "") {
            writer.uint32(58).string(message.permittedEntityId);
        }
        if (message.action !== "") {
            writer.uint32(66).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionCreateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.permittedEntity = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.permittedEntityId = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.action = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
            permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
            permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
            action: isSet(object.action) ? globalThis.String(object.action) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.permittedEntity !== "") {
            obj.permittedEntity = message.permittedEntity;
        }
        if (message.permittedEntityId !== "") {
            obj.permittedEntityId = message.permittedEntityId;
        }
        if (message.action !== "") {
            obj.action = message.action;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionCreateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionCreateOneInput();
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        message.permittedEntity = object.permittedEntity ?? "";
        message.permittedEntityId = object.permittedEntityId ?? "";
        message.action = object.action ?? "";
        return message;
    },
};
function createBasePermissionCreateManyInput() {
    return { entity: "", entityId: "", permittedEntity: "", permittedEntityIds: [], action: "" };
}
exports.PermissionCreateManyInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entity !== "") {
            writer.uint32(34).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(42).string(message.entityId);
        }
        if (message.permittedEntity !== "") {
            writer.uint32(50).string(message.permittedEntity);
        }
        for (const v of message.permittedEntityIds) {
            writer.uint32(58).string(v);
        }
        if (message.action !== "") {
            writer.uint32(66).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionCreateManyInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.permittedEntity = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.permittedEntityIds.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.action = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
            permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
            permittedEntityIds: globalThis.Array.isArray(object?.permittedEntityIds)
                ? object.permittedEntityIds.map((e) => globalThis.String(e))
                : [],
            action: isSet(object.action) ? globalThis.String(object.action) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.permittedEntity !== "") {
            obj.permittedEntity = message.permittedEntity;
        }
        if (message.permittedEntityIds?.length) {
            obj.permittedEntityIds = message.permittedEntityIds;
        }
        if (message.action !== "") {
            obj.action = message.action;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionCreateManyInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionCreateManyInput();
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        message.permittedEntity = object.permittedEntity ?? "";
        message.permittedEntityIds = object.permittedEntityIds?.map((e) => e) || [];
        message.action = object.action ?? "";
        return message;
    },
};
function createBasePermissionFindOneInput() {
    return { id: "" };
}
exports.PermissionFindOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBasePermissionFindWhereInput() {
    return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}
exports.PermissionFindWhereInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entity !== "") {
            writer.uint32(10).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(18).string(message.entityId);
        }
        if (message.permittedEntity !== "") {
            writer.uint32(26).string(message.permittedEntity);
        }
        if (message.permittedEntityId !== "") {
            writer.uint32(34).string(message.permittedEntityId);
        }
        if (message.action !== "") {
            writer.uint32(42).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindWhereInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.permittedEntity = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.permittedEntityId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.action = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
            permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
            permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
            action: isSet(object.action) ? globalThis.String(object.action) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.permittedEntity !== "") {
            obj.permittedEntity = message.permittedEntity;
        }
        if (message.permittedEntityId !== "") {
            obj.permittedEntityId = message.permittedEntityId;
        }
        if (message.action !== "") {
            obj.action = message.action;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindWhereInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindWhereInput();
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        message.permittedEntity = object.permittedEntity ?? "";
        message.permittedEntityId = object.permittedEntityId ?? "";
        message.action = object.action ?? "";
        return message;
    },
};
function createBasePermissionFindWhereManyInput() {
    return { entity: "", entityId: "", permittedEntity: "", permittedEntityIds: [], action: "" };
}
exports.PermissionFindWhereManyInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entity !== "") {
            writer.uint32(10).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(18).string(message.entityId);
        }
        if (message.permittedEntity !== "") {
            writer.uint32(26).string(message.permittedEntity);
        }
        for (const v of message.permittedEntityIds) {
            writer.uint32(34).string(v);
        }
        if (message.action !== "") {
            writer.uint32(42).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindWhereManyInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.permittedEntity = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.permittedEntityIds.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.action = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
            permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
            permittedEntityIds: globalThis.Array.isArray(object?.permittedEntityIds)
                ? object.permittedEntityIds.map((e) => globalThis.String(e))
                : [],
            action: isSet(object.action) ? globalThis.String(object.action) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.permittedEntity !== "") {
            obj.permittedEntity = message.permittedEntity;
        }
        if (message.permittedEntityIds?.length) {
            obj.permittedEntityIds = message.permittedEntityIds;
        }
        if (message.action !== "") {
            obj.action = message.action;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindWhereManyInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindWhereManyInput();
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        message.permittedEntity = object.permittedEntity ?? "";
        message.permittedEntityIds = object.permittedEntityIds?.map((e) => e) || [];
        message.action = object.action ?? "";
        return message;
    },
};
function createBasePermissionFindWhereOrStarInput() {
    return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}
exports.PermissionFindWhereOrStarInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entity !== "") {
            writer.uint32(10).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(18).string(message.entityId);
        }
        if (message.permittedEntity !== "") {
            writer.uint32(26).string(message.permittedEntity);
        }
        if (message.permittedEntityId !== "") {
            writer.uint32(34).string(message.permittedEntityId);
        }
        if (message.action !== "") {
            writer.uint32(42).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindWhereOrStarInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.permittedEntity = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.permittedEntityId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.action = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
            permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
            permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
            action: isSet(object.action) ? globalThis.String(object.action) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.permittedEntity !== "") {
            obj.permittedEntity = message.permittedEntity;
        }
        if (message.permittedEntityId !== "") {
            obj.permittedEntityId = message.permittedEntityId;
        }
        if (message.action !== "") {
            obj.action = message.action;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindWhereOrStarInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindWhereOrStarInput();
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        message.permittedEntity = object.permittedEntity ?? "";
        message.permittedEntityId = object.permittedEntityId ?? "";
        message.action = object.action ?? "";
        return message;
    },
};
function createBasePermitted() {
    return { permittedEntity: "", permittedEntityId: "" };
}
exports.Permitted = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.permittedEntity !== "") {
            writer.uint32(10).string(message.permittedEntity);
        }
        if (message.permittedEntityId !== "") {
            writer.uint32(18).string(message.permittedEntityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermitted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.permittedEntity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.permittedEntityId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
            permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.permittedEntity !== "") {
            obj.permittedEntity = message.permittedEntity;
        }
        if (message.permittedEntityId !== "") {
            obj.permittedEntityId = message.permittedEntityId;
        }
        return obj;
    },
    create(base) {
        return exports.Permitted.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermitted();
        message.permittedEntity = object.permittedEntity ?? "";
        message.permittedEntityId = object.permittedEntityId ?? "";
        return message;
    },
};
function createBasePermissionValidateOneInput() {
    return { entity: "", entityId: "", action: "", permitted: [] };
}
exports.PermissionValidateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entity !== "") {
            writer.uint32(10).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(18).string(message.entityId);
        }
        if (message.action !== "") {
            writer.uint32(26).string(message.action);
        }
        for (const v of message.permitted) {
            exports.Permitted.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionValidateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.action = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.permitted.push(exports.Permitted.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
            action: isSet(object.action) ? globalThis.String(object.action) : "",
            permitted: globalThis.Array.isArray(object?.permitted)
                ? object.permitted.map((e) => exports.Permitted.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.action !== "") {
            obj.action = message.action;
        }
        if (message.permitted?.length) {
            obj.permitted = message.permitted.map((e) => exports.Permitted.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.PermissionValidateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionValidateOneInput();
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        message.action = object.action ?? "";
        message.permitted = object.permitted?.map((e) => exports.Permitted.fromPartial(e)) || [];
        return message;
    },
};
function createBasePermissionValidateOneResult() {
    return { validated: false };
}
exports.PermissionValidateOneResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validated === true) {
            writer.uint32(8).bool(message.validated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionValidateOneResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.validated = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { validated: isSet(object.validated) ? globalThis.Boolean(object.validated) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.validated === true) {
            obj.validated = message.validated;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionValidateOneResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionValidateOneResult();
        message.validated = object.validated ?? false;
        return message;
    },
};
function createBasePermissionRemoveOneInput() {
    return { id: "" };
}
exports.PermissionRemoveOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionRemoveOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionRemoveOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionRemoveOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBasePermissionRemoveWhereInput() {
    return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}
exports.PermissionRemoveWhereInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entity !== "") {
            writer.uint32(10).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(18).string(message.entityId);
        }
        if (message.permittedEntity !== "") {
            writer.uint32(26).string(message.permittedEntity);
        }
        if (message.permittedEntityId !== "") {
            writer.uint32(34).string(message.permittedEntityId);
        }
        if (message.action !== "") {
            writer.uint32(42).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionRemoveWhereInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.permittedEntity = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.permittedEntityId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.action = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
            permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
            permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
            action: isSet(object.action) ? globalThis.String(object.action) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.permittedEntity !== "") {
            obj.permittedEntity = message.permittedEntity;
        }
        if (message.permittedEntityId !== "") {
            obj.permittedEntityId = message.permittedEntityId;
        }
        if (message.action !== "") {
            obj.action = message.action;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionRemoveWhereInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionRemoveWhereInput();
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        message.permittedEntity = object.permittedEntity ?? "";
        message.permittedEntityId = object.permittedEntityId ?? "";
        message.action = object.action ?? "";
        return message;
    },
};
function createBasePermissionRemoveWhereManyInput() {
    return { entity: "", entityId: "", permittedEntity: "", permittedEntityIds: [], action: "" };
}
exports.PermissionRemoveWhereManyInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entity !== "") {
            writer.uint32(10).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(18).string(message.entityId);
        }
        if (message.permittedEntity !== "") {
            writer.uint32(26).string(message.permittedEntity);
        }
        for (const v of message.permittedEntityIds) {
            writer.uint32(34).string(v);
        }
        if (message.action !== "") {
            writer.uint32(42).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionRemoveWhereManyInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.permittedEntity = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.permittedEntityIds.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.action = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
            permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
            permittedEntityIds: globalThis.Array.isArray(object?.permittedEntityIds)
                ? object.permittedEntityIds.map((e) => globalThis.String(e))
                : [],
            action: isSet(object.action) ? globalThis.String(object.action) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.permittedEntity !== "") {
            obj.permittedEntity = message.permittedEntity;
        }
        if (message.permittedEntityIds?.length) {
            obj.permittedEntityIds = message.permittedEntityIds;
        }
        if (message.action !== "") {
            obj.action = message.action;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionRemoveWhereManyInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionRemoveWhereManyInput();
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        message.permittedEntity = object.permittedEntity ?? "";
        message.permittedEntityIds = object.permittedEntityIds?.map((e) => e) || [];
        message.action = object.action ?? "";
        return message;
    },
};
function createBasePermissionFindByPermittedFilter() {
    return { permittedEntity: "", permittedEntityId: "" };
}
exports.PermissionFindByPermittedFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.permittedEntity !== "") {
            writer.uint32(50).string(message.permittedEntity);
        }
        if (message.permittedEntityId !== "") {
            writer.uint32(58).string(message.permittedEntityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindByPermittedFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.permittedEntity = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.permittedEntityId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
            permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.permittedEntity !== "") {
            obj.permittedEntity = message.permittedEntity;
        }
        if (message.permittedEntityId !== "") {
            obj.permittedEntityId = message.permittedEntityId;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindByPermittedFilter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindByPermittedFilter();
        message.permittedEntity = object.permittedEntity ?? "";
        message.permittedEntityId = object.permittedEntityId ?? "";
        return message;
    },
};
function createBasePermissionFindByPermittedOpts() {
    return { limit: 0, offset: 0 };
}
exports.PermissionFindByPermittedOpts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.offset !== 0) {
            writer.uint32(16).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindByPermittedOpts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindByPermittedOpts.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindByPermittedOpts();
        message.limit = object.limit ?? 0;
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBasePermissionFindByPermittedInput() {
    return { filter: undefined, opts: undefined };
}
exports.PermissionFindByPermittedInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.filter !== undefined) {
            exports.PermissionFindByPermittedFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.opts !== undefined) {
            exports.PermissionFindByPermittedOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindByPermittedInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = exports.PermissionFindByPermittedFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.opts = exports.PermissionFindByPermittedOpts.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            filter: isSet(object.filter) ? exports.PermissionFindByPermittedFilter.fromJSON(object.filter) : undefined,
            opts: isSet(object.opts) ? exports.PermissionFindByPermittedOpts.fromJSON(object.opts) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = exports.PermissionFindByPermittedFilter.toJSON(message.filter);
        }
        if (message.opts !== undefined) {
            obj.opts = exports.PermissionFindByPermittedOpts.toJSON(message.opts);
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindByPermittedInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindByPermittedInput();
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.PermissionFindByPermittedFilter.fromPartial(object.filter)
            : undefined;
        message.opts = (object.opts !== undefined && object.opts !== null)
            ? exports.PermissionFindByPermittedOpts.fromPartial(object.opts)
            : undefined;
        return message;
    },
};
function createBasePermissionFindByPermittedResultMeta() {
    return { offset: 0 };
}
exports.PermissionFindByPermittedResultMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.offset !== 0) {
            writer.uint32(8).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindByPermittedResultMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindByPermittedResultMeta.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindByPermittedResultMeta();
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBasePermissionFindByPermittedResult() {
    return { meta: undefined, results: [] };
}
exports.PermissionFindByPermittedResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.meta !== undefined) {
            exports.PermissionFindByPermittedResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.results) {
            exports.Permission.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindByPermittedResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.meta = exports.PermissionFindByPermittedResultMeta.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.results.push(exports.Permission.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            meta: isSet(object.meta) ? exports.PermissionFindByPermittedResultMeta.fromJSON(object.meta) : undefined,
            results: globalThis.Array.isArray(object?.results) ? object.results.map((e) => exports.Permission.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.meta !== undefined) {
            obj.meta = exports.PermissionFindByPermittedResultMeta.toJSON(message.meta);
        }
        if (message.results?.length) {
            obj.results = message.results.map((e) => exports.Permission.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindByPermittedResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindByPermittedResult();
        message.meta = (object.meta !== undefined && object.meta !== null)
            ? exports.PermissionFindByPermittedResultMeta.fromPartial(object.meta)
            : undefined;
        message.results = object.results?.map((e) => exports.Permission.fromPartial(e)) || [];
        return message;
    },
};
function createBasePermissionFindByEntityFilter() {
    return { entity: "", entityId: "", action: "" };
}
exports.PermissionFindByEntityFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entity !== "") {
            writer.uint32(50).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(58).string(message.entityId);
        }
        if (message.action !== "") {
            writer.uint32(66).string(message.action);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindByEntityFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.action = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
            action: isSet(object.action) ? globalThis.String(object.action) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.action !== "") {
            obj.action = message.action;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindByEntityFilter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindByEntityFilter();
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        message.action = object.action ?? "";
        return message;
    },
};
function createBasePermissionFindByEntityOpts() {
    return { limit: 0, offset: 0 };
}
exports.PermissionFindByEntityOpts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.offset !== 0) {
            writer.uint32(16).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindByEntityOpts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindByEntityOpts.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindByEntityOpts();
        message.limit = object.limit ?? 0;
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBasePermissionFindByEntityInput() {
    return { filter: undefined, opts: undefined };
}
exports.PermissionFindByEntityInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.filter !== undefined) {
            exports.PermissionFindByEntityFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.opts !== undefined) {
            exports.PermissionFindByEntityOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindByEntityInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = exports.PermissionFindByEntityFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.opts = exports.PermissionFindByEntityOpts.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            filter: isSet(object.filter) ? exports.PermissionFindByEntityFilter.fromJSON(object.filter) : undefined,
            opts: isSet(object.opts) ? exports.PermissionFindByEntityOpts.fromJSON(object.opts) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = exports.PermissionFindByEntityFilter.toJSON(message.filter);
        }
        if (message.opts !== undefined) {
            obj.opts = exports.PermissionFindByEntityOpts.toJSON(message.opts);
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindByEntityInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindByEntityInput();
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.PermissionFindByEntityFilter.fromPartial(object.filter)
            : undefined;
        message.opts = (object.opts !== undefined && object.opts !== null)
            ? exports.PermissionFindByEntityOpts.fromPartial(object.opts)
            : undefined;
        return message;
    },
};
function createBasePermissionFindByEntityResultMeta() {
    return { offset: 0 };
}
exports.PermissionFindByEntityResultMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.offset !== 0) {
            writer.uint32(8).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindByEntityResultMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindByEntityResultMeta.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindByEntityResultMeta();
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBasePermissionFindByEntityResult() {
    return { meta: undefined, results: [] };
}
exports.PermissionFindByEntityResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.meta !== undefined) {
            exports.PermissionFindByEntityResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.results) {
            exports.Permission.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindByEntityResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.meta = exports.PermissionFindByEntityResultMeta.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.results.push(exports.Permission.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            meta: isSet(object.meta) ? exports.PermissionFindByEntityResultMeta.fromJSON(object.meta) : undefined,
            results: globalThis.Array.isArray(object?.results) ? object.results.map((e) => exports.Permission.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.meta !== undefined) {
            obj.meta = exports.PermissionFindByEntityResultMeta.toJSON(message.meta);
        }
        if (message.results?.length) {
            obj.results = message.results.map((e) => exports.Permission.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindByEntityResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindByEntityResult();
        message.meta = (object.meta !== undefined && object.meta !== null)
            ? exports.PermissionFindByEntityResultMeta.fromPartial(object.meta)
            : undefined;
        message.results = object.results?.map((e) => exports.Permission.fromPartial(e)) || [];
        return message;
    },
};
function createBasePermissionFindAllActionsFilter() {
    return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "" };
}
exports.PermissionFindAllActionsFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entity !== "") {
            writer.uint32(10).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(18).string(message.entityId);
        }
        if (message.permittedEntity !== "") {
            writer.uint32(26).string(message.permittedEntity);
        }
        if (message.permittedEntityId !== "") {
            writer.uint32(34).string(message.permittedEntityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindAllActionsFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.permittedEntity = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.permittedEntityId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
            permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
            permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.permittedEntity !== "") {
            obj.permittedEntity = message.permittedEntity;
        }
        if (message.permittedEntityId !== "") {
            obj.permittedEntityId = message.permittedEntityId;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindAllActionsFilter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindAllActionsFilter();
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        message.permittedEntity = object.permittedEntity ?? "";
        message.permittedEntityId = object.permittedEntityId ?? "";
        return message;
    },
};
function createBasePermissionFindAllActionsOpts() {
    return { limit: 0, offset: 0 };
}
exports.PermissionFindAllActionsOpts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.offset !== 0) {
            writer.uint32(16).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindAllActionsOpts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindAllActionsOpts.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindAllActionsOpts();
        message.limit = object.limit ?? 0;
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBasePermissionFindAllActionsInput() {
    return { filter: undefined, opts: undefined };
}
exports.PermissionFindAllActionsInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.filter !== undefined) {
            exports.PermissionFindAllActionsFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.opts !== undefined) {
            exports.PermissionFindAllActionsOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindAllActionsInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = exports.PermissionFindAllActionsFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.opts = exports.PermissionFindAllActionsOpts.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            filter: isSet(object.filter) ? exports.PermissionFindAllActionsFilter.fromJSON(object.filter) : undefined,
            opts: isSet(object.opts) ? exports.PermissionFindAllActionsOpts.fromJSON(object.opts) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = exports.PermissionFindAllActionsFilter.toJSON(message.filter);
        }
        if (message.opts !== undefined) {
            obj.opts = exports.PermissionFindAllActionsOpts.toJSON(message.opts);
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindAllActionsInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindAllActionsInput();
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.PermissionFindAllActionsFilter.fromPartial(object.filter)
            : undefined;
        message.opts = (object.opts !== undefined && object.opts !== null)
            ? exports.PermissionFindAllActionsOpts.fromPartial(object.opts)
            : undefined;
        return message;
    },
};
function createBasePermissionFindAllActionsResultMeta() {
    return { offset: 0 };
}
exports.PermissionFindAllActionsResultMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.offset !== 0) {
            writer.uint32(8).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindAllActionsResultMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindAllActionsResultMeta.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindAllActionsResultMeta();
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBasePermissionFindAllActionsResult() {
    return { meta: undefined, results: [] };
}
exports.PermissionFindAllActionsResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.meta !== undefined) {
            exports.PermissionFindAllActionsResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.results) {
            exports.Permission.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionFindAllActionsResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.meta = exports.PermissionFindAllActionsResultMeta.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.results.push(exports.Permission.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            meta: isSet(object.meta) ? exports.PermissionFindAllActionsResultMeta.fromJSON(object.meta) : undefined,
            results: globalThis.Array.isArray(object?.results) ? object.results.map((e) => exports.Permission.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.meta !== undefined) {
            obj.meta = exports.PermissionFindAllActionsResultMeta.toJSON(message.meta);
        }
        if (message.results?.length) {
            obj.results = message.results.map((e) => exports.Permission.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.PermissionFindAllActionsResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionFindAllActionsResult();
        message.meta = (object.meta !== undefined && object.meta !== null)
            ? exports.PermissionFindAllActionsResultMeta.fromPartial(object.meta)
            : undefined;
        message.results = object.results?.map((e) => exports.Permission.fromPartial(e)) || [];
        return message;
    },
};
function createBasePermissionRemoveAllActionsFilter() {
    return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "" };
}
exports.PermissionRemoveAllActionsFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.entity !== "") {
            writer.uint32(10).string(message.entity);
        }
        if (message.entityId !== "") {
            writer.uint32(18).string(message.entityId);
        }
        if (message.permittedEntity !== "") {
            writer.uint32(26).string(message.permittedEntity);
        }
        if (message.permittedEntityId !== "") {
            writer.uint32(34).string(message.permittedEntityId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionRemoveAllActionsFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.entityId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.permittedEntity = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.permittedEntityId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
            entityId: isSet(object.entityId) ? globalThis.String(object.entityId) : "",
            permittedEntity: isSet(object.permittedEntity) ? globalThis.String(object.permittedEntity) : "",
            permittedEntityId: isSet(object.permittedEntityId) ? globalThis.String(object.permittedEntityId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entity !== "") {
            obj.entity = message.entity;
        }
        if (message.entityId !== "") {
            obj.entityId = message.entityId;
        }
        if (message.permittedEntity !== "") {
            obj.permittedEntity = message.permittedEntity;
        }
        if (message.permittedEntityId !== "") {
            obj.permittedEntityId = message.permittedEntityId;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionRemoveAllActionsFilter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionRemoveAllActionsFilter();
        message.entity = object.entity ?? "";
        message.entityId = object.entityId ?? "";
        message.permittedEntity = object.permittedEntity ?? "";
        message.permittedEntityId = object.permittedEntityId ?? "";
        return message;
    },
};
function createBasePermissionRemoveAllActionsInput() {
    return { filter: undefined };
}
exports.PermissionRemoveAllActionsInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.filter !== undefined) {
            exports.PermissionRemoveAllActionsFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionRemoveAllActionsInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = exports.PermissionRemoveAllActionsFilter.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { filter: isSet(object.filter) ? exports.PermissionRemoveAllActionsFilter.fromJSON(object.filter) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = exports.PermissionRemoveAllActionsFilter.toJSON(message.filter);
        }
        return obj;
    },
    create(base) {
        return exports.PermissionRemoveAllActionsInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionRemoveAllActionsInput();
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.PermissionRemoveAllActionsFilter.fromPartial(object.filter)
            : undefined;
        return message;
    },
};
function createBaseUserFollowCreateOneInput() {
    return { followerId: "", followeeId: "" };
}
exports.UserFollowCreateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.followerId !== "") {
            writer.uint32(10).string(message.followerId);
        }
        if (message.followeeId !== "") {
            writer.uint32(18).string(message.followeeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFollowCreateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.followerId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.followeeId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            followerId: isSet(object.followerId) ? globalThis.String(object.followerId) : "",
            followeeId: isSet(object.followeeId) ? globalThis.String(object.followeeId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.followerId !== "") {
            obj.followerId = message.followerId;
        }
        if (message.followeeId !== "") {
            obj.followeeId = message.followeeId;
        }
        return obj;
    },
    create(base) {
        return exports.UserFollowCreateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFollowCreateOneInput();
        message.followerId = object.followerId ?? "";
        message.followeeId = object.followeeId ?? "";
        return message;
    },
};
function createBaseUserFollowRemoveOneInput() {
    return { id: "" };
}
exports.UserFollowRemoveOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFollowRemoveOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.UserFollowRemoveOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFollowRemoveOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseUserFindFollowersFilter() {
    return { followeeId: "" };
}
exports.UserFindFollowersFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.followeeId !== "") {
            writer.uint32(10).string(message.followeeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFindFollowersFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.followeeId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { followeeId: isSet(object.followeeId) ? globalThis.String(object.followeeId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.followeeId !== "") {
            obj.followeeId = message.followeeId;
        }
        return obj;
    },
    create(base) {
        return exports.UserFindFollowersFilter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFindFollowersFilter();
        message.followeeId = object.followeeId ?? "";
        return message;
    },
};
function createBaseUserFindFollowersOpts() {
    return { limit: 0, offset: 0 };
}
exports.UserFindFollowersOpts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.offset !== 0) {
            writer.uint32(16).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFindFollowersOpts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.UserFindFollowersOpts.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFindFollowersOpts();
        message.limit = object.limit ?? 0;
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBaseUserFindFollowersInput() {
    return { filter: undefined, opts: undefined };
}
exports.UserFindFollowersInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.filter !== undefined) {
            exports.UserFindFollowersFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.opts !== undefined) {
            exports.UserFindFollowersOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFindFollowersInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = exports.UserFindFollowersFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.opts = exports.UserFindFollowersOpts.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            filter: isSet(object.filter) ? exports.UserFindFollowersFilter.fromJSON(object.filter) : undefined,
            opts: isSet(object.opts) ? exports.UserFindFollowersOpts.fromJSON(object.opts) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = exports.UserFindFollowersFilter.toJSON(message.filter);
        }
        if (message.opts !== undefined) {
            obj.opts = exports.UserFindFollowersOpts.toJSON(message.opts);
        }
        return obj;
    },
    create(base) {
        return exports.UserFindFollowersInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFindFollowersInput();
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.UserFindFollowersFilter.fromPartial(object.filter)
            : undefined;
        message.opts = (object.opts !== undefined && object.opts !== null)
            ? exports.UserFindFollowersOpts.fromPartial(object.opts)
            : undefined;
        return message;
    },
};
function createBaseUserFindFollowersResultMeta() {
    return { offset: 0 };
}
exports.UserFindFollowersResultMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.offset !== 0) {
            writer.uint32(8).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFindFollowersResultMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.UserFindFollowersResultMeta.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFindFollowersResultMeta();
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBaseUserFindFollowersResult() {
    return { meta: undefined, followers: [] };
}
exports.UserFindFollowersResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.meta !== undefined) {
            exports.UserFindFollowersResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.followers) {
            exports.Follower.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFindFollowersResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.meta = exports.UserFindFollowersResultMeta.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.followers.push(exports.Follower.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            meta: isSet(object.meta) ? exports.UserFindFollowersResultMeta.fromJSON(object.meta) : undefined,
            followers: globalThis.Array.isArray(object?.followers)
                ? object.followers.map((e) => exports.Follower.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.meta !== undefined) {
            obj.meta = exports.UserFindFollowersResultMeta.toJSON(message.meta);
        }
        if (message.followers?.length) {
            obj.followers = message.followers.map((e) => exports.Follower.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.UserFindFollowersResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFindFollowersResult();
        message.meta = (object.meta !== undefined && object.meta !== null)
            ? exports.UserFindFollowersResultMeta.fromPartial(object.meta)
            : undefined;
        message.followers = object.followers?.map((e) => exports.Follower.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFollower() {
    return { id: "", createdAt: 0, updatedAt: 0, followeeId: "", followerId: "" };
}
exports.Follower = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.createdAt !== 0) {
            writer.uint32(16).uint64(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            writer.uint32(24).uint64(message.updatedAt);
        }
        if (message.followeeId !== "") {
            writer.uint32(34).string(message.followeeId);
        }
        if (message.followerId !== "") {
            writer.uint32(42).string(message.followerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFollower();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.updatedAt = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.followeeId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.followerId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
            followeeId: isSet(object.followeeId) ? globalThis.String(object.followeeId) : "",
            followerId: isSet(object.followerId) ? globalThis.String(object.followerId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt);
        }
        if (message.followeeId !== "") {
            obj.followeeId = message.followeeId;
        }
        if (message.followerId !== "") {
            obj.followerId = message.followerId;
        }
        return obj;
    },
    create(base) {
        return exports.Follower.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFollower();
        message.id = object.id ?? "";
        message.createdAt = object.createdAt ?? 0;
        message.updatedAt = object.updatedAt ?? 0;
        message.followeeId = object.followeeId ?? "";
        message.followerId = object.followerId ?? "";
        return message;
    },
};
function createBaseUserFindFolloweesFilter() {
    return { followerId: "" };
}
exports.UserFindFolloweesFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.followerId !== "") {
            writer.uint32(10).string(message.followerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFindFolloweesFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.followerId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { followerId: isSet(object.followerId) ? globalThis.String(object.followerId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.followerId !== "") {
            obj.followerId = message.followerId;
        }
        return obj;
    },
    create(base) {
        return exports.UserFindFolloweesFilter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFindFolloweesFilter();
        message.followerId = object.followerId ?? "";
        return message;
    },
};
function createBaseUserFindFolloweesOpts() {
    return { limit: 0, offset: 0 };
}
exports.UserFindFolloweesOpts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.offset !== 0) {
            writer.uint32(16).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFindFolloweesOpts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.UserFindFolloweesOpts.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFindFolloweesOpts();
        message.limit = object.limit ?? 0;
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBaseUserFindFolloweesInput() {
    return { filter: undefined, opts: undefined };
}
exports.UserFindFolloweesInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.filter !== undefined) {
            exports.UserFindFolloweesFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.opts !== undefined) {
            exports.UserFindFolloweesOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFindFolloweesInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = exports.UserFindFolloweesFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.opts = exports.UserFindFolloweesOpts.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            filter: isSet(object.filter) ? exports.UserFindFolloweesFilter.fromJSON(object.filter) : undefined,
            opts: isSet(object.opts) ? exports.UserFindFolloweesOpts.fromJSON(object.opts) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = exports.UserFindFolloweesFilter.toJSON(message.filter);
        }
        if (message.opts !== undefined) {
            obj.opts = exports.UserFindFolloweesOpts.toJSON(message.opts);
        }
        return obj;
    },
    create(base) {
        return exports.UserFindFolloweesInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFindFolloweesInput();
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.UserFindFolloweesFilter.fromPartial(object.filter)
            : undefined;
        message.opts = (object.opts !== undefined && object.opts !== null)
            ? exports.UserFindFolloweesOpts.fromPartial(object.opts)
            : undefined;
        return message;
    },
};
function createBaseUserFindFolloweesResultMeta() {
    return { offset: 0 };
}
exports.UserFindFolloweesResultMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.offset !== 0) {
            writer.uint32(8).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFindFolloweesResultMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.UserFindFolloweesResultMeta.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFindFolloweesResultMeta();
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBaseUserFindFolloweesResult() {
    return { meta: undefined, followees: [] };
}
exports.UserFindFolloweesResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.meta !== undefined) {
            exports.UserFindFolloweesResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.followees) {
            exports.Followee.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFindFolloweesResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.meta = exports.UserFindFolloweesResultMeta.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.followees.push(exports.Followee.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            meta: isSet(object.meta) ? exports.UserFindFolloweesResultMeta.fromJSON(object.meta) : undefined,
            followees: globalThis.Array.isArray(object?.followees)
                ? object.followees.map((e) => exports.Followee.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.meta !== undefined) {
            obj.meta = exports.UserFindFolloweesResultMeta.toJSON(message.meta);
        }
        if (message.followees?.length) {
            obj.followees = message.followees.map((e) => exports.Followee.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.UserFindFolloweesResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFindFolloweesResult();
        message.meta = (object.meta !== undefined && object.meta !== null)
            ? exports.UserFindFolloweesResultMeta.fromPartial(object.meta)
            : undefined;
        message.followees = object.followees?.map((e) => exports.Followee.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFollowee() {
    return { id: "", createdAt: 0, updatedAt: 0, followerId: "", followeeId: "" };
}
exports.Followee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.createdAt !== 0) {
            writer.uint32(16).uint64(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            writer.uint32(24).uint64(message.updatedAt);
        }
        if (message.followerId !== "") {
            writer.uint32(34).string(message.followerId);
        }
        if (message.followeeId !== "") {
            writer.uint32(42).string(message.followeeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFollowee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.updatedAt = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.followerId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.followeeId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
            followerId: isSet(object.followerId) ? globalThis.String(object.followerId) : "",
            followeeId: isSet(object.followeeId) ? globalThis.String(object.followeeId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt);
        }
        if (message.followerId !== "") {
            obj.followerId = message.followerId;
        }
        if (message.followeeId !== "") {
            obj.followeeId = message.followeeId;
        }
        return obj;
    },
    create(base) {
        return exports.Followee.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFollowee();
        message.id = object.id ?? "";
        message.createdAt = object.createdAt ?? 0;
        message.updatedAt = object.updatedAt ?? 0;
        message.followerId = object.followerId ?? "";
        message.followeeId = object.followeeId ?? "";
        return message;
    },
};
function createBaseConversation() {
    return { id: "", createdAt: 0, updatedAt: 0, name: "", description: "", lastMessageAt: 0 };
}
exports.Conversation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.createdAt !== 0) {
            writer.uint32(16).uint64(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            writer.uint32(24).uint64(message.updatedAt);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        if (message.lastMessageAt !== 0) {
            writer.uint32(48).uint64(message.lastMessageAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.updatedAt = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.lastMessageAt = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            lastMessageAt: isSet(object.lastMessageAt) ? globalThis.Number(object.lastMessageAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.lastMessageAt !== 0) {
            obj.lastMessageAt = Math.round(message.lastMessageAt);
        }
        return obj;
    },
    create(base) {
        return exports.Conversation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversation();
        message.id = object.id ?? "";
        message.createdAt = object.createdAt ?? 0;
        message.updatedAt = object.updatedAt ?? 0;
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.lastMessageAt = object.lastMessageAt ?? 0;
        return message;
    },
};
function createBaseConversationCreateOneInput() {
    return { name: "", description: "" };
}
exports.ConversationCreateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationCreateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        return obj;
    },
    create(base) {
        return exports.ConversationCreateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationCreateOneInput();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        return message;
    },
};
function createBaseConversationUpdateOneInput() {
    return { id: "", name: "", description: "", lastMessageAt: 0 };
}
exports.ConversationUpdateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        if (message.lastMessageAt !== 0) {
            writer.uint32(48).uint64(message.lastMessageAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationUpdateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.lastMessageAt = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            lastMessageAt: isSet(object.lastMessageAt) ? globalThis.Number(object.lastMessageAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.lastMessageAt !== 0) {
            obj.lastMessageAt = Math.round(message.lastMessageAt);
        }
        return obj;
    },
    create(base) {
        return exports.ConversationUpdateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationUpdateOneInput();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.lastMessageAt = object.lastMessageAt ?? 0;
        return message;
    },
};
function createBaseConversationFindOneInput() {
    return { id: "" };
}
exports.ConversationFindOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationFindOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.ConversationFindOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationFindOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseConversationRemoveOneInput() {
    return { id: "" };
}
exports.ConversationRemoveOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationRemoveOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.ConversationRemoveOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationRemoveOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseConversationFindByParticipantFilter() {
    return { participantId: "", fromLastMessageAt: 0 };
}
exports.ConversationFindByParticipantFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.participantId !== "") {
            writer.uint32(10).string(message.participantId);
        }
        if (message.fromLastMessageAt !== 0) {
            writer.uint32(16).uint64(message.fromLastMessageAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationFindByParticipantFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.participantId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.fromLastMessageAt = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            participantId: isSet(object.participantId) ? globalThis.String(object.participantId) : "",
            fromLastMessageAt: isSet(object.fromLastMessageAt) ? globalThis.Number(object.fromLastMessageAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.participantId !== "") {
            obj.participantId = message.participantId;
        }
        if (message.fromLastMessageAt !== 0) {
            obj.fromLastMessageAt = Math.round(message.fromLastMessageAt);
        }
        return obj;
    },
    create(base) {
        return exports.ConversationFindByParticipantFilter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationFindByParticipantFilter();
        message.participantId = object.participantId ?? "";
        message.fromLastMessageAt = object.fromLastMessageAt ?? 0;
        return message;
    },
};
function createBaseConversationFindByParticipantOpts() {
    return { limit: 0, offset: 0 };
}
exports.ConversationFindByParticipantOpts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.offset !== 0) {
            writer.uint32(16).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationFindByParticipantOpts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.ConversationFindByParticipantOpts.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationFindByParticipantOpts();
        message.limit = object.limit ?? 0;
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBaseConversationFindByParticipantInput() {
    return { filter: undefined, opts: undefined };
}
exports.ConversationFindByParticipantInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.filter !== undefined) {
            exports.ConversationFindByParticipantFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.opts !== undefined) {
            exports.ConversationFindByParticipantOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationFindByParticipantInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = exports.ConversationFindByParticipantFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.opts = exports.ConversationFindByParticipantOpts.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            filter: isSet(object.filter) ? exports.ConversationFindByParticipantFilter.fromJSON(object.filter) : undefined,
            opts: isSet(object.opts) ? exports.ConversationFindByParticipantOpts.fromJSON(object.opts) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = exports.ConversationFindByParticipantFilter.toJSON(message.filter);
        }
        if (message.opts !== undefined) {
            obj.opts = exports.ConversationFindByParticipantOpts.toJSON(message.opts);
        }
        return obj;
    },
    create(base) {
        return exports.ConversationFindByParticipantInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationFindByParticipantInput();
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.ConversationFindByParticipantFilter.fromPartial(object.filter)
            : undefined;
        message.opts = (object.opts !== undefined && object.opts !== null)
            ? exports.ConversationFindByParticipantOpts.fromPartial(object.opts)
            : undefined;
        return message;
    },
};
function createBaseConversationFindByParticipantResultMeta() {
    return { offset: 0 };
}
exports.ConversationFindByParticipantResultMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.offset !== 0) {
            writer.uint32(8).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationFindByParticipantResultMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.ConversationFindByParticipantResultMeta.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationFindByParticipantResultMeta();
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBaseConversationFindByParticipantResult() {
    return { meta: undefined, results: [] };
}
exports.ConversationFindByParticipantResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.meta !== undefined) {
            exports.ConversationFindByParticipantResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.results) {
            exports.Conversation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationFindByParticipantResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.meta = exports.ConversationFindByParticipantResultMeta.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.results.push(exports.Conversation.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            meta: isSet(object.meta) ? exports.ConversationFindByParticipantResultMeta.fromJSON(object.meta) : undefined,
            results: globalThis.Array.isArray(object?.results)
                ? object.results.map((e) => exports.Conversation.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.meta !== undefined) {
            obj.meta = exports.ConversationFindByParticipantResultMeta.toJSON(message.meta);
        }
        if (message.results?.length) {
            obj.results = message.results.map((e) => exports.Conversation.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ConversationFindByParticipantResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationFindByParticipantResult();
        message.meta = (object.meta !== undefined && object.meta !== null)
            ? exports.ConversationFindByParticipantResultMeta.fromPartial(object.meta)
            : undefined;
        message.results = object.results?.map((e) => exports.Conversation.fromPartial(e)) || [];
        return message;
    },
};
function createBaseConversationParticipant() {
    return { id: "", createdAt: 0, updatedAt: 0, conversationId: "", participantId: "", writeableAs: undefined };
}
exports.ConversationParticipant = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.createdAt !== 0) {
            writer.uint32(16).uint64(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            writer.uint32(24).uint64(message.updatedAt);
        }
        if (message.conversationId !== "") {
            writer.uint32(34).string(message.conversationId);
        }
        if (message.participantId !== "") {
            writer.uint32(42).string(message.participantId);
        }
        if (message.writeableAs !== undefined) {
            exports.AuthorizableAs.encode(message.writeableAs, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationParticipant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.updatedAt = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.conversationId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.participantId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.writeableAs = exports.AuthorizableAs.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
            conversationId: isSet(object.conversationId) ? globalThis.String(object.conversationId) : "",
            participantId: isSet(object.participantId) ? globalThis.String(object.participantId) : "",
            writeableAs: isSet(object.writeableAs) ? exports.AuthorizableAs.fromJSON(object.writeableAs) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt);
        }
        if (message.conversationId !== "") {
            obj.conversationId = message.conversationId;
        }
        if (message.participantId !== "") {
            obj.participantId = message.participantId;
        }
        if (message.writeableAs !== undefined) {
            obj.writeableAs = exports.AuthorizableAs.toJSON(message.writeableAs);
        }
        return obj;
    },
    create(base) {
        return exports.ConversationParticipant.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationParticipant();
        message.id = object.id ?? "";
        message.createdAt = object.createdAt ?? 0;
        message.updatedAt = object.updatedAt ?? 0;
        message.conversationId = object.conversationId ?? "";
        message.participantId = object.participantId ?? "";
        message.writeableAs = (object.writeableAs !== undefined && object.writeableAs !== null)
            ? exports.AuthorizableAs.fromPartial(object.writeableAs)
            : undefined;
        return message;
    },
};
function createBaseConversationParticipantCreateOneInput() {
    return { conversationId: "", participantId: "" };
}
exports.ConversationParticipantCreateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.conversationId !== "") {
            writer.uint32(34).string(message.conversationId);
        }
        if (message.participantId !== "") {
            writer.uint32(42).string(message.participantId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationParticipantCreateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.conversationId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.participantId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            conversationId: isSet(object.conversationId) ? globalThis.String(object.conversationId) : "",
            participantId: isSet(object.participantId) ? globalThis.String(object.participantId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.conversationId !== "") {
            obj.conversationId = message.conversationId;
        }
        if (message.participantId !== "") {
            obj.participantId = message.participantId;
        }
        return obj;
    },
    create(base) {
        return exports.ConversationParticipantCreateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationParticipantCreateOneInput();
        message.conversationId = object.conversationId ?? "";
        message.participantId = object.participantId ?? "";
        return message;
    },
};
function createBaseConversationParticipantFindOneInput() {
    return { id: "" };
}
exports.ConversationParticipantFindOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationParticipantFindOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.ConversationParticipantFindOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationParticipantFindOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseConversationParticipantRemoveOneInput() {
    return { id: "" };
}
exports.ConversationParticipantRemoveOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationParticipantRemoveOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.ConversationParticipantRemoveOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationParticipantRemoveOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseConversationParticipantFindByConversationFilter() {
    return { conversationId: "" };
}
exports.ConversationParticipantFindByConversationFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.conversationId !== "") {
            writer.uint32(10).string(message.conversationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationParticipantFindByConversationFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.conversationId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { conversationId: isSet(object.conversationId) ? globalThis.String(object.conversationId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.conversationId !== "") {
            obj.conversationId = message.conversationId;
        }
        return obj;
    },
    create(base) {
        return exports.ConversationParticipantFindByConversationFilter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationParticipantFindByConversationFilter();
        message.conversationId = object.conversationId ?? "";
        return message;
    },
};
function createBaseConversationParticipantFindByConversationOpts() {
    return { limit: 0, offset: 0 };
}
exports.ConversationParticipantFindByConversationOpts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.offset !== 0) {
            writer.uint32(16).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationParticipantFindByConversationOpts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.ConversationParticipantFindByConversationOpts.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationParticipantFindByConversationOpts();
        message.limit = object.limit ?? 0;
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBaseConversationParticipantFindByConversationInput() {
    return { filter: undefined, opts: undefined };
}
exports.ConversationParticipantFindByConversationInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.filter !== undefined) {
            exports.ConversationParticipantFindByConversationFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.opts !== undefined) {
            exports.ConversationParticipantFindByConversationOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationParticipantFindByConversationInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = exports.ConversationParticipantFindByConversationFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.opts = exports.ConversationParticipantFindByConversationOpts.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            filter: isSet(object.filter)
                ? exports.ConversationParticipantFindByConversationFilter.fromJSON(object.filter)
                : undefined,
            opts: isSet(object.opts) ? exports.ConversationParticipantFindByConversationOpts.fromJSON(object.opts) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = exports.ConversationParticipantFindByConversationFilter.toJSON(message.filter);
        }
        if (message.opts !== undefined) {
            obj.opts = exports.ConversationParticipantFindByConversationOpts.toJSON(message.opts);
        }
        return obj;
    },
    create(base) {
        return exports.ConversationParticipantFindByConversationInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationParticipantFindByConversationInput();
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.ConversationParticipantFindByConversationFilter.fromPartial(object.filter)
            : undefined;
        message.opts = (object.opts !== undefined && object.opts !== null)
            ? exports.ConversationParticipantFindByConversationOpts.fromPartial(object.opts)
            : undefined;
        return message;
    },
};
function createBaseConversationParticipantFindByConversationResultMeta() {
    return { offset: 0 };
}
exports.ConversationParticipantFindByConversationResultMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.offset !== 0) {
            writer.uint32(8).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationParticipantFindByConversationResultMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.ConversationParticipantFindByConversationResultMeta.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationParticipantFindByConversationResultMeta();
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBaseConversationParticipantFindByConversationResult() {
    return { meta: undefined, results: [] };
}
exports.ConversationParticipantFindByConversationResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.meta !== undefined) {
            exports.ConversationParticipantFindByConversationResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.results) {
            exports.ConversationParticipant.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConversationParticipantFindByConversationResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.meta = exports.ConversationParticipantFindByConversationResultMeta.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.results.push(exports.ConversationParticipant.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            meta: isSet(object.meta) ? exports.ConversationParticipantFindByConversationResultMeta.fromJSON(object.meta) : undefined,
            results: globalThis.Array.isArray(object?.results)
                ? object.results.map((e) => exports.ConversationParticipant.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.meta !== undefined) {
            obj.meta = exports.ConversationParticipantFindByConversationResultMeta.toJSON(message.meta);
        }
        if (message.results?.length) {
            obj.results = message.results.map((e) => exports.ConversationParticipant.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ConversationParticipantFindByConversationResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseConversationParticipantFindByConversationResult();
        message.meta = (object.meta !== undefined && object.meta !== null)
            ? exports.ConversationParticipantFindByConversationResultMeta.fromPartial(object.meta)
            : undefined;
        message.results = object.results?.map((e) => exports.ConversationParticipant.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMessage() {
    return {
        id: "",
        createdAt: 0,
        updatedAt: 0,
        conversationId: "",
        media: undefined,
        senderId: "",
        sentToIds: [],
        receivedByIds: [],
        seenByIds: [],
        deleted: false,
        uniqueness: "",
    };
}
exports.Message = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.createdAt !== 0) {
            writer.uint32(16).uint64(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            writer.uint32(24).uint64(message.updatedAt);
        }
        if (message.conversationId !== "") {
            writer.uint32(34).string(message.conversationId);
        }
        if (message.media !== undefined) {
            exports.MessageMedia.encode(message.media, writer.uint32(42).fork()).ldelim();
        }
        if (message.senderId !== "") {
            writer.uint32(50).string(message.senderId);
        }
        for (const v of message.sentToIds) {
            writer.uint32(58).string(v);
        }
        for (const v of message.receivedByIds) {
            writer.uint32(66).string(v);
        }
        for (const v of message.seenByIds) {
            writer.uint32(74).string(v);
        }
        if (message.deleted === true) {
            writer.uint32(80).bool(message.deleted);
        }
        if (message.uniqueness !== "") {
            writer.uint32(90).string(message.uniqueness);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.createdAt = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.updatedAt = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.conversationId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.media = exports.MessageMedia.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.senderId = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.sentToIds.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.receivedByIds.push(reader.string());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.seenByIds.push(reader.string());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.deleted = reader.bool();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.uniqueness = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
            updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
            conversationId: isSet(object.conversationId) ? globalThis.String(object.conversationId) : "",
            media: isSet(object.media) ? exports.MessageMedia.fromJSON(object.media) : undefined,
            senderId: isSet(object.senderId) ? globalThis.String(object.senderId) : "",
            sentToIds: globalThis.Array.isArray(object?.sentToIds)
                ? object.sentToIds.map((e) => globalThis.String(e))
                : [],
            receivedByIds: globalThis.Array.isArray(object?.receivedByIds)
                ? object.receivedByIds.map((e) => globalThis.String(e))
                : [],
            seenByIds: globalThis.Array.isArray(object?.seenByIds)
                ? object.seenByIds.map((e) => globalThis.String(e))
                : [],
            deleted: isSet(object.deleted) ? globalThis.Boolean(object.deleted) : false,
            uniqueness: isSet(object.uniqueness) ? globalThis.String(object.uniqueness) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.createdAt !== 0) {
            obj.createdAt = Math.round(message.createdAt);
        }
        if (message.updatedAt !== 0) {
            obj.updatedAt = Math.round(message.updatedAt);
        }
        if (message.conversationId !== "") {
            obj.conversationId = message.conversationId;
        }
        if (message.media !== undefined) {
            obj.media = exports.MessageMedia.toJSON(message.media);
        }
        if (message.senderId !== "") {
            obj.senderId = message.senderId;
        }
        if (message.sentToIds?.length) {
            obj.sentToIds = message.sentToIds;
        }
        if (message.receivedByIds?.length) {
            obj.receivedByIds = message.receivedByIds;
        }
        if (message.seenByIds?.length) {
            obj.seenByIds = message.seenByIds;
        }
        if (message.deleted === true) {
            obj.deleted = message.deleted;
        }
        if (message.uniqueness !== "") {
            obj.uniqueness = message.uniqueness;
        }
        return obj;
    },
    create(base) {
        return exports.Message.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.id = object.id ?? "";
        message.createdAt = object.createdAt ?? 0;
        message.updatedAt = object.updatedAt ?? 0;
        message.conversationId = object.conversationId ?? "";
        message.media = (object.media !== undefined && object.media !== null)
            ? exports.MessageMedia.fromPartial(object.media)
            : undefined;
        message.senderId = object.senderId ?? "";
        message.sentToIds = object.sentToIds?.map((e) => e) || [];
        message.receivedByIds = object.receivedByIds?.map((e) => e) || [];
        message.seenByIds = object.seenByIds?.map((e) => e) || [];
        message.deleted = object.deleted ?? false;
        message.uniqueness = object.uniqueness ?? "";
        return message;
    },
};
function createBaseMessageMedia() {
    return { text: "" };
}
exports.MessageMedia = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageMedia();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.text = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { text: isSet(object.text) ? globalThis.String(object.text) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.text !== "") {
            obj.text = message.text;
        }
        return obj;
    },
    create(base) {
        return exports.MessageMedia.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageMedia();
        message.text = object.text ?? "";
        return message;
    },
};
function createBaseMessageCreateOneInput() {
    return { conversationId: "", media: undefined, senderId: "", uniqueness: "" };
}
exports.MessageCreateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.conversationId !== "") {
            writer.uint32(34).string(message.conversationId);
        }
        if (message.media !== undefined) {
            exports.MessageMedia.encode(message.media, writer.uint32(42).fork()).ldelim();
        }
        if (message.senderId !== "") {
            writer.uint32(50).string(message.senderId);
        }
        if (message.uniqueness !== "") {
            writer.uint32(90).string(message.uniqueness);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageCreateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.conversationId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.media = exports.MessageMedia.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.senderId = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.uniqueness = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            conversationId: isSet(object.conversationId) ? globalThis.String(object.conversationId) : "",
            media: isSet(object.media) ? exports.MessageMedia.fromJSON(object.media) : undefined,
            senderId: isSet(object.senderId) ? globalThis.String(object.senderId) : "",
            uniqueness: isSet(object.uniqueness) ? globalThis.String(object.uniqueness) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.conversationId !== "") {
            obj.conversationId = message.conversationId;
        }
        if (message.media !== undefined) {
            obj.media = exports.MessageMedia.toJSON(message.media);
        }
        if (message.senderId !== "") {
            obj.senderId = message.senderId;
        }
        if (message.uniqueness !== "") {
            obj.uniqueness = message.uniqueness;
        }
        return obj;
    },
    create(base) {
        return exports.MessageCreateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageCreateOneInput();
        message.conversationId = object.conversationId ?? "";
        message.media = (object.media !== undefined && object.media !== null)
            ? exports.MessageMedia.fromPartial(object.media)
            : undefined;
        message.senderId = object.senderId ?? "";
        message.uniqueness = object.uniqueness ?? "";
        return message;
    },
};
function createBaseMessageUpdateOneInput() {
    return { id: "", media: undefined };
}
exports.MessageUpdateOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.media !== undefined) {
            exports.MessageMedia.encode(message.media, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageUpdateOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.media = exports.MessageMedia.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            media: isSet(object.media) ? exports.MessageMedia.fromJSON(object.media) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.media !== undefined) {
            obj.media = exports.MessageMedia.toJSON(message.media);
        }
        return obj;
    },
    create(base) {
        return exports.MessageUpdateOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageUpdateOneInput();
        message.id = object.id ?? "";
        message.media = (object.media !== undefined && object.media !== null)
            ? exports.MessageMedia.fromPartial(object.media)
            : undefined;
        return message;
    },
};
function createBaseMessageFindOneInput() {
    return { id: "" };
}
exports.MessageFindOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageFindOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.MessageFindOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageFindOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseMessageFindUniqueInput() {
    return { uniqueness: "" };
}
exports.MessageFindUniqueInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uniqueness !== "") {
            writer.uint32(10).string(message.uniqueness);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageFindUniqueInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.uniqueness = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { uniqueness: isSet(object.uniqueness) ? globalThis.String(object.uniqueness) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.uniqueness !== "") {
            obj.uniqueness = message.uniqueness;
        }
        return obj;
    },
    create(base) {
        return exports.MessageFindUniqueInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageFindUniqueInput();
        message.uniqueness = object.uniqueness ?? "";
        return message;
    },
};
function createBaseMessageRemoveOneInput() {
    return { id: "" };
}
exports.MessageRemoveOneInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageRemoveOneInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.MessageRemoveOneInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageRemoveOneInput();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseMessageFindByConversationFilter() {
    return { conversationId: "" };
}
exports.MessageFindByConversationFilter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.conversationId !== "") {
            writer.uint32(10).string(message.conversationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageFindByConversationFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.conversationId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { conversationId: isSet(object.conversationId) ? globalThis.String(object.conversationId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.conversationId !== "") {
            obj.conversationId = message.conversationId;
        }
        return obj;
    },
    create(base) {
        return exports.MessageFindByConversationFilter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageFindByConversationFilter();
        message.conversationId = object.conversationId ?? "";
        return message;
    },
};
function createBaseMessageFindByConversationOpts() {
    return { limit: 0, offset: 0 };
}
exports.MessageFindByConversationOpts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.limit !== 0) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.offset !== 0) {
            writer.uint32(16).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageFindByConversationOpts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.MessageFindByConversationOpts.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageFindByConversationOpts();
        message.limit = object.limit ?? 0;
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBaseMessageFindByConversationInput() {
    return { filter: undefined, opts: undefined };
}
exports.MessageFindByConversationInput = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.filter !== undefined) {
            exports.MessageFindByConversationFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
        }
        if (message.opts !== undefined) {
            exports.MessageFindByConversationOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageFindByConversationInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = exports.MessageFindByConversationFilter.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.opts = exports.MessageFindByConversationOpts.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            filter: isSet(object.filter) ? exports.MessageFindByConversationFilter.fromJSON(object.filter) : undefined,
            opts: isSet(object.opts) ? exports.MessageFindByConversationOpts.fromJSON(object.opts) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.filter !== undefined) {
            obj.filter = exports.MessageFindByConversationFilter.toJSON(message.filter);
        }
        if (message.opts !== undefined) {
            obj.opts = exports.MessageFindByConversationOpts.toJSON(message.opts);
        }
        return obj;
    },
    create(base) {
        return exports.MessageFindByConversationInput.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageFindByConversationInput();
        message.filter = (object.filter !== undefined && object.filter !== null)
            ? exports.MessageFindByConversationFilter.fromPartial(object.filter)
            : undefined;
        message.opts = (object.opts !== undefined && object.opts !== null)
            ? exports.MessageFindByConversationOpts.fromPartial(object.opts)
            : undefined;
        return message;
    },
};
function createBaseMessageFindByConversationResultMeta() {
    return { offset: 0 };
}
exports.MessageFindByConversationResultMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.offset !== 0) {
            writer.uint32(8).uint64(message.offset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageFindByConversationResultMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.offset !== 0) {
            obj.offset = Math.round(message.offset);
        }
        return obj;
    },
    create(base) {
        return exports.MessageFindByConversationResultMeta.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageFindByConversationResultMeta();
        message.offset = object.offset ?? 0;
        return message;
    },
};
function createBaseMessageFindByConversationResult() {
    return { meta: undefined, results: [] };
}
exports.MessageFindByConversationResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.meta !== undefined) {
            exports.MessageFindByConversationResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.results) {
            exports.Message.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageFindByConversationResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.meta = exports.MessageFindByConversationResultMeta.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.results.push(exports.Message.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            meta: isSet(object.meta) ? exports.MessageFindByConversationResultMeta.fromJSON(object.meta) : undefined,
            results: globalThis.Array.isArray(object?.results) ? object.results.map((e) => exports.Message.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.meta !== undefined) {
            obj.meta = exports.MessageFindByConversationResultMeta.toJSON(message.meta);
        }
        if (message.results?.length) {
            obj.results = message.results.map((e) => exports.Message.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.MessageFindByConversationResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageFindByConversationResult();
        message.meta = (object.meta !== undefined && object.meta !== null)
            ? exports.MessageFindByConversationResultMeta.fromPartial(object.meta)
            : undefined;
        message.results = object.results?.map((e) => exports.Message.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMessageJobPayload() {
    return { id: "" };
}
exports.MessageJobPayload = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageJobPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.MessageJobPayload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMessageJobPayload();
        message.id = object.id ?? "";
        return message;
    },
};
function createBasePublishJobResult() {
    return { jobId: "" };
}
exports.PublishJobResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.jobId !== "") {
            writer.uint32(10).string(message.jobId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublishJobResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.jobId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { jobId: isSet(object.jobId) ? globalThis.String(object.jobId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.jobId !== "") {
            obj.jobId = message.jobId;
        }
        return obj;
    },
    create(base) {
        return exports.PublishJobResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublishJobResult();
        message.jobId = object.jobId ?? "";
        return message;
    },
};
function createBaseWorkersHealthCheckResult() {
    return { ok: false };
}
exports.WorkersHealthCheckResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ok === true) {
            writer.uint32(8).bool(message.ok);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkersHealthCheckResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.ok = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { ok: isSet(object.ok) ? globalThis.Boolean(object.ok) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.ok === true) {
            obj.ok = message.ok;
        }
        return obj;
    },
    create(base) {
        return exports.WorkersHealthCheckResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWorkersHealthCheckResult();
        message.ok = object.ok ?? false;
        return message;
    },
};
exports.DummyServiceDefinition = {
    name: "DummyService",
    fullName: "main.DummyService",
    methods: {
        createOne: {
            name: "CreateOne",
            requestType: exports.DummyCreateOneInput,
            requestStream: false,
            responseType: exports.Dummy,
            responseStream: false,
            options: {},
        },
        updateOne: {
            name: "UpdateOne",
            requestType: exports.DummyUpdateOneInput,
            requestStream: false,
            responseType: exports.Dummy,
            responseStream: false,
            options: {},
        },
        findOne: {
            name: "FindOne",
            requestType: exports.DummyFindOneInput,
            requestStream: false,
            responseType: exports.Dummy,
            responseStream: false,
            options: {},
        },
        removeOne: {
            name: "RemoveOne",
            requestType: exports.DummyRemoveOneInput,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        search: {
            name: "Search",
            requestType: exports.DummySearchInput,
            requestStream: false,
            responseType: exports.DummySearchResult,
            responseStream: false,
            options: {},
        },
    },
};
exports.LoginServiceDefinition = {
    name: "LoginService",
    fullName: "main.LoginService",
    methods: {
        createOne: {
            name: "CreateOne",
            requestType: exports.LoginCreateOneInput,
            requestStream: false,
            responseType: exports.Login,
            responseStream: false,
            options: {},
        },
        findOne: {
            name: "FindOne",
            requestType: exports.LoginFindOneInput,
            requestStream: false,
            responseType: exports.Login,
            responseStream: false,
            options: {},
        },
        findWhere: {
            name: "FindWhere",
            requestType: exports.LoginFindWhereInput,
            requestStream: false,
            responseType: exports.Login,
            responseStream: false,
            options: {},
        },
        findByPlatformId: {
            name: "FindByPlatformId",
            requestType: exports.LoginFindByPlatformIdInput,
            requestStream: false,
            responseType: exports.Login,
            responseStream: false,
            options: {},
        },
        updateOne: {
            name: "UpdateOne",
            requestType: exports.LoginUpdateOneInput,
            requestStream: false,
            responseType: exports.Login,
            responseStream: false,
            options: {},
        },
        removeOne: {
            name: "RemoveOne",
            requestType: exports.LoginRemoveOneInput,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
    },
};
exports.UserServiceDefinition = {
    name: "UserService",
    fullName: "main.UserService",
    methods: {
        createOne: {
            name: "CreateOne",
            requestType: exports.UserCreateOneInput,
            requestStream: false,
            responseType: exports.User,
            responseStream: false,
            options: {},
        },
        updateOne: {
            name: "UpdateOne",
            requestType: exports.UserUpdateOneInput,
            requestStream: false,
            responseType: exports.User,
            responseStream: false,
            options: {},
        },
        findOne: {
            name: "FindOne",
            requestType: exports.UserFindOneInput,
            requestStream: false,
            responseType: exports.User,
            responseStream: false,
            options: {},
        },
        findMe: {
            name: "FindMe",
            requestType: empty_1.Empty,
            requestStream: false,
            responseType: exports.User,
            responseStream: false,
            options: {},
        },
        removeOne: {
            name: "RemoveOne",
            requestType: exports.UserRemoveOneInput,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        search: {
            name: "Search",
            requestType: exports.UserSearchInput,
            requestStream: false,
            responseType: exports.UserSearchResult,
            responseStream: false,
            options: {},
        },
    },
};
exports.PermissionServiceDefinition = {
    name: "PermissionService",
    fullName: "main.PermissionService",
    methods: {
        createOne: {
            name: "CreateOne",
            requestType: exports.PermissionCreateOneInput,
            requestStream: false,
            responseType: exports.Permission,
            responseStream: false,
            options: {},
        },
        createMany: {
            name: "CreateMany",
            requestType: exports.PermissionCreateManyInput,
            requestStream: false,
            responseType: exports.Permissions,
            responseStream: false,
            options: {},
        },
        findOne: {
            name: "FindOne",
            requestType: exports.PermissionFindOneInput,
            requestStream: false,
            responseType: exports.Permission,
            responseStream: false,
            options: {},
        },
        findWhere: {
            name: "FindWhere",
            requestType: exports.PermissionFindWhereInput,
            requestStream: false,
            responseType: exports.Permission,
            responseStream: false,
            options: {},
        },
        findWhereMany: {
            name: "FindWhereMany",
            requestType: exports.PermissionFindWhereManyInput,
            requestStream: false,
            responseType: exports.Permissions,
            responseStream: false,
            options: {},
        },
        findWhereOrStar: {
            name: "FindWhereOrStar",
            requestType: exports.PermissionFindWhereOrStarInput,
            requestStream: false,
            responseType: exports.Permission,
            responseStream: false,
            options: {},
        },
        findByPermitted: {
            name: "FindByPermitted",
            requestType: exports.PermissionFindByPermittedInput,
            requestStream: false,
            responseType: exports.PermissionFindByPermittedResult,
            responseStream: false,
            options: {},
        },
        findByEntity: {
            name: "FindByEntity",
            requestType: exports.PermissionFindByEntityInput,
            requestStream: false,
            responseType: exports.PermissionFindByEntityResult,
            responseStream: false,
            options: {},
        },
        findAllActions: {
            name: "FindAllActions",
            requestType: exports.PermissionFindAllActionsInput,
            requestStream: false,
            responseType: exports.PermissionFindAllActionsResult,
            responseStream: false,
            options: {},
        },
        validateOne: {
            name: "ValidateOne",
            requestType: exports.PermissionValidateOneInput,
            requestStream: false,
            responseType: exports.PermissionValidateOneResult,
            responseStream: false,
            options: {},
        },
        removeOne: {
            name: "RemoveOne",
            requestType: exports.PermissionRemoveOneInput,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        removeWhere: {
            name: "RemoveWhere",
            requestType: exports.PermissionRemoveWhereInput,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        removeWhereMany: {
            name: "RemoveWhereMany",
            requestType: exports.PermissionRemoveWhereManyInput,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        removeAllActions: {
            name: "RemoveAllActions",
            requestType: exports.PermissionRemoveAllActionsInput,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
    },
};
exports.UserFollowServiceDefinition = {
    name: "UserFollowService",
    fullName: "main.UserFollowService",
    methods: {
        createOne: {
            name: "CreateOne",
            requestType: exports.UserFollowCreateOneInput,
            requestStream: false,
            responseType: exports.Follower,
            responseStream: false,
            options: {},
        },
        removeOne: {
            name: "RemoveOne",
            requestType: exports.UserFollowRemoveOneInput,
            requestStream: false,
            responseType: exports.Follower,
            responseStream: false,
            options: {},
        },
        findFollowers: {
            name: "FindFollowers",
            requestType: exports.UserFindFollowersInput,
            requestStream: false,
            responseType: exports.UserFindFollowersResult,
            responseStream: false,
            options: {},
        },
        findFollowees: {
            name: "FindFollowees",
            requestType: exports.UserFindFolloweesInput,
            requestStream: false,
            responseType: exports.UserFindFolloweesResult,
            responseStream: false,
            options: {},
        },
    },
};
exports.ConversationServiceDefinition = {
    name: "ConversationService",
    fullName: "main.ConversationService",
    methods: {
        createOne: {
            name: "CreateOne",
            requestType: exports.ConversationCreateOneInput,
            requestStream: false,
            responseType: exports.Conversation,
            responseStream: false,
            options: {},
        },
        updateOne: {
            name: "UpdateOne",
            requestType: exports.ConversationUpdateOneInput,
            requestStream: false,
            responseType: exports.Conversation,
            responseStream: false,
            options: {},
        },
        findOne: {
            name: "FindOne",
            requestType: exports.ConversationFindOneInput,
            requestStream: false,
            responseType: exports.Conversation,
            responseStream: false,
            options: {},
        },
        removeOne: {
            name: "RemoveOne",
            requestType: exports.ConversationRemoveOneInput,
            requestStream: false,
            responseType: exports.Conversation,
            responseStream: false,
            options: {},
        },
        findByParticipant: {
            name: "FindByParticipant",
            requestType: exports.ConversationFindByParticipantInput,
            requestStream: false,
            responseType: exports.ConversationFindByParticipantResult,
            responseStream: false,
            options: {},
        },
    },
};
exports.ConversationParticipantServiceDefinition = {
    name: "ConversationParticipantService",
    fullName: "main.ConversationParticipantService",
    methods: {
        createOne: {
            name: "CreateOne",
            requestType: exports.ConversationParticipantCreateOneInput,
            requestStream: false,
            responseType: exports.ConversationParticipant,
            responseStream: false,
            options: {},
        },
        findOne: {
            name: "FindOne",
            requestType: exports.ConversationParticipantFindOneInput,
            requestStream: false,
            responseType: exports.ConversationParticipant,
            responseStream: false,
            options: {},
        },
        removeOne: {
            name: "RemoveOne",
            requestType: exports.ConversationParticipantRemoveOneInput,
            requestStream: false,
            responseType: exports.ConversationParticipant,
            responseStream: false,
            options: {},
        },
        findByConversation: {
            name: "FindByConversation",
            requestType: exports.ConversationParticipantFindByConversationInput,
            requestStream: false,
            responseType: exports.ConversationParticipantFindByConversationResult,
            responseStream: false,
            options: {},
        },
    },
};
exports.MessageServiceDefinition = {
    name: "MessageService",
    fullName: "main.MessageService",
    methods: {
        createOne: {
            name: "CreateOne",
            requestType: exports.MessageCreateOneInput,
            requestStream: false,
            responseType: exports.Message,
            responseStream: false,
            options: {},
        },
        updateOne: {
            name: "UpdateOne",
            requestType: exports.MessageUpdateOneInput,
            requestStream: false,
            responseType: exports.Message,
            responseStream: false,
            options: {},
        },
        findOne: {
            name: "FindOne",
            requestType: exports.MessageFindOneInput,
            requestStream: false,
            responseType: exports.Message,
            responseStream: false,
            options: {},
        },
        findUnique: {
            name: "FindUnique",
            requestType: exports.MessageFindUniqueInput,
            requestStream: false,
            responseType: exports.Message,
            responseStream: false,
            options: {},
        },
        removeOne: {
            name: "RemoveOne",
            requestType: exports.MessageRemoveOneInput,
            requestStream: false,
            responseType: exports.Message,
            responseStream: false,
            options: {},
        },
        findByConversation: {
            name: "FindByConversation",
            requestType: exports.MessageFindByConversationInput,
            requestStream: false,
            responseType: exports.MessageFindByConversationResult,
            responseStream: false,
            options: {},
        },
    },
};
exports.WorkersServiceDefinition = {
    name: "WorkersService",
    fullName: "main.WorkersService",
    methods: {
        publishJob: {
            name: "PublishJob",
            requestType: exports.PublishJobInput,
            requestStream: false,
            responseType: exports.PublishJobResult,
            responseStream: false,
            options: {},
        },
        healthCheck: {
            name: "HealthCheck",
            requestType: empty_1.Empty,
            requestStream: false,
            responseType: exports.WorkersHealthCheckResult,
            responseStream: false,
            options: {},
        },
    },
};
function longToNumber(long) {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=combined.js.map