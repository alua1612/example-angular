import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title="Video List";
  someItem="<h1>Hi !</h1>";
  todayDate;
  //videoList=["Item 1", "Item 2", "Item 3"]
  videoList=[{
    name: "Item 1",
    slug:"item-1",
    embed:`i9MHigUZKEM`,
  },
  {
    name: "Item 2",
    slug:"item-2",
    embed:`i9MHigUZKEM`,
  },
  {
    name: "Item 3",
    slug:"item-3",
    embed:null    ,
  },
  ]
  constructor() { }

  ngOnInit() {
    this.todayDate=new Date();
  }

  getEmbedUrl(item){
    return 'https://www.youtube.com/embed/' + item.embed + ''
  }

}