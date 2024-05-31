import { useState } from "react";
import moment from "moment";

// get when the propmt is from local storage
const getInstallPromptLastSeenAt = (promptName: string): string =>
  // getItem(iosInstallPromptedAt)
  localStorage.getItem(promptName) as string;

// set the prompt as seen today
const setInstallPromptSeenToday = (promptName: string): void => {
  const today = moment().toISOString();
  localStorage.setItem(promptName, today);
};

function getUserShouldBePromptedToInstall(
  promptName: string, // promptName = iosInstallPromptedAt
  daysToWaitBeforePromptingAgain: number // 1
): boolean {
  // get previous prompt shown value
  const lastPrompt = moment(getInstallPromptLastSeenAt(promptName));
  console.log("last prompt" + lastPrompt);

  //Calculate the days since the last prompt
  const daysSinceLastPrompt = moment().diff(lastPrompt, "days");
  //   compares wether the days since last prompt is greater than  daysToWaitBeforePromptingAgain
  console.log("days since last prompt" + daysSinceLastPrompt);

  return (
    isNaN(daysSinceLastPrompt) ||
    daysSinceLastPrompt > daysToWaitBeforePromptingAgain
  );
}

const useShouldShowPrompt = (
  // promptName = iosInstallPromptedAt
  promptName: string,
  daysToWaitBeforePromptingAgain = 1
): [boolean, () => void] => {
  const [userShouldBePromptedToInstall, setUserShouldBePromptedToInstall] =
    useState(
      // first time it returns true
      getUserShouldBePromptedToInstall(
        promptName,
        daysToWaitBeforePromptingAgain
      )
    );

  const handleUserSeeingInstallPrompt = () => {
    setUserShouldBePromptedToInstall(false);
    setInstallPromptSeenToday(promptName);
  };

  return [userShouldBePromptedToInstall, handleUserSeeingInstallPrompt];
};
export default useShouldShowPrompt;

// this hook returns boolean value to show or not show propmpt and a function that handles the boolean value and stores the wheter the prompt has been show or not shown in local storage.
