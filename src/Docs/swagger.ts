import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.3",
    info: {
        title: "Api Ibero CANMI",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3581"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            state: {
                type: "object",
                required: ["State", "Initials", "Status"],
                properties: {
                    State: {
                        type: "String",
                        example: "CDMX"
                    },
                    Initials: {
                        type: "integer",
                        format: "int64",
                        example: 198772
                    },
                    Status: {
                        type: "Boolean",
                        example: true
                    }
                }
            }
        }
    }
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./src/Routes/*.ts"]
};

export default swaggerJSDoc(swaggerOptions);