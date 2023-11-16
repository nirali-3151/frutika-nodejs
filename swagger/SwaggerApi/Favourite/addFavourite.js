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
                            product_id: {
                                "example": 2,
                                "type":"integer"
                            }
                        }
                    }
                }
            }
        },
        responses: {
            200: {
                "description": "FAVOURITE_ADD_SUCCESS"
            },
            401: {
                "description": "Please Enter Valid Data"
            },
            500: {
                "description": "Internal Server Error"
            }
        }
    }
}