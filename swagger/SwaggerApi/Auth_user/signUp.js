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
                            "username": {
                                "example": "admin"
                            },
                            "mobile": {
                                "example": "4545454545"
                            },
                            "email": {
                                "example": "email@gmail.vom"
                            },
                            "password": {
                                "example": "123456",
                                type:"String"
                            }
                        }
                    }
                }
            }
        },
        responses: {
            200: {
                "description": "The user has been registerd with us!"
            },
            409: {
                "description": "This user is already in use!"
            },
            400: {
                "description": "Please Enter Valid Data"
            }
        }
    }
}