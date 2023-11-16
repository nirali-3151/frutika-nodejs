module.exports = {
    get: {
        tags: ["Products"],
        description: "Get All Products",
        responses: {
            200: {
                "description": "List of products"
            },
            500: {
                "description": "Internal Server Error"
            }
        }
    }
}