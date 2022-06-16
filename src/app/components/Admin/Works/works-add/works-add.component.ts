import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works-add',
  templateUrl: './works-add.component.html',
  styleUrls: ['./works-add.component.scss']
})
export class WorksAddComponent implements OnInit {
  @Output() createWorks = new EventEmitter<{title: string, cate: string, years: number, desc:string }>();
  works:{title: string, cate: string, years: number, desc:string } = {
    title: "",
    cate: '',
    years: 0,
    desc: ''
  }
  constructor(private worksService: WorksService, private activatedRoute:ActivatedRoute,     private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id)
    this.worksService.getWorks(id).subscribe(data => this.works = data)
  }
  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id) {
      this.worksService.updateWorks(this.works).subscribe(data => console.log(data));
    }else{
      this.worksService.addWorks(this.works).subscribe(data => {this.router.navigateByUrl('/admin/works')})
    }
  }
}
