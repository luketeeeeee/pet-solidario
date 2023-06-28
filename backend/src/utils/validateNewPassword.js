import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const validateNewPassword = (data) => {
    const schema = Joi.object({
        newPassword: passwordComplexity().required().label('Nova senha'),
        confirmNewPassword: Joi.string().required().label('Confirma nova senha'),
    });

    return schema.validate(data);
};

export default validateNewPassword;
