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
const mongoose_1 = __importDefault(require("mongoose"));
const draft_1 = __importDefault(require("../../Schemas/draft"));
const blogs_1 = __importDefault(require("../../Schemas/blogs"));
const express_1 = require("express");
const express = require('express');
const app = express();
// Middleware for parsing Json data 
app.use(express.json());
const router = (0, express_1.Router)();
// sample post data
const samplePostData = {
    usr_id: 'sample-uid',
    params: {
        views: 100,
        likes: 50,
        status: 'active',
    },
    content: {
        title: 'Sample Post Title',
        description: 'This is a sample post description.',
        body: 'This is the main content of the sample post.',
    },
    settings: {
        publishedOn: new Date(),
        visibilityCountry: 'United States',
        link: 'https://example.com/sample-post',
        url: '/sample-post',
    },
};
// Testing the functioning of API
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200);
    res.send("Welcome to our API 🌏");
}));
//---------------------------------------------------- CREATE || EDIT || GET || DELETE ----------------------------------------------------
// ------------------ GET OPERATIONS -----------------
// GET ALL DRAFTS WITH SAME USERID
router.get("/draft/all/:usr_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.usr_id;
    try {
        yield mongoose_1.default.connect(process.env.MONGODB_URI, { dbName: "Author-It" }).then(() => console.log("connected"));
        const find = yield draft_1.default.find({ usr_id: id });
        if (find[0]) {
            res.status(200).json(find);
        }
        else {
            res.status(400).send("Data not found");
        }
    }
    catch (error) {
        res.status(400).send("Data not found");
        console.log(error);
    }
    finally {
        mongoose_1.default.disconnect();
    }
}));
// GET ALL BLOGPOST WITH SAME USERID
router.get("/blogs/all/:usr_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.usr_id;
    try {
        yield mongoose_1.default.connect(process.env.MONGODB_URI, { dbName: "Author-It" }).then(() => console.log("connected"));
        const find = yield blogs_1.default.find({ usr_id: id });
        if (find[0]) {
            res.status(200).json(find);
        }
        else {
            res.status(400).send("Data not found");
        }
    }
    catch (error) {
        res.status(400).send("Data not found");
        console.log(error);
    }
    finally {
        mongoose_1.default.disconnect();
    }
}));
// GET SPECIFIC DRAFT WITH SAME ID
router.get("/draft/one/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield mongoose_1.default.connect(process.env.MONGODB_URI, { dbName: "Author-It" }).then(() => console.log("connected"));
        const find = yield draft_1.default.findById(id);
        if (find) {
            res.status(200).json(find);
        }
        else {
            res.status(400).send("Data not found");
        }
    }
    catch (error) {
        res.status(400).send("Data not found");
        console.log(error);
    }
    finally {
        mongoose_1.default.disconnect();
    }
}));
// GET SPECIFIC BLOGPOST WITH SAME ID
router.get("/blogs/one/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield mongoose_1.default.connect(process.env.MONGODB_URI, { dbName: "Author-It" }).then(() => console.log("connected"));
        const find = yield blogs_1.default.findById(id);
        if (find) {
            res.status(200).json(find);
        }
        else {
            res.status(400).send("Data not found");
        }
    }
    catch (error) {
        res.status(400).send("Data not found");
        console.log(error);
    }
    finally {
        mongoose_1.default.disconnect();
    }
}));
// EDIT BY DATA DRAFT BY ID
router.put("/data/draft/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield mongoose_1.default.connect(process.env.MONGODB_URI, { dbName: "Author-It" }).then(() => console.log("connected"));
        const find = yield draft_1.default.findByIdAndUpdate(id, req.body);
        if (!find) {
            return res.status(404).json({ message: `Cannot find Blog with this ID ${id}` });
        }
        res.status(200).json(find);
    }
    catch (error) {
        console.log(error);
        res.status(400).send("Data not found");
    }
    finally {
        mongoose_1.default.disconnect();
    }
}));
// EDIT BY DATA BLOGPOST BY ID
router.put("/data/blogs/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield mongoose_1.default.connect(process.env.MONGODB_URI, { dbName: "Author-It" }).then(() => console.log("connected"));
        const find = yield blogs_1.default.findByIdAndUpdate(id, req.body);
        if (!find) {
            return res.status(404).json({ message: `Cannot find Blog with this ID ${id}` });
        }
        res.status(200).json(find);
    }
    catch (error) {
        console.log(error);
        res.status(400).send("Data not found");
    }
    finally {
        mongoose_1.default.disconnect();
    }
}));
// CREATING NEW BLOGPOST
router.post("/blogs", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get data from server
    try {
        // send data to the 
        yield mongoose_1.default.connect(process.env.MONGODB_URI, { dbName: "Author-It" }).then(() => console.log("connected"));
        const blogPost = yield blogs_1.default.create(req.body);
        blogPost.save();
        console.log(blogPost);
        res.status(200).send("Data created Successfully");
    }
    catch (error) {
        console.log(error);
        res.status(400).send("Data not found");
    }
    finally {
        mongoose_1.default.disconnect();
    }
}));
// CREATING NEW DRAFT
router.post("/draft", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get data from server
    try {
        // send data to the 
        yield mongoose_1.default.connect(process.env.MONGODB_URI, { dbName: "Author-It" }).then(() => console.log("connected"));
        const blogPost = yield draft_1.default.create(req.body);
        blogPost.save();
        console.log(blogPost);
        res.status(200).send("Data created Successfully");
    }
    catch (error) {
        console.log(error);
        res.status(400).send("Data not found");
    }
    finally {
        mongoose_1.default.disconnect();
    }
}));
// DELETE DRAFT BY ID
router.delete("/draft/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("This does nothing yet LOL");
    }
    catch (error) {
        console.log(error);
        res.status(400).send("Data not found");
    }
    finally {
        mongoose_1.default.disconnect();
    }
}));
// DELETE BLOG POST BY ID
router.delete("/blogs/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("This does nothing yet LOL");
    }
    catch (error) {
        console.log(error);
        res.status(400).send("Data not found");
    }
    finally {
        mongoose_1.default.disconnect();
    }
}));
exports.default = router;
