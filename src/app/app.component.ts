import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { subscribe } from 'diagnostics_channel';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'httprequest';

  responseData$: Observable<any> | undefined;
  loadData: boolean = false;

  // resp$: Observable<any> | undefined;
  constructor(private http: HttpClient) { }



  getData() {

    // this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>{
    //   this.responseData = data;
    // console.log(data);

    this.responseData$ = this.http.get("https://jsonplaceholder.typicode.com/users");
    this.loadData = true;
  }

  sendData() {
    const users =
    {
      id: 105,
      name: "shailendraa",
      email: "kumar56shailendra@gmail.com"
    }
    this.http.post("http://localhost:3000/users", users).subscribe(
      (res) => {
        console.log('user updated', res);

      }
    )

  }
}
