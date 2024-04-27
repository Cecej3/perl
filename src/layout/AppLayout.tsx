import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "components";
import "./layout.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
import { DropdownNavLinks, navLinks } from "api/constants";
import { AiOutlineLogout } from "react-icons/ai";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("mtuToken");
  const [guard, setGuard] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  // 	if (token) {
  // 		setGuard(false);
  // 	} else if (!token || token === "") {
  // 		navigate("/login");
  // 	}
  // }, [token]);

  const routeBack = () => {
    navigate(-1);
  };
  return (
    <>
      {!guard && (
        <section className="layout-container">
          <Navbar />
          <section className="layout-content">
            <div className="app-layout-wrapper">
              {window.location.pathname != "/" && (
                <FaArrowLeftLong
                  size={21}
                  style={{ marginBottom: "2rem" }}
                  cursor={"pointer"}
                  onClick={routeBack}
                />
              )}
              {!guard && children}
            </div>
          </section>
        </section>
      )}

      <section className="layout-container">
        <Navbar />
        <section className="layout-content">
          <div className="app-layout-wrapper">
            <div className="app-layout-grid">
              <div className="side-nav">
                {navLinks.map((link) => (
                  <Link to={link.url} key={link.name}>
                    {<link.icon />}
                    {link.name}
                  </Link>
                ))}
                <Accordion allowMultiple className="accordion-link">
                  <AccordionItem className="accordion-item">
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left" padding={0}>
                          Transactions
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    {DropdownNavLinks.map((link) => (
                      <AccordionPanel key={link.name}>
                        <Link to={link.url}>
                          {<link.icon />} {link.name}
                        </Link>
                      </AccordionPanel>
                    ))}
                  </AccordionItem>
                </Accordion>
                <Box className="signout-btn-wrapper">
                  <Button leftIcon={<AiOutlineLogout size={21} />}>
                    Signout
                  </Button>
                </Box>
              </div>
              <div className="main-container">
                {window.location.pathname != "/" && (
                  <FaArrowLeftLong
                    size={24}
                    style={{ marginBottom: "2rem" }}
                    cursor={"pointer"}
                    onClick={routeBack}
                  />
                )}
                {children}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AppLayout;
