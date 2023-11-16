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
                            address: {
                                "example": "any"
                            }
                        }
                    }
                }
            }
        },
        responses: {
            200: {
                "description": "ADD_ADDRESS_SUCCESS"
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