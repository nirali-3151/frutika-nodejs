module.exports = {
    post: {
        tags: ["Auth_user"],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: "object",
                        properties: {
                            "email": {
                                "example": "admin@gmail.com"
                            },
                            "password": {
                                "example": "admin123"
                            }
                        }
                    }
                }
            }
        },
        responses: {
            200: {
                "description": "LOGIN_SUCCESS"
            },
            409: {
                "description": "Email or password is incorrect!"
            }
        }
    }
}