export interface Email {
  id: string;
  sender: string;
  recipient: string;
  subject: string;
  message: string;
  timestamp: Date;
}

export interface EmailForm {
  recipient: string;
  subject: string;
  message: string;
}
