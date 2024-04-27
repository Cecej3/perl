import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "components";
import "./layout.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Box, Text } from "@chakra-ui/react";
import { navLinks } from "api/constants";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
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
                  <Link to={link.url}>{link.name}</Link>
                ))}
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

export default AdminLayout;
