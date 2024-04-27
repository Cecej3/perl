import { Avatar, Box, Button, Card, Heading, Text } from "@chakra-ui/react";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";
import "./subs.scss";
import { Link } from "react-router-dom";

const Subcriptions = ({ dashboard }: { dashboard?: boolean }) => {
  return (
    <Box className={dashboard ? "d-sub-container" : "sub-container"}>
      <Heading as="h2" noOfLines={0}>
        Invest now
      </Heading>
      <Heading as="h4" size="md" noOfLines={0}>
        Choose from a variety of investment plans
      </Heading>
      <Box className="sub-grid-container">
        {[0, 1, 2, 3].map((it) => (
          <Card key={it} className="sub-grid-card">
            <Avatar
              size={"md"}
              icon={<MdOutlineWifiCalling3 />}
              className="sub-grid-avatar"
            />
            <Heading as="h3" size="md" noOfLines={0}>
              Silver
            </Heading>
            <Text as={"p"} fontSize="md">
              $300 - $500 daily returns, equivalent to 10% ROI
            </Text>
            {/* <Button rightIcon={<FaCircleArrowRight size={20}/>}>Invest now</Button> */}
            <Link to={"/deposit"} className="link-btn-filled">
              <Text>Invest now</Text>
              <FaCircleArrowRight size={20} />
            </Link>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Subcriptions;
