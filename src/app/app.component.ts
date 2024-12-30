import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'complete-project';
  loadedFeature: String = 'recipe';
  name: any;
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    //console.log(localStorage.getItem("myAppName"));
    console.log(localStorage);
  }
  onNavigate(feature: String){
    this.loadedFeature  = feature;
  }
}
