import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjstraining',
  templateUrl: './rxjstraining.component.html',
  styleUrls: ['./rxjstraining.component.css']
})
export class RxjstrainingComponent implements OnInit {

  agents: Observable<string> | any;
  agentname: string | undefined;
  constructor() { }

  ngOnInit(): void {

    this.agents = new Observable(function (observer: { next:(arg0: string)
      => void; }) {
        try{
        observer.next('shalini');
      
      setInterval(() => {
        observer.next('saranya');
      }, 3000)
      setInterval(() => {
        observer.next('sai');
      }, 6000)
        }
        catch(e){
          

        }
      }
    );
    this.agents.subscribe((data: string | undefined) => {
this.agentname = data;
    })
  }

}
