import React, { useEffect, useState } from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
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

function App() {
  const [prompt, setPrompt] = useState<any>(null);
  const [language, setLanguage] = useState("en");

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

  const installHandler = () => {
    if (prompt) {
      console.log("propmt");

      prompt.prompt();
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
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
      <InstallPWA></InstallPWA>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        Progressive Web Application
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
