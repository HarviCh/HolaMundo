import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { 
    console.log("creandose") 
  }

  ngOnInit(): void {
    console.log("creado")
  }

  arr = 14
  

  change(){
    this.arr= 15
  }

}

