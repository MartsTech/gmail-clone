import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface MailState {
  sendMessageIsOpen: boolean;
}

const initialState: MailState = {
  sendMessageIsOpen: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state: RootState) =>
  state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
