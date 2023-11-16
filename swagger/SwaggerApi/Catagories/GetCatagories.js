module.exports = {
    get: {
        tags: ["Catagories"],
        description: "Get All Catagories",
        responses: {
            200: {
                "description": "Catagory list"
            },
            500: {
                "description": "Internal Server Error"
            }
        }
    }
}