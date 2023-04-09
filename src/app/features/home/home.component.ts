import { Component, OnInit } from '@angular/core';
import { CoreService } from '@shared/services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly service: CoreService) { }
  public message:string;
  
  ngOnInit(): void {
    this.service.getMessage().subscribe((data)=>{
      this.message = data
    })
  }

}
