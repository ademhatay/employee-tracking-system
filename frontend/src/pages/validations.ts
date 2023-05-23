import  * as yup from 'yup';

const requiredMessage = 'Bu alan boş bırakılamaz';
const emailMessage = 'Geçerli bir e-posta adresi giriniz';
const getCharacterValidationError = (str: string) => {
	return `Your password must have at least 1 ${str} character`;
  };

const contactSchema = yup.object({
	firstName: yup.string().required(requiredMessage),
	lastName: yup.string().required(requiredMessage),
	email: yup.string().email(emailMessage).required(requiredMessage),
	password: yup.string()
    .required("Please enter a password")
    // check minimum characters
    .min(8, "Password must have at least 8 characters")
    // different error messages for different requirements
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  confirmPassword: yup.string()
  .oneOf([yup.ref('password')], 'Passwords must match'),
	birdhdate: yup.string().required(requiredMessage),
	occupation: yup.string().required(requiredMessage),
});

export default contactSchema;