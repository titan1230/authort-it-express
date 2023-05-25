import { Router } from "express"
const router = Router();

//import routes
import draftRoute from "./op"

//router router
router.get("/", (req, res) => {

    res.send("<h1>API💻💻</h1>")
})


//use routes
router.use("/op", draftRoute)

export default router;