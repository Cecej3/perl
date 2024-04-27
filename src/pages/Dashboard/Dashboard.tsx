import {
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  SimpleGrid,
} from "@chakra-ui/react";
import { IoIosArrowDropright } from "react-icons/io";
import "./dashboard.scss";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <Box className="dashboard-container">
      <Card className="grid-card">
        <CardHeader>
          <Heading as={"h4"} size="md">
            Wallet Balance
          </Heading>
          <Text>N 200,000</Text>
        </CardHeader>
        <IoIosArrowDropright />
      </Card>

      <SimpleGrid minChildWidth="400px" spacing="16px" marginTop={"2rem"}>
        {[1, 2, 3, 4].map((card) => (
          <Link to={"/logs"} key={card}>
            <Card className="grid-card">
              <CardHeader>
                <Heading as={"h4"} size="md">
                  Total investment
                </Heading>
                <Text>click to view more</Text>
              </CardHeader>
              <IoIosArrowDropright />
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DashboardPage;
