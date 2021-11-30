import { Component,Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @Input() name: string = '';
  @Input() abv: number = 0;

  constructor(
    public api: ApiService
  ) { }

  ngOnInit(): void {
  }

}
