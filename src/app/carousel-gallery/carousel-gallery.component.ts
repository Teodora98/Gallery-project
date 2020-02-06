import { Component, OnInit} from '@angular/core';
import { GalleryServiceService } from '../gallery-service.service';
import { Category, Image } from '../db-data';

@Component({
  selector: 'app-carousel-gallery',
  templateUrl: './carousel-gallery.component.html',
  styleUrls: ['./carousel-gallery.component.css']
})
export class CarouselGalleryComponent implements OnInit {

  
  ngOnInit() {
  }

  titles: Category[] = [];

  constructor(private apiService: GalleryServiceService) {
  
    this.apiService.getCategories().subscribe((res)=>{
      this.titles = res;
    });
  
    }
}
