import { Component, OnInit } from '@angular/core';
import { Vet } from 'src/app/Models/appointmentVet.model';
import { HeaderService } from 'src/app/Services/header.service';
import { SideBarService } from 'src/app/Services/sidebar.service';
import { CardService } from './card.service';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {
  role:string="vet";
  constructor(private service:CardService, public side:SideBarService,public header:HeaderService) { }
  vets:any=[];
  petdetails:any=[];
  ngOnInit(): void {
    this.side.showsidebar();
    this.header.showheader();
   
    this.service.getAllVets().subscribe( result =>{
      this.vets = result;
      console.log(this.vets);
    })

    this.service.getAllPets().subscribe( result =>{
      this.petdetails = result;
      console.log(this.petdetails);
    })

    
  }


}
