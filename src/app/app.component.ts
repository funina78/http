import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    items: any[] = [];
    asyncString = this.httpService.getData();  //this asyncString is used anync pipe at the ciew, async pipe is subscribe the Observable here for me, so I don't need to subscribe() the Observable here.

    constructor(private httpService: HttpService) {}

    ngOnInit() {
        this.httpService.getData()
        .subscribe(
            (data: Response) => {
                console.log(data);
            }
        );
    }

    onSubmit(username: string, email: string) {
        this.httpService.sendData({username: username, email: email})
        .subscribe(
            data => console.log(data),
            error => console.log(error)
        );
    }

    onGetData() {
        this.httpService.getOwnData()
        .subscribe(
            data => {
                console.log(data);
                const myArray = [];
                for (let key in data) {
                    myArray.push(data[key]);
                }
                this.items = myArray;
                console.log(this.items);
            }
        );
    }
}
