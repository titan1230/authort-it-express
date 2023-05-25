import { config } from 'dotenv';
config();

import { createApp } from "./utils/createApp"
import { connectToDB } from "./utils/database";
connectToDB();

const PORT = process.env.PORT! || 3001;

async function main() {
    const app = createApp()

    app.get('/', (req, res) => {
        res.status(200);
        res.send("Welcome to root URL of Server 😀");
    });

    app.listen(PORT, () => console.log(`Running on port ${PORT}`))


}

main()