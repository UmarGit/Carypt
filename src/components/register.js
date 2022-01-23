import React from "react";
import {
  Box,
  Flex,
  Button,
  Label,
  Input,
  Checkbox,
  Close,
  Heading,
  Spinner,
} from "theme-ui";

const Register = ({handleClose}) => {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Flex sx={styles.modal}>
      <Box sx={styles.modalBody} as="form" onSubmit={(e) => setIsLoading(true)}>
        <Flex sx={styles.modalHeader}>
          <Heading sx={styles.modalHeader.heading}>Register to carypt</Heading>
          <Close onClick={() => handleClose()} sx={styles.modalHeader.icon} />
        </Flex>
        <Box disabled={isLoading} sx={styles.modalBody.fields}>
          <Label sx={styles.form.label} htmlFor="username">
            Username
          </Label>
          <Input sx={styles.form.input} name="username" id="username" mb={3} />
          <Label sx={styles.form.label} htmlFor="password">
            Password
          </Label>
          <Input
            sx={styles.form.input}
            type="password"
            name="password"
            id="password"
            mb={3}
          />
          <Label sx={styles.form.label} htmlFor="password">
            Confirm Password
          </Label>
          <Input
            sx={styles.form.input}
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            mb={3}
          />
          <Box>
            <Label sx={styles.form.label} mb={3}>
              <Checkbox />
              Remember me
            </Label>
          </Box>
        </Box>
        <Flex sx={styles.modalFooter}>
          <Button disabled={isLoading} sx={styles.form.button}>
            Register
          </Button>
          {isLoading ? <Spinner /> : ""}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Register;

const styles = {
  form: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    button: {
      cursor: "pointer",
      "&[disabled]": {
        opacity: 0.5,
        pointerEvents: "none",
      },
    },
  },
  modal: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 999,
    backgroundColor: "#02073e6b",
    alignItems: "center",
    justifyContent: "center",
  },
  modalHeader: {
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "space-between",
    color: "primary",
    heading: {
      fontSize: 5,
      fontWeight: "bold",
      color: "primary",
    },
    icon: {
      cursor: "pointer",
      padding: 1,
    },
  },
  modalBody: {
    backgroundColor: "white",
    padding: 6,
    margin: 6,
    borderRadius: 8,
    width: 600,
    height: "max-content",
    fields: {
      "&[disabled]": {
        opacity: 0.5,
        pointerEvents: "none",
      },
    },
  },
  modalFooter: {
    alignItems: "center",
    justifyContent: "space-between",
    color: "primary",
  },
};
