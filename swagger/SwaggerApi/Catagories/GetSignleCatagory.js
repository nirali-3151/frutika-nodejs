module.exports = {
    get: {
        tags: ["Catagories"],
        parameters: [
            {
                in: "query",
                name: "id",
                type:"integer",
                required: true,
            }],
        responses: {
            200: {
                "description": "object of catagory"
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