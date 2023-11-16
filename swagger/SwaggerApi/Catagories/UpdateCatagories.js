module.exports = {
    post: {
        tags: ["Catagories"],
        "requestBody": {
            "content": {
                "multipart/form-data": {
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "integer",
                            },
                            "name": {
                                "type": "String",
                            },
                            "englishname": {
                                "type": "String"
                            },
                            "colorcode": {
                                "type": "String"
                            },
                            "image": {
                                "type": "string",
                                "format": "binary"
                            },
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