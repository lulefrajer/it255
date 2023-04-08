import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  type = '';
  id = '';
  url = '';
  photos: any;
  photo: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-photos.json';
    }
    if (this.type === 'topPickPhotos') {
      this.url = 'http://localhost:4200/assets/data/top-pick-photos.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-photos.json';
    }
    this.getPhoto();
  }

  getPhoto() {
    this.http.get(this.url).subscribe((photos) => {
      this.photos = photos;
      let index = this.photos.findIndex((photo: { id: string; }) => photo.id == this.id
      );
      if(index > -1){
        this.photo=this.photos[index];
      }
    });
  }
}


