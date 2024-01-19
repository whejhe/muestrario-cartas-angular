import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  public image: string[] = [];

  constructor(private http: HttpClient,private router:Router) {
    this.loadImages();
  }
  
  getRoute(): string {
    return this.router.url;
  }

  loadImages() {
    this.http.get<any>('assets/modelos/images.json').subscribe(data => {
      this.image = data.images;
    });
  }
}
