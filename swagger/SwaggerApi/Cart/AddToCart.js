module.exports = {
    post: {
        tags: ["Cart"],
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
                            product_id: {
                                "example": 1
                            },
                            quantity: {
                                "example": "2"
                            },
                            weight: {
                                "example": "200"
                            },
                            price: {
                                "example": "1000"
                            },
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