import mongoose from 'mongoose';
import SchemaDraft from '../../Schemas/draft';
import SchemaBlog from '../../Schemas/blogs';
import { Request, Response, Router } from "express"

const express = require('express');
const app = express();

// Middleware for parsing Json data 
app.use(express.json());
const router = Router();

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
router.get("/", async (req, res) => {
    res.status(200)
    res.send("Welcome to our API 🌏")
})

//---------------------------------------------------- CREATE || EDIT || GET || DELETE ----------------------------------------------------

// ------------------ GET OPERATIONS -----------------

// GET ALL DRAFTS WITH SAME USERID

router.get("/draft/all/:usr_id", async (req, res) => {
    const id = req.params.usr_id
    
    try {
        await mongoose.connect(process.env.MONGODB_URI!, {dbName: "Author-It"}).then(() => console.log("connected"))
        const find = await SchemaDraft.find({usr_id: id})

        if (find[0]) {
            res.status(200).json(find)
        } else {
            res.status(400).send("Data not found")
        }

    } catch (error) {
        res.status(400).send("Data not found")
        console.log(error)
    } finally {
        mongoose.disconnect()
    }

})

// GET ALL BLOGPOST WITH SAME USERID

router.get("/blogs/all/:usr_id", async (req, res) => {
    const id = req.params.usr_id
    
    try {
        await mongoose.connect(process.env.MONGODB_URI!, {dbName: "Author-It"}).then(() => console.log("connected"))
        const find = await SchemaBlog.find({usr_id: id})

        if (find[0]) {
            res.status(200).json(find)
        } else {
            res.status(400).send("Data not found")
        }

    } catch (error) {
        res.status(400).send("Data not found")
        console.log(error)
    } finally {
        mongoose.disconnect()
    }

})

// GET SPECIFIC DRAFT WITH SAME ID

router.get("/draft/one/:id", async (req, res) => {
    const id = req.params.id
    
    try {
        await mongoose.connect(process.env.MONGODB_URI!, {dbName: "Author-It"}).then(() => console.log("connected"))
        const find = await SchemaDraft.findById(id)

        if (find) {
            res.status(200).json(find)
        } else {
            res.status(400).send("Data not found")
        }

    } catch (error) {
        res.status(400).send("Data not found")
        console.log(error)
    } finally {
        mongoose.disconnect()
    }

})

// GET SPECIFIC BLOGPOST WITH SAME ID

router.get("/blogs/one/:id", async (req, res) => {
    const id = req.params.id

    try {
        await mongoose.connect(process.env.MONGODB_URI!, {dbName: "Author-It"}).then(() => console.log("connected"))
        const find = await SchemaBlog.findById(id)

        if (find) {
            res.status(200).json(find)
        } else {
            res.status(400).send("Data not found")
        }

    } catch (error) {
        res.status(400).send("Data not found")
        console.log(error)
    } finally {
        mongoose.disconnect()
    }
})

// EDIT BY DATA DRAFT BY ID
router.put("/data/draft/:id", async (req, res) => {
    const id = req.params.id
    try {
        await mongoose.connect(process.env.MONGODB_URI!, {dbName: "Author-It"}).then(() => console.log("connected"))
        const find = await SchemaDraft.findByIdAndUpdate(id, req.body);
        
        if (!find) {
            return res.status(404).json({message: `Cannot find Blog with this ID ${id}`});
        }
        res.status(200).json(find)

    } catch (error) {
        console.log(error)
        res.status(400).send("Data not found")
    } finally {
        mongoose.disconnect()
    }

})

// EDIT BY DATA BLOGPOST BY ID
router.put("/data/blogs/:id", async (req, res) => {
    const id = req.params.id
    try {
        await mongoose.connect(process.env.MONGODB_URI!, {dbName: "Author-It"}).then(() => console.log("connected"))
        const find = await SchemaBlog.findByIdAndUpdate(id, req.body);
        
        if (!find) {
            return res.status(404).json({message: `Cannot find Blog with this ID ${id}`});
        }
        res.status(200).json(find)

    } catch (error) {
        console.log(error)
        res.status(400).send("Data not found")
    } finally {
        mongoose.disconnect()
    }

})

// CREATING NEW BLOGPOST
    router.post("/blogs", async(req, res) => {
    // get data from server

    try {
        // send data to the 
        await mongoose.connect(process.env.MONGODB_URI!, {dbName: "Author-It"}).then(() => console.log("connected"))
        const blogPost = await SchemaBlog.create(req.body)
        blogPost.save()
        console.log(blogPost)
        res.status(200).send("Data created Successfully");
        
    } catch (error) {
        console.log(error)
        res.status(400).send("Data not found")
    } finally {
        mongoose.disconnect()
    }

})

// CREATING NEW DRAFT
router.post("/draft", async(req, res) => {
    // get data from server

    try {
        // send data to the 
        await mongoose.connect(process.env.MONGODB_URI!, {dbName: "Author-It"}).then(() => console.log("connected"))
        const blogPost = await SchemaDraft.create(req.body)
        blogPost.save()
        console.log(blogPost)
        res.status(200).send("Data created Successfully");
        
    } catch (error) {
        console.log(error)
        res.status(400).send("Data not found")
    } finally {
        mongoose.disconnect()
    }

})

// DELETE DRAFT BY ID
router.delete("/draft/:id", async(req, res) => {

    try {
        res.send("This does nothing yet LOL")
    } catch (error) {
        console.log(error)
        res.status(400).send("Data not found")
    } finally {
        mongoose.disconnect()
    }

})

// DELETE BLOG POST BY ID
router.delete("/blogs/:id", async(req, res) => {

    try {
        res.send("This does nothing yet LOL")
    } catch (error) {
        console.log(error)
        res.status(400).send("Data not found")
    } finally {
        mongoose.disconnect()
    }

})

export default router;
