import {
  Box,
  Heading,
  Text,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Stack,
  Input,
} from "@chakra-ui/react";
import "./withdraw.scss";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { bankList } from "api/constants";
import { useState } from "react";

const WithdrawPageBank = () => {
  const steps = [
    { title: "First", description: "Account Info" },
    { title: "Second", description: "Amount and Description" },
    { title: "Third", description: "Security details" },
  ];



  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const handleSaveNext = () => {
    setActiveStep(activeStep + 1);
  };

  const activeStepText = steps[activeStep].description;

  return (
    <>
      <Box className="dashboard-container">
        <Heading as="h3" size="md" noOfLines={0}>
          Withdraw funds directly to your bank account
        </Heading>
        <Text>Ensure all details are input correctly</Text>

        <Stepper index={activeStep} size="sm" colorScheme="purple">
          {steps.map((step, i) => (
            <Step key={step.title} onClick={() => setActiveStep(i)}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Text>
          Step {activeStep + 1}: <b>{activeStepText}</b>
        </Text>

        <form>
          {activeStep === 0 && (
            <Stack spacing={4}>
              <Box>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  errorBorderColor="crimson"
                  placeholder="enter account number"
                  isInvalid={false}
                  onChange={() => {}}
                />
                {/* {touched.email && Boolean(errors.email) ? (
                                <small>{errors.email}</small>
                            ) : null} */}
              </Box>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<IoChevronDownCircleOutline />}
                  className="select-menu"
                >
                  Select Bank
                </MenuButton>
                <MenuList className="select-menu-list">
                  {bankList.map((bankItem) => (
                    <MenuItem key={bankItem}>{bankItem}</MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <Box>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  errorBorderColor="crimson"
                  placeholder="enter other bank name"
                  isInvalid={false}
                  onChange={() => {}}
                />
                {/* {touched.email && Boolean(errors.email) ? (
                                <small>{errors.email}</small>
                            ) : null} */}
              </Box>

              <Button
                isLoading={false}
                loadingText="Submitting"
                onClick={() => handleSaveNext()}
                type="button"
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Stack>
          )}
          {activeStep === 1 && (
            <Stack spacing={4}>
              <Box>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  errorBorderColor="crimson"
                  placeholder="enter amount"
                  isInvalid={false}
                  onChange={() => {}}
                />
                {/* {touched.email && Boolean(errors.email) ? (
                <small>{errors.email}</small>
              ) : null} */}
              </Box>

              <Box>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  errorBorderColor="crimson"
                  placeholder="enter description (optional)"
                  isInvalid={false}
                  onChange={() => {}}
                />
                {/* {touched.email && Boolean(errors.email) ? (
                <small>{errors.email}</small>
              ) : null} */}
              </Box>

              <Button
                isLoading={false}
                loadingText="Submitting"
                onClick={() => handleSaveNext()}
                type="button"
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Stack>
          )}
          {activeStep === 2 && (
            <Stack spacing={4}>
              <Box>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  errorBorderColor="crimson"
                  placeholder="enter passsword"
                  isInvalid={false}
                  onChange={() => {}}
                />
                {/* {touched.email && Boolean(errors.email) ? (
                <small>{errors.email}</small>
              ) : null} */}
              </Box>

              <Button
                isLoading={false}
                loadingText="Submitting"
                onClick={() => handleSaveNext()}
                type="button"
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Stack>
          )}
        </form>
      </Box>
    </>
  );
};

export default WithdrawPageBank;
