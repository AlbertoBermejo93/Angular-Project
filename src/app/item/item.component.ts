import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  id : number = 0;
  name1: string = '';
  image_url: string = '';
  description: string = '';
  first_brewed: any = '';
  abv: number = 0;
  food_pairing: string = '';


  constructor(
    public router: Router,
    public api: ApiService,
    public routeActive: ActivatedRoute
  ) { 
    console.log(routeActive);
  }

  ngOnInit(): void {
    //Recupération du paramètre de l'url avec le service Activated
    this.id = this.routeActive.snapshot.params['id'];
    console.log(this.id);
    

    
    //Recuperation des informations du livre avec le service API
    const item = this.api.getBiere(this.id);
  
    this.name1 = item.name;
    this.image_url = item.image_url;
    this.description = item.description;
    this.first_brewed = item.first_brewed;
    this.abv = item.abv;
    this.food_pairing = item.food_pairing;
   
  }

}
