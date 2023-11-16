module.exports = {
    post: {
        tags: ["Addess"],
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
                            "id": {
                                type:"integer",
                                example: "2"
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