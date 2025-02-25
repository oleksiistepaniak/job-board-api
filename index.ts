import {serve} from "bun";
import dotenv from "dotenv";
import {AppConf} from "./src/conf/AppConf.ts";

dotenv.config();

const appConf = new AppConf(process.env.PORT, process.env.DB_URL, process.env.JWT_SECRET);

const handler = (_req: Request) => {
    return new Response("Hello, Bun!", {
        status: 200,
        headers: {"Content-Type": "text/plain"},
    });
};

serve({
    fetch: handler,
    port: appConf.PORT,
});