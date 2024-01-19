import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vtes',
  templateUrl: './vtes.component.html',
  styleUrls: ['./vtes.component.css']
})
export class VtesComponent {
  public image: string[] = [];

  constructor(private http: HttpClient,private router:Router) {
    this.loadImages();
  }

  getRoute(): string {
    return this.router.url;
  }

  loadImages() {
    this.http.get<any>('assets/vtes/images.json').subscribe(data => {
      this.image = data.images;
    });
  }
}
