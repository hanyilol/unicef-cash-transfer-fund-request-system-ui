import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "state/store";
import { updateUserDarkMode } from "./slice";

export function useIsDarkMode(): boolean {
  const { userDarkMode } = useAppSelector((state) => state.user);

  return userDarkMode;
}

export function useDarkModeManager(): [boolean, () => void] {
  const dispatch = useAppDispatch();
  const isDarkMode = useIsDarkMode();

  const toggleDarkMode = useCallback(() => {
    dispatch(updateUserDarkMode(!isDarkMode));
  }, [isDarkMode, dispatch]);

  return [isDarkMode, toggleDarkMode];
}
