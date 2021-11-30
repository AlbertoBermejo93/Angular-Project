import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  

  constructor(
    public router: Router,
    public api: ApiService,
    public routeActive: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
