import { Box, Card, CardHeader, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const WithdrawPage = () => {
  return (
    <>
      <Box className="dashboard-container">
        <Heading as="h3" size="md" noOfLines={0}>
          Withdraw funds directly to your wallet
        </Heading>
        <Text>Choose a withdrawal method</Text>
        <SimpleGrid minChildWidth="400px" spacing="16px" marginTop={"2rem"}>
          <Link to={"/withdrawal/cryptocurrency"}>
            <Card className="grid-card">
              <CardHeader>
                <Heading as={"h4"} size="md">
                  Crypto wallet
                </Heading>
                <Text>click to proceed</Text>
              </CardHeader>
            </Card>
          </Link>
          <Link to={"/withdrawal/bank"}>
            <Card className="grid-card">
              <CardHeader>
                <Heading as={"h4"} size="md">
                  Bank Account
                </Heading>
                <Text>click to proceed</Text>
              </CardHeader>
            </Card>
          </Link>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default WithdrawPage;
