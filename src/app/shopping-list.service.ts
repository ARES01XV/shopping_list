import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private API_URL = 'http://http://localhost:3000/shopping_list';

  private http_error_handler(value: any) {
    return (err:any) => {
      console.log(err);
      return of({status: err.status, message: err.message, data: value});
    }
  }

  constructor(private http: HttpClient) {}

  


}
