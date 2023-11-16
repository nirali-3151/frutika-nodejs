module.exports = {
    post: {
        tags: ["User"],
        consumes: ["multipart/form-data"],
        parameters: [
            {
                in: "formData",
                name: "image",
                type: "file",
                required: true,
                description: "The file to upload"
            },
            {
                in: "formData",
                name: "id",
                type: "String",
            },
            {
                in: "formData",
                name: "firstname",
                type: "String",
            },
            {
                in: "formData",
                name: "lastname",
                type: "String",
            },
            {
                in: "formData",
                name: "email",
                type: "String",
            },
            {
                in: "formData",
                name: "mobile",
                type: "String",
            },
            {
                in: "formData",
                name: "address",
                type: "String",
            },
            {
                in: "formData",
                name: "gender",
                type: "String",
            }],
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