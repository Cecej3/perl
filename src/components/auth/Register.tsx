import { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Card,
  CardHeader,
  Button,
  Text,
  Stack,
  CardBody,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import "./auth.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "utils/input-validation/validation";
import { SignupDTO } from "utils/types";
import { useSignup } from "api/hooks";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "tapse";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();

  const register = async (
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    id: string
  ) => {
    await setDoc(doc(db, "users", id), {
      email,
      password,
      firstname,
      lastname,
      timeStamp: serverTimestamp(),
    });
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const formik = useFormik<SignupDTO>({
    initialValues: { firstname: "", lastname: "", email: "", password: "" },
    validateOnBlur: true,
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      const { email, password, firstname, lastname } = values;

      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await register(email, password, firstname, lastname, res.user.uid);
        navigate("/login");
      } catch (err) {console.log(err)}
    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then(async (userCredential) => {
    //       // Signed up
    //       const user = userCredential.user;

    //       // ...
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       //   const errorCode = error.code;
    //       //   const errorMessage = error.message;
    //       // ..
    //     });
    },
  });
  const { handleSubmit, handleChange, errors, touched } = formik;
  return (
    <Box className="auth-container">
      <Box className="auth-wrapper">
        <Card maxW="md">
          <CardHeader>
            <Heading as={"h4"} size="md">
              Create an account
            </Heading>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <Box>
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    errorBorderColor="crimson"
                    placeholder="enter your first name"
                    isInvalid={Boolean(errors.firstname) && touched.firstname}
                    onChange={handleChange}
                  />
                  {touched.firstname && Boolean(errors.firstname) ? (
                    <small>{errors.firstname}</small>
                  ) : null}
                </Box>

                <Box>
                  <Input
                    id="lastname"
                    name="lastname"
                    type="text"
                    errorBorderColor="crimson"
                    placeholder="enter your last name"
                    isInvalid={Boolean(errors.lastname) && touched.lastname}
                    onChange={handleChange}
                  />
                  {touched.lastname && Boolean(errors.lastname) ? (
                    <small>{errors.lastname}</small>
                  ) : null}
                </Box>

                <Box>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    errorBorderColor="crimson"
                    placeholder="enter your email"
                    isInvalid={Boolean(errors.email) && touched.email}
                    onChange={handleChange}
                  />
                  {touched.email && Boolean(errors.email) ? (
                    <small>{errors.email}</small>
                  ) : null}
                </Box>
                <Box>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      id="password"
                      name="password"
                      type={show ? "text" : "password"}
                      errorBorderColor="crimson"
                      placeholder="Enter password"
                      isInvalid={Boolean(errors.email) && touched.email}
                      onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {touched.password && Boolean(errors.password) ? (
                    <small>{errors.password}</small>
                  ) : null}
                </Box>
                <Button
                  isLoading={false}
                  loadingText="Submitting"
                  // onClick={() => handleSubmit()}
                  type="submit"
                  colorScheme="teal"
                  variant="outline"
                >
                  Submit
                </Button>
              </Stack>
            </form>
            <Text marginTop={6} textAlign={"center"}>
              Already have an account ? <Link to={"/login"}>login</Link>
            </Text>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
};

export default Register;
