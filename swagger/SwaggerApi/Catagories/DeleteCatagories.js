module.exports = {
    post: {
        tags: ["Catagories"],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: "object",
                        properties: {
                            "id": {
                                type: "integer",
                                example: 3
                            }
                        }
                    }
                }
            }
        },
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
