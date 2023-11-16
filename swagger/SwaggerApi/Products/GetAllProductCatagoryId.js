module.exports = {
    get: {
        tags: ["Products"],
        parameters: [
            {
                in: "query",
                name: "id",
                type:"integer",
                required: true,
            }],
        responses: {
            200: {
                "description": "ok"
            },
            400: {
                "description": "Bad Request"
            },
            500: {
                "description": "Internal Server Error"
            }
        }
    }
}