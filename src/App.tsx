import React, { useEffect, useState } from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { InstallPWA } from "./components/InstallPWA";
import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const [prompt, setPrompt] = useState<any>(null);
  const [language, setLanguage] = useState("en");
  const [permission, setPermission] = useState<string>();

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      // event.preventDefault();
      setPrompt(event);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, [prompt]);

  useEffect(() => {
    console.log(location.pathname);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as string;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const requestPermission = () => {
    Notification.requestPermission().then((newPermission) => {
      if (newPermission === "granted") {
        console.log("granted");
      }
      setPermission(newPermission);
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "red",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        gap: "3rem",
        color: "#ffffff",
      }}
    >
      {/* <InstallPWA></InstallPWA> */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        {t("title")}
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"es"}>Spanish</MenuItem>
          <MenuItem value={"it"}>Italian</MenuItem>
        </Select>
        <Typography>{navigator.userAgent}</Typography>
      </FormControl>
      <Button onClick={requestPermission}>Allow Notifications</Button>
    </Box>
  );
}

export default App;

// API BADGING

// const getNotificationPermission = async () => {
//   const state = await Notification.requestPermission();
//   if (state !== "granted") {
//     return false;
//   } else {
//     return true;
//   }
// };

// function setBadge(...args: any) {
//   if (navigator.setAppBadge) {
//     navigator.setAppBadge(...args);
//   }
// }

// useEffect(() => {
//   const someFunction = async () => {
//     if (!(await getNotificationPermission())) {
//       return;
//     }
//     setBadge(10);
//   };
//   someFunction();
// }, []);
