import React from "react";
import useIosInstallPrompt from "../app/shared/hooks/useIosInstallPrompt";
import useWebInstallPrompt from "../app/shared/hooks/useWebInstallPrompt";
import { Modal, Typography, Box, Button, Stack, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IosShareIcon from "@mui/icons-material/IosShare";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IosShare from "@mui/icons-material/IosShare";

export const InstallPWA = () => {
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.up("md"));

  const [iosInstallPrompt, handleIOSInstallDeclined] = useIosInstallPrompt();
  const [webInstallPrompt, handleWebInstallDeclined, handleWebInstallAccepted] =
    useWebInstallPrompt();

  if (!iosInstallPrompt && !webInstallPrompt) {
    return null;
  }
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          background: "rgb(256, 256, 256)",
          border: "none",
          outline: "none",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          padding: "10px 0px",
          borderRadius: "10px",
          flexDirection: "row",
          flexWrap: "wrap",
          position: "absolute",
          bottom: "5%",
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: "100%",
            right: "50%",
            left: "50%",
            width: 20,
            height: 20,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        }}
      >
        <Typography>
          <span>
            <AddBoxIcon
              sx={{
                marginBottom: "-5px",
              }}
            />
          </span>
          Install this webapp on your iPhone: tap{" "}
          <span>
            <IosShare
              sx={{
                marginBottom: "-5px",
              }}
            />
          </span>
          and then add to homescreen
        </Typography>
      </Box>
      {/* <Box
        sx={{
          flexDirection: "column",
          background: "rgb(32, 32, 32)",
          border: "none",
          outline: "none",
          padding: "20px",
          borderRadius: "20px",
          color: "white",
          maxWidth: medium ? "30rem" : "90%",
        }}
      >
        <Typography variant={medium ? "h4" : "h6"}>
          Install For Better Experience
        </Typography>
        <Typography variant="subtitle1">Descrption why to install</Typography>
        <Stack
          direction="row"
          justifyContent="right"
          gap={4}
          sx={{
            mt: "2rem",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleWebInstallAccepted}
            sx={{
              minWidth: "8rem",
            }}
          >
            Install
          </Button>
          <Button
            onClick={handleWebInstallDeclined}
            variant="contained"
            sx={{
              minWidth: "8rem",
            }}
          >
            Close
          </Button>
        </Stack>
      </Box> */}
    </Modal>
  );
};

{
  /* <Modal isOpen centered>
<Card>
  <img
    className="mx-auto"
    style={{
      borderTopRightRadius: "50%",
      borderTopLeftRadius: "50%",
      backgroundColor: "#fff",
      marginTop: "-50px",
    }}
    width="100px"
    src="content/images/appIcon-transparent.png"
    alt="Icon"
  />
  <CardBody>
    <CardTitle className="text-center">
      <h3>Install App</h3>
    </CardTitle>
    {iosInstallPrompt && (
      <>
        <CardText className="text-center">
          Tap
          <img
            src="content/images/Navigation_Action_2x.png"
            style={{ margin: "auto 8px 8px" }}
            className=""
            alt="Add to homescreen"
            width="20"
          />
          then &quot;Add to Home Screen&quot;
        </CardText>
        <div className="d-flex justify-content-center">
          <Button onClick={handleIOSInstallDeclined}>Close</Button>
        </div>
      </>
    )}
    {webInstallPrompt && (
      <div className="d-flex justify-content-around">
        <Button color="primary" onClick={handleWebInstallAccepted}>
          Install
        </Button>
        <Button onClick={handleWebInstallDeclined}>Close</Button>
      </div>
    )}
  </CardBody>
</Card>
</Modal> */
}
