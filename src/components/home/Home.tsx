import { Box, Heading, Text } from "@chakra-ui/react";
import Marquee from "components/Marquee/Marquee";
import About from "components/about/About";
import Footer from "components/footer/Footer";
import Hero from "components/hero/Hero";
import MarketPricing from "components/market-analysis/MarketPricing";
import Subcriptions from "components/subscriptions/Subcriptions";
import "./home.scss";
import Calculator from "components/calculator/Calculator";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Marquee />
      <Subcriptions />
      <MarketPricing />
      <Box className="milestone-container">
        <Box className="milestone-grid">
          {[0, 1, 2, 3].map((it) => (
            <div key={it} className="milestone-grid-card">
              <Heading as="h1" size="lg" noOfLines={0}>
                2000 +
              </Heading>
              <Text as={"p"} fontSize="md">
                Complete Investments
              </Text>
            </div>
          ))}
        </Box>
      </Box>
      <Calculator />
      <Footer />
    </>
  );
};

export default Home;
