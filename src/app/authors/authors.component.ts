import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  author: any;
  results: any = []
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  onSearch(){
    this.searchService.searchAuthor(this.author).subscribe((res:any)=>{
      this.results = res.docs;
      console.log(res)
    })
  }

}
