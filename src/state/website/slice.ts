import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export enum WebsiteModal {
  MENU,
}

export interface PopupContent {
  text: string;
  isSuccess: boolean;
}

export interface Popup {
  key: string;
  show: boolean;
  content: PopupContent;
  removeAfterMs: number | null;
}

interface WebsiteState {
  openModal: WebsiteModal | null;
  popups: Popup[];
}

const initialState: WebsiteState = {
  openModal: null,
  popups: [],
};

const websiteSlice = createSlice({
  name: "website",
  initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<WebsiteModal | null>) => {
      state.openModal = action.payload;
    },
    addPopup: (state, action: PayloadAction<Popup>) => {
      state.popups = (
        action.payload.key ? state.popups.filter((popup) => popup.key !== action.payload.key) : state.popups
      ).concat([
        {
          key: action.payload.key || nanoid(),
          show: action.payload.show,
          content: action.payload.content,
          removeAfterMs: action.payload.removeAfterMs ?? 10000,
        },
      ]);
    },
    removePopup: (state, action: PayloadAction<string>) => {
      state.popups.forEach((p) => {
        if (p.key === action.payload) {
          p.show = false;
        }
      });
    },
  },
});

export const { setOpenModal, addPopup, removePopup } = websiteSlice.actions;
export default websiteSlice.reducer;
