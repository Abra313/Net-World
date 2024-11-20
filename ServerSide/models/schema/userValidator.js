const yup = require('yup');

const userSchema = yup.object().shape({
  userName: yup
    .string()
    .matches(/^[a-zA-Z0-9]+$/, 'Username should only contain letters and numbers')
    .min(3, 'Username must be at least 3 characters long')
    .required('Username is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
    .required('Password is required'),
  age: yup
    .number()
    .min(8, 'You must be at least 8 years old to register')
    .required('Age is required'),
});

module.exports = userSchema;
