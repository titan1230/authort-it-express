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
// This is referrence to the database
const mongoose_1 = __importStar(require("mongoose"));
//Schema [Table in SQL terms]
// we are using mongoose so it will handle the schema and will create a referrence in memory 
// later we can use mongoose function and perform operations using it
const DraftSchema = new mongoose_1.Schema({
    usr_id: mongoose_1.default.SchemaTypes.String,
    content: {
        title: mongoose_1.default.SchemaTypes.String,
        description: mongoose_1.default.SchemaTypes.String,
        body: mongoose_1.default.SchemaTypes.String,
        category: mongoose_1.default.SchemaTypes.String,
        tags: mongoose_1.default.SchemaTypes.String
    },
    settings: {
        link: mongoose_1.default.SchemaTypes.String,
        img_url: mongoose_1.default.SchemaTypes.String,
        publishedOn: { type: mongoose_1.default.SchemaTypes.String, default: Date.now() },
    },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Draft', DraftSchema);
