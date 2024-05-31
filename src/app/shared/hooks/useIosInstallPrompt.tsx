import useShouldShowPrompt from "./useShouldShowHook";

const iosInstallPromptedAt = "iosInstallPromptedAt";

// Ios

const isIOS = (): boolean => {
  // @ts-ignore
  if (navigator.standalone) {
    //user has already installed the app
    return false;
  }
  const ua = window.navigator.userAgent;
  const isIPad = !!ua.match(/iPad/i);
  const isIPhone = !!ua.match(/iPhone/i);
  const isIPod = !!ua.match(/iPod/i);
  const ios = !!ua.match(/iOS/i);
  return isIPad || isIPhone || isIPod || ios;
};

const useIosInstallPrompt = (): [boolean, () => void] => {
  const [userShouldBePromptedToInstall, handleUserSeeingInstallPrompt] =
    useShouldShowPrompt(iosInstallPromptedAt);

  return [
    isIOS() && userShouldBePromptedToInstall,
    handleUserSeeingInstallPrompt,
  ];
};
export default useIosInstallPrompt;
