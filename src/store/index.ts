import { makeAutoObservable } from "mobx";
import Cookies from "cookie";
import { authRequest, registerRequest } from "../api/api.ts"

class Store {
  private static instance: Store;

  regAuth: boolean = false;
  email: string;
  code: string;
  isLoading: boolean = false;
  message: string | null = null;
  messageType: "success" | "error" | null = null;

  constructor() {
      makeAutoObservable(this);
      this.checkCookies();
  }

  static getInstance() {
      if (!Store.instance) {
          Store.instance = new Store();
      }
      return Store.instance;
  }

  setLoading(loading: boolean) {
      this.isLoading = loading;
  }

  setMessage(message: string | null, type: "success" | "error" | null = null) {
      this.message = message;
      this.messageType = type; 
  }

  setRegAuth(regAuth: boolean) {
      this.regAuth = regAuth;
  }

  setEmail(email: string) {
      this.email = email;
  }

  private checkCookies() {
    console.log("document.cookie:", document.cookie);

    const cookies = Cookies.parse(document.cookie);
    console.log("Parsed cookies:", cookies);

    const regData = cookies.regData;

    if (regData) {
        console.log("regData cookie value:", regData);

        const [email, authStatus] = regData.split('|');
        this.setEmail(email);
        this.setRegAuth(authStatus === 'false');
        console.log("Email set to:", email);
        console.log("Auth status:", authStatus);
    } else {
        console.log("No regData cookie found.");
    }
}


  async registration(email: string) {
      this.setLoading(true);
      this.setMessage(null);

      try {
          const response = await registerRequest(email);
              this.setMessage(response.message, "success");
              this.setRegAuth(true);
      } catch (error) {
          this.setMessage(error.message, "error");
      } finally {
          this.setLoading(false);
      }
  }

  async authorization(code: string) {
      this.setLoading(true);
      this.setMessage(null);
      try {
          const response = await authRequest(code);
          this.setMessage(response.message, "success");
      } catch (error) {
          this.setMessage(error.message, "error");
      } finally {
          this.setLoading(false);
      }
  }
}

const storeInstance = Store.getInstance();
export { Store };
