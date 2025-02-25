import {serve} from "bun"

const handler = (_req: Request) => {
    return new Response("Hello, Bun!", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
    });
};

serve({
    fetch: handler,
    port: 3000,
});