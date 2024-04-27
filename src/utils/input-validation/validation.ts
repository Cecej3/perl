import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
    firstname: Yup.string().required("your first name is required"),
    lastname: Yup.string().required("your last name is required"),
    email: Yup.string()
        .required("email address is required")
        .email("invalid email format"),
    password: Yup.string().required("your password is required"),
});

export const loginSchema = Yup.object().shape({
	email: Yup.string()
		.required("email address is required")
		.email("invalid email format"),
	password: Yup.string().required("your password is required"),
});

export const staffSchema = Yup.object().shape({
	firstname: Yup.string().required("your first name is required"),
	lastname: Yup.string().required("your last name is required"),
	staff_id: Yup.number().required("your staff id is required"),
	phone_number: Yup.string().required("your phone number is required"),
});

export const studentSchema = Yup.object().shape({
	firstname: Yup.string().required("your first name is required"),
	lastname: Yup.string().required("your last name is required"),
	matric_no: Yup.number().required("your staff id is required")
});


const isNumberValid = /^[0]+[7-9]+[0-1]+[0-9]{8}$/; //validates user phone number input

const signup_Schema = Yup.object({
    firstName: Yup.string().required('first name is required'),
    lastName: Yup.string().required('last name is required'),
    email: Yup.string().email('Invalid email address').required('email is required'),
    businessName: Yup.string().required('business name is required'),
    phoneNumber: Yup.string().matches(isNumberValid, 'invalid phone number').required('phone number is required'),
    password: Yup.string().required('password is required'),
})

const invoice_Schema = Yup.object().shape({
    items: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required('Required'),
          description: Yup.string().required('Required'),
          price: Yup.number().min(1, "less tan zero").required('Required'),
          quantity: Yup.number().required('Required'),
        })
      )
      .required('item is required')
  });

const customer_Schema = Yup.object({
    customerName: Yup.string().required('first name is required'),
    customerEmail: Yup.string().email('Invalid email address').required('email is required'),
})

const account_Schema = Yup.object({
    accountNumber: Yup.string().min(10, "account number cannot be less than 10 numbers").max(10, "account number cannot be more than 10 numbers")
})

const profile_Schema = Yup.object({
    streetAddress: Yup.string().min(4, "treet address cannot be less than four characters")
})

export { signup_Schema, invoice_Schema, customer_Schema, account_Schema, profile_Schema}