"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("sequelize/types");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define('User', {
    name: {
        type: types_1.DataTypes.STRING
    },
    email: {
        type: types_1.DataTypes.STRING
    },
    estado: {
        type: types_1.DataTypes.BOOLEAN
    },
});
exports.default = User;
//# sourceMappingURL=user.js.map