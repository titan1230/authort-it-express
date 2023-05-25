"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//import routes
const op_1 = __importDefault(require("./op"));
//router router
router.get("/", (req, res) => {
    res.send("<h1>API💻💻</h1>");
});
//use routes
router.use("/op", op_1.default);
exports.default = router;
