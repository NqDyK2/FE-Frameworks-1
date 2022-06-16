import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorksService } from 'src/app/services/works.service';
import { IWorks } from 'src/models/Works';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
works!: IWorks
  constructor(private router: ActivatedRoute, private worksService: WorksService) { 
    const id = this.router.snapshot.paramMap.get('id');
    this.worksService.getWorks(id).subscribe((data) => {
      this.works = data
    })
  }

  ngOnInit(): void {
  }

}
