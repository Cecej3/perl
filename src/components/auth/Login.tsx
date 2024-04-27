import { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Card,
  CardHeader,
  Button,
  Stack,
  Text,
  CardBody,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import "./auth.scss";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "api/hooks";
import { SuccessResponse, loginDTO } from "utils/types";
import { useFormik } from "formik";
import { loginSchema } from "utils/input-validation/validation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "tapse";

const Login = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const formik = useFormik<loginDTO>({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          console.log(error);
          //   const errorCode = error.code;
          //   const errorMessage = error.message;
          // ..
        });
    },
  });
  const { handleSubmit, handleChange, errors, touched } = formik;
  return (
    <Box className="auth-container">
      <Box className="auth-wrapper">
        <Card maxW="md">
          <CardHeader>
            <Heading as={"h4"} size="md">
              Login
            </Heading>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
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
                      id="password"
                      name="password"
                      pr="4.5rem"
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
              Don't have an account ?{" "}
              <Link to={"/register"}>create an account</Link>
            </Text>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;
