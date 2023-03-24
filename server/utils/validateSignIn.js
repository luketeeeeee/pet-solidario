// função para a validação do login
import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const validateSignIn = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Senha'),
    });

    return schema.validate(data);
};

export default validateSignIn;
