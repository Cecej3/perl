import { Button, Input, Box, Avatar } from "@chakra-ui/react";
import { useFormik } from "formik";
import { BusinessInfoType } from "interfaces/types";
import { profile_Schema } from "utils/input-validation/validation";
// import { profile_Schema } from "utils/validationSchema";

const ProfileForm = () => {
  //   const { token } = useContext(AuthContext);
  //   const { data } = useGetBusinessData((token as string) ?? "");

  const initial_Customer_Values: BusinessInfoType = {
    businessName: "",
    city: "",
    country: "",
    streetAddress: "",
  };

  const formik = useFormik<BusinessInfoType>({
    initialValues: initial_Customer_Values,
    validationSchema: profile_Schema,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

    const { handleSubmit, errors, touched, getFieldProps } =
      formik;

  return (
    <Box>
      {/* {apiAlert.open && (
        <Alert severity={apiAlert.intent as AlertColor}>
          {apiAlert.message}
        </Alert>
      )} */}
      <form onSubmit={handleSubmit} className={"business-update-form"}>
        <Avatar bg="purple.700" />
        <Box
          display="flex"
          alignItems={"center"}
          justifyItems={"flex-start"}
          width={"90%"}
        >
          Personal Details
        </Box>
        <Input
          id="businessName"
          type="text"
          placeholder="Business name"
          {...getFieldProps("businessName")}
          className={"text-input"}
        />
        <Input
          id="city"
          type="text"
          placeholder="enter city name"
          {...getFieldProps("city")}
          className={"text-input"}
        />
        <Input
          id="country"
          type="text"
          {...getFieldProps("country")}
          className={"text-input"}
          errorBorderColor="crimson"
          placeholder="enter your first name"
          isInvalid={Boolean(errors.businessName) && touched.businessName}
        />
        <Input
          id="streetAddress"
          type="text"
          placeholder="enter street address"
          {...getFieldProps("streetAddress")}
          className={"text-input"}
        />
        <Button type="submit">Update</Button>
      </form>
    </Box>
  );
};

export default ProfileForm;
