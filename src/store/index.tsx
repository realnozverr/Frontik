import { makeAutoObservable } from "mobx";
import Cookies from "cookie";

class Store {
    show: boolean = false
    auth: boolean = false;
    email: string;
  
    constructor() {
      makeAutoObservable(this);
    }
  }

export {Store}