import { db } from "config/firebase";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  FieldValue,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  Query,
  query,
  QuerySnapshot,
  serverTimestamp,
  startAfter,
} from "firebase/firestore";
import { makeAutoObservable, runInAction } from "mobx";
import { Email, EmailForm } from "types/email";
import { store } from "./store";

class EmailStore {
  emailsRegistery = new Map<string, Email>();
  selectedEmail: Email | null = null;
  emailsQuery: Query<DocumentData> | null = null;
  emailsLimit = 15;
  hasMore = false;
  lastEmailTimestamp: FieldValue | null = null;
  emailFormOpened = false;
  unsubscribeEmails?: () => void;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.emailFormOpened = false;
    this.emailsRegistery.clear();
    this.selectedEmail = null;
    this.emailsLimit = 15;
    this.hasMore = false;
    this.lastEmailTimestamp = null;

    this.unsubscribeEmails && this.unsubscribeEmails();
    this.unsubscribeEmails = undefined;
  };

  get emails() {
    return Array.from(this.emailsRegistery.values()).sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
  }

  loadEmails = async () => {
    if (this.emailsRegistery.size !== 0) {
      return;
    }

    this.emailsQuery = query(
      collection(db, "emails"),
      orderBy("timestamp", "desc"),
      limit(this.emailsLimit)
    );

    this.unsubscribeEmails = onSnapshot(this.emailsQuery, (snapshot) => {
      this.setEmailsFromSnapshot(snapshot);
    });
  };

  loadMore = async () => {
    if (!this.hasMore) {
      return;
    }

    console.log(this.lastEmailTimestamp);

    const emailsQuery = query(
      collection(db, "emails"),
      orderBy("timestamp", "desc"),
      startAfter(this.lastEmailTimestamp),
      limit(this.emailsLimit)
    );
    const emailsSnapshot = await getDocs(emailsQuery);

    this.setEmailsFromSnapshot(emailsSnapshot);
  };

  private setEmailsFromSnapshot = (snapshot: QuerySnapshot<DocumentData>) => {
    if (snapshot.size < this.emailsLimit) {
      this.hasMore = false;
    } else {
      this.hasMore = true;
    }

    snapshot.docs.forEach((doc) => {
      if (!this.lastEmailTimestamp) {
        this.lastEmailTimestamp = doc.data().timestamp;
      } else {
        const lastTimestamp = new Date(
          // @ts-ignore
          this.lastEmailTimestamp?.toDate()
        ).getTime();

        const currentTimestamp = new Date(
          doc.data().timestamp?.toDate()
        ).getTime();

        if (currentTimestamp < lastTimestamp) {
          this.lastEmailTimestamp = doc.data().timestamp;
        }
      }

      const email = {
        id: doc.id,
        ...doc.data(),
        timestamp: new Date(doc.data().timestamp?.toDate()),
      } as Email;

      this.emailsRegistery.set(email.id, email);
    });
  };

  selectEmail = async (id: string) => {
    if (this.selectedEmail?.id === id) {
      return true;
    }

    if (this.emailsRegistery.has(id)) {
      this.selectedEmail = this.emailsRegistery.get(id) as Email;
      return true;
    }

    const snapshot = await getDoc(doc(db, "emails", id));

    if (!snapshot.exists()) {
      return false;
    }

    const email = {
      id: snapshot.id,
      ...snapshot.data(),
      timestamp: new Date(snapshot.data().timestamp?.toDate()),
    } as Email;

    runInAction(() => {
      this.selectedEmail = email;
      this.emailsRegistery.set(email.id, email);
    });

    return true;
  };

  sendEmail = async (values: EmailForm) => {
    const { user } = store.userStore;

    if (!user) {
      return;
    }

    if (values.recipient === user.email) {
      return;
    }

    await addDoc(collection(db, "emails"), {
      ...values,
      sender: user.email,
      timestamp: serverTimestamp(),
    });

    runInAction(() => {
      this.emailFormOpened = false;
    });
  };

  setEmailFormOpened = (state: boolean) => {
    this.emailFormOpened = state;
  };
}

export default EmailStore;
