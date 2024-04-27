import { motion } from "framer-motion";
import { ProfileForm } from "components";
import { Box } from "@chakra-ui/react";
import { headingVariant } from "utils/theme/muitheme";
import "./profile.scss";

const Profile = () => {
  return (
    <>
      <motion.div
        className={"profile_page"}
        variants={headingVariant(0.5)}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <ProfileForm />
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Profile;
