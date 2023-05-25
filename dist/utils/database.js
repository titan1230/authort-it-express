"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
//import { createConnection } from "mongoose"
const mongoose_1 = __importDefault(require("mongoose"));
let isConnected = false;
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    if (isConnected)
        return;
    try {
        // dont use mongo client to connect || use mongoose
        mongoose_1.default.createConnection(process.env.MONGODB_URI, {
            dbName: "Author-It",
            keepAlive: true
        });
        isConnected = true;
        console.log('MongoDB connected 😀');
    }
    catch (error) {
        console.log(error);
    }
});
exports.connectToDB = connectToDB;
