import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  getData() {
      return this.http.get('https://angular2-course-cbfa4.firebaseio.com/title.json')
      .map((response: Response) => response.json()); //map method transaform the Observable to Observable. we can still listen to it.
  }

  sendData(user: any) {
      const body = JSON.stringify(user);
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      return this.http.post('https://angular2-course-cbfa4.firebaseio.com/data.json', body, {
          headers: myHeaders
      })
      .map((data: Response) => data.json())
      .catch(this.handleError);  //transform the data comes back into JSON object
  }

  getOwnData() {
      return this.http.get('https://angular2-course-cbfa4.firebaseio.com/data.json')
      .map((response: Response) => response.json()); //map method transaform the Observable to Observable. we can still listen to it.
  }

  private handleError (error: any) {
      console.log(error);
      return Observable.throw(error.json());  // error will be throw again, we don't want it to be lost!!
  }
}
