const joi = require('joi');
//validation schema for user login
const loginSchema = joi
    .object({
        body: joi.object({
            email: joi
                .string()
                .email({
                    minDomainSegments: 2,
                    tlds: {
                        allow: ['com', 'net', 'in', 'co', 'org', 'guru', 'etc', 'info'],
                    },
                })
                .strict()
                .trim()
                .required(),
            //.error(new Error('Invalid email')),
            password: joi.string().strict().trim().required().error(new Error('Invalid password')),
            type: joi.string().strict().trim().valid('user', 'admin').required(),
        }),
    })
    .unknown(true);
// Creates a validation schema for signing up a new users.
const userSignupValidationSchema = joi
    .object({
        body: joi.object({
            name: joi
                .string()
                .regex(/^[A-Za-z\s]+$/)
                .required(),
            lastName: joi
                .string()
                .regex(/^[A-Za-z\s]+$/)
                .optional(),
            phoneNumber: joi
                .string()
                .regex(/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/)
                .length(10)
                .trim()
                .required()
                .error(new Error('Valid phone number only allowed')),
            email: joi
                .string()
                .email({
                    minDomainSegments: 2,
                    tlds: {
                        allow: ['com', 'net', 'in', 'co', 'org', 'guru', 'etc', 'info'],
                    },
                })
                .strict()
                .trim()
                .required(),
            password: joi.string().required(),
            roleType: joi.string().strict().trim().required(),
        }),
    })
    .unknown(true);
//validation schema for delete user
const deleteUserSchema = joi
    .object({
        params: {
            userId: joi.string().required(),
        },
        body: {
            isActive: joi.boolean().required(),
        }
    })
    .unknown(true);
module.exports = {
    loginSchema,
    userSignupValidationSchema,
};
