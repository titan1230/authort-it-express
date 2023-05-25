"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
(0, dotenv_1.config)();
const index_1 = __importDefault(require("../routes/index"));
function createApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.get('/', (req, res) => {
        res.status(200);
        res.send("Welcome to root URL of Server 😀");
    });
    app.use("/api", index_1.default);
    return app;
}
exports.createApp = createApp;
