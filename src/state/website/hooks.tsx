import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "state/store";
import { setOpenModal, WebsiteModal, removePopup, Popup, addPopup } from "./slice";

export function useIsModalOpen(modal: WebsiteModal): boolean {
  const openModal = useAppSelector((state) => state.website.openModal);

  return openModal === modal;
}

export function useToggleModal(modal: WebsiteModal): () => void {
  const isOpen = useIsModalOpen(modal);
  const dispatch = useAppDispatch();
  return useCallback(() => dispatch(setOpenModal(isOpen ? null : modal)), [dispatch, modal, isOpen]);
}

export function useAddPopup(): (popup: Popup) => void {
  const dispatch = useAppDispatch();

  return useCallback(
    (popup) => {
      dispatch(addPopup(popup));
    },
    [dispatch]
  );
}

export function useRemovePopup(): (key: string) => void {
  const dispatch = useAppDispatch();
  return useCallback(
    (key: string) => {
      dispatch(removePopup(key));
    },
    [dispatch]
  );
}

export function useActivePopups(): Popup[] {
  const popups = useAppSelector((state) => state.website.popups);
  return useMemo(() => popups.filter((popup) => popup.show), [popups]);
}
