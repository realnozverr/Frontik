import { makeAutoObservable } from "mobx";
import Cookies from "cookie";
import { authRequest, registerRequest } from "../api/api.ts"

class Store {
    private static instance: Store;

    regAuth: boolean = false;
    email: string;
    code: string;
    isLoading: boolean = false;
    error: string | null = null;
    sucess: string | null = null;

  
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

    setError(error: string | null) {
        this.error = error;
    }

    setSucess(sucess: string | null) {
      this.sucess = sucess;
  }


    private checkCookies() {
      const cookies = Cookies.parse(document.cookie);
      const regData = cookies.regData;
  
      if (regData) {
        const [email, authStatus] = regData.split('|');
        this.email = email;
        this.regAuth = authStatus === 'true';
      }
    }

    async registration(email: string) {
      this.setLoading(true); 
      this.setError(null);
      this.setSucess(null); 
      try {
          const response = await registerRequest(email);
          if (response.success) { 
              this.sucess = response.message;
              this.regAuth = true; 
              this.email = email; 
          } else {
            this.setError(response.message);
          }
      } catch (error) {
        this.setError(error.message);
      } finally {
        this.setLoading(false);
    }
    }

    async authorization(code: string) {
      this.setLoading(true); 
      this.setError(null); 
      try {
          const response = await authRequest(code);
          if (response.success) { 
              this.regAuth = true; 
              this.code = code; 
          } else {
            this.setError(response.message);
          }
      } catch (error) {
        this.setError(error.message);
      } finally {
        this.setLoading(false);
    }
    }
  }

const storeInstance = Store.getInstance();
export {Store}