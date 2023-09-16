const server = Bun.serve({
    port: 3001,
    fetch(req) {
        const data = {
            greeting: 'Hello World'
        }

        return new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
});

console.log(`Server running at ${server.port}!`);