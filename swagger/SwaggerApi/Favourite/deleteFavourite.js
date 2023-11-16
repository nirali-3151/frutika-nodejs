module.exports = {
    post: {
        tags: ["Favourite"],
        security: [{
            bearerAuth: []
        }],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: "object",
                        properties: {
                            "product_id": {
                                type:"integer",
                                example: 2
                            }
                        }
                    }
                }
            }
        },
        responses: {
            200: {
                "description": "DELETE_SUCCESS"
            },
            401: {
                "description": "Bad Request"
            },
            500: {
                "description": "Internal Server Error"
            }
        }
    }
}