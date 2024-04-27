import {
	TabList,
	Tabs,
	Tab,
	TabPanel,
	TabPanels,
	Box,
	TabIndicator,
} from "@chakra-ui/react";
import "./create-staff.scss";
import Createstudent from "./Createstudent";
import Createstaff from "./Createstaff";

const Createuser = () => {
  return (
        <Box className="user-container">
            <Tabs isFitted variant="unstyled">
                <TabList mb="1em">
                    <Tab>Create MTU Staff</Tab>
                    <Tab>Create MTU Student</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="#84b541"
                    borderRadius="1px"
                />
                <TabPanels>
                    <TabPanel>
                        <Createstaff />
                    </TabPanel>
                    <TabPanel>
                        <Createstudent />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
	);
}

export default Createuser
