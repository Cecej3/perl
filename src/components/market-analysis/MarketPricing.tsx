
import './market-price.scss';
import { ForexCrossRates } from "react-ts-tradingview-widgets";
import { Box } from '@chakra-ui/react';

const MarketPricing = () => {

    return (
        <Box className="market-price-container">
            <Box className="market-price-container_table" data-testid="forex-rates-container">
                <ForexCrossRates colorTheme="light" width="100%" height={350} />
            </Box>
        </Box>
    )
};

export default MarketPricing;
