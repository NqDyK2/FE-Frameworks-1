import { Component, OnInit } from '@angular/core';
import { IWorks } from 'src/models/Works';
import { WorksService } from 'src/app/services/works.service';


@Component({
  selector: 'app-works-manager',
  templateUrl: './works-manager.component.html',
  styleUrls: ['./works-manager.component.scss']
})
export class WorksManagerComponent implements OnInit {
  dropDownList: any;

  works!: IWorks[]
  constructor(private worksService: WorksService) { }

  ngOnInit(): void {
    // chạy
    this.getWorksList();
  }

  // khai báo
  getWorksList() {
    this.worksService.getWorksList().subscribe(data => {
      this.works = data;
    })
  }
  onHanldeRemove( id:number){
    this.worksService.removeWorks(id).subscribe(() => {
      this.works = this.works.filter(item => item.id !== id)
    })
  }
}
