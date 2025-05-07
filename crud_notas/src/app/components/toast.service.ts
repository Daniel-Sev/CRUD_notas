import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastActive: boolean = false;
  toastMessage: string = ''

  constructor() { }

  exitToast (mensage: string){
    this.toastActive = true;
    this.toastMessage = mensage;
    setTimeout(() =>{
      this.toastActive = false;
      this.toastMessage = '';
    }, 5000);
  }
}
