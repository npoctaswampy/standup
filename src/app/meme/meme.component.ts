import { Component, OnInit } from '@angular/core';
import { MemeApiService } from '../service/meme-api.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {

  memeContent: any;

  constructor(private memeApiService: MemeApiService) { }

  ngOnInit(): void {
    this.memeApiService.getMeme().subscribe(m => this.memeContent = m);
  }

}
