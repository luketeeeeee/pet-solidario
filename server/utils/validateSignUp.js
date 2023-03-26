// função para a validação do cadastro
import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const validateSignUp = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().label('Nome de usuário'),
        phoneNumber: Joi.string().required().label('Celular'),
        email: Joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Senha'),
        confirmPassword: Joi.string().required().label('Confirmar Senha'),
    });

    return schema.validate(data);
};

export default validateSignUp;
