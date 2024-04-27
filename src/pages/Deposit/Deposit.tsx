import { Box, Card, CardHeader, Heading, Text } from "@chakra-ui/react";
import Instruction from "components/deposit-instruction/Instruction";
import { Link } from "react-router-dom";
import Qrcode from "assets/qr-code-samp.png"

const DepositPage = () => {
  return (
    <Box className="dashboard-container">
      <Heading as="h3" size="md" noOfLines={0}>
        Deposit funds into your wallet
      </Heading>
      <Text>
        Deposits are made with cryptocurrency. Follow the instructions carefully
      </Text>
      <Instruction />
      <Heading as={"h4"} size="md" marginTop={4} marginBottom={4}>
        Scan to make payment
      </Heading>
      <Card maxWidth={300} className="qcode-wrapper">
        <img src={Qrcode} />
      </Card>
    </Box>
  );
};

export default DepositPage;
