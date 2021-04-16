const Joi = require("joi");

const schema = Joi.object().keys({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    username: Joi.string().min(3).max(30).required(),
    
    phoneNumber: Joi.string().min(3).max(30).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
        .required(),
    
    address: Joi.string().allow("").optional(),
    
    
    
    customField: Joi.string().allow("").optional(),
    
    description: Joi.string().allow("").optional(),
    password: Joi.string().min(3).max(30).required(),
    _id: Joi.string().allow("").optional(),
    
    
});

const validate = (data) => {
    const result = schema.validate(data);
    data.createdAt = new Date();
    data.updatedAt = new Date();
    result.value = data;
    return result;
};

export default validate;