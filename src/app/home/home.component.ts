import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingPhotos: any;
  topPickPhotos: any;
  popularPhotos: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getTrendingPhotos();
    this.getTopPickPhotos();
    this.getPopularPhotos();
  }

  getTrendingPhotos() {
    this.http
      .get('http://localhost:4200/assets/data/trending-photos.json')
      .subscribe((photos) => {
        this.trendingPhotos = photos;
      });
  }

  getTopPickPhotos() {
    this.http
      .get('http://localhost:4200/assets/data/top-pick-photos.json')
      .subscribe((photos) => {
        this.topPickPhotos = photos;
      });
  }

  getPopularPhotos() {
    this.http
      .get('http://localhost:4200/assets/data/popular-photos.json')
      .subscribe((photos) => {
        this.popularPhotos = photos;
      });
  }

  goToPhoto(type: string, id: string) {
    this.router.navigate(['photo', type, id]);
  }

}