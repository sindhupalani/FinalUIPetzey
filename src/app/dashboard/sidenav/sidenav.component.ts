import { Component, OnInit } from '@angular/core';
import { SideBarService } from 'src/app/Services/sidebar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  role:string="vet";
  constructor(public side:SideBarService) { }

  ngOnInit(): void {
  }
  

}
