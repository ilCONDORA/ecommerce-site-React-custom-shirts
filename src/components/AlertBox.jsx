import React from "react";
import "../pages/Customizer/customizer.css";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react";

const AlertBox = ({ status, title, message, onCloseAlert }) => {
  return (
    <Alert
      status={status}
      variant="left-accent"
      flexDirection="column"
      justifyContent="center"
      gap=".2rem"
      height="auto"
      zIndex={50}
      position="fixed"
      top={0}
      left="50%"
      transform="translate(-50%)"
      backgroundColor="var(--color-variant-2)"
      alignItems="center"
      textAlign="center"
      width="30rem"
      borderBottomRadius="7px"
      boxShadow="var(--shadows)"
      padding=".6rem"
      onClose={onCloseAlert}
      className="alert-box"
    >
      <AlertIcon boxSize="1.5rem" color="var(--color-primary)" />
      <Box>
        <AlertTitle className="alert-title">
          <h5>{title}</h5>
        </AlertTitle>
        <AlertDescription className="alert-desc">
          <p>{message}</p>
        </AlertDescription>
      </Box>
    </Alert>
  );
};

export default AlertBox;
