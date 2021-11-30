import { Component,Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {
  @Input() name: string ='';
  @Input() image_url: string = '';
  @Input() id: number = 0;

  constructor(
    public api: ApiService
  ) { }

  ngOnInit(): void {
  }

}
