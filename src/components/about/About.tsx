import { Avatar, Box, Card, Heading, Text } from "@chakra-ui/react";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import "./about.scss";

const About = () => {
  return (
    <Box className="about-container">
      <Heading as="h2" noOfLines={0}>
        Why ZeniInvest ?
      </Heading>
      <Heading as="h4" size="md" noOfLines={0}>
        Amongst several reasons to diversify your funds
      </Heading>
      <Box className="about-grid-container">
        {[0, 1, 2].map((it) => (
          <Card key={it} className="about-grid-card">
            <Avatar
              bg={"purple.700"}
              size={"sm"}
              icon={<MdOutlineWifiCalling3 />}
            />
            <Heading as="h3" size="md" noOfLines={0}>
              Reliable
            </Heading>
            <Text as={"p"} fontSize="md">
              Unlock Peace of Mind, Elevate Safety, Protect Every Journey, Every
              Step of the Way
            </Text>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default About;
