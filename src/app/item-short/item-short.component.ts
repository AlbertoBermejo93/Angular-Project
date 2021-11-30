import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-item-short',
  templateUrl: './item-short.component.html',
  styleUrls: ['./item-short.component.scss']
})
export class ItemShortComponent implements OnInit {
  @Input() name: string ='';
  @Input() image_url: string = '';
  @Input() id: number = 0;
  @Input() abv: number = 0;

  constructor(
    public router: Router,
    public api: ApiService,
    public routeActive: ActivatedRoute
  ) {
    console.log(routeActive);
   }

  ngOnInit(): void {
   
  }

}
