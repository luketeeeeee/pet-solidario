const validateSignIn = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Senha'),
    });

    return schema.validate(data);
};

export default validateSignIn;
