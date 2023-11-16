module.exports = {
    post: {
        tags: ["Products"],
        consumes: ["multipart/form-data"],
        parameters: [
            {
                in: "formData",
                name: "id",
                type: "integer",
                required: true,
            },
            {
                in: "formData",
                name: "image",
                type: "file",
                required: true,
                description: "The file to upload"
            }, 
            {
                in: "formData",
                name: "name",
                type: "String",
            }, 
            {
                in: "formData",
                name: "pro_cat_id",
                type: "String",
            }, {
                in: "formData",
                name: "price",
                type: "String",
            },
            {
                in: "formData",
                name: "weight",
                type: "String",
            },
            {
                in: "formData",
                name: "description",
                type: "String",
            },
            {
                in: "formData",
                name: "nutrition",
                type: "String",
            },
            {
                in: "formData",
                name: "rating",
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