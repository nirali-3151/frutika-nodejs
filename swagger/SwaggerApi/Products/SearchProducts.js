module.exports = {
    get: {
        tags: ["Products"],
        parameters: [
            {
                in: "query",
                name: "product_name",
                required: true,
            }],
        responses: {
            200: {
                "description": "product object"
            },
            401: {
                "description": "wrong request send by client"
            },
            500: {
                "description": "Internal Server Error"
            }
        }
    }
}