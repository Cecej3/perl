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

const WithdrawPageCrypto = () => {
      const steps = [
        { title: "First", description: "Account Info" },
        { title: "Second", description: "Amount and Description" },
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
          Withdraw funds directly to a crypto wallet
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
                  placeholder="enter withdrawal amount"
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
                  placeholder="enter wallet address"
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
                  placeholder="enter description (optional)"
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

export default WithdrawPageCrypto;
