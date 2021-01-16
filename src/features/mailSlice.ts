import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type MailContent = {
  id: string;
  title: string;
  subject: string;
  description: string;
  time: string;
};

interface MailState {
  selectedMail: MailContent | null;
  sendMessageIsOpen: boolean;
}

const initialState: MailState = {
  selectedMail: null,
  sendMessageIsOpen: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    selectMail: (state, action: { payload: MailContent }) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const {
  selectMail,
  openSendMessage,
  closeSendMessage,
} = mailSlice.actions;

export const selectOpenMail = (state: RootState) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state: RootState) =>
  state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
