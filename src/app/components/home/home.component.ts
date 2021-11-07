import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { GetProfService } from 'src/app/services/get-prof/get-prof.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profList: any = []
  constructor(private getProfessorService: GetProfService) { }

  ngOnInit(): void {
    this.profList = this.getProfessorService.getProf().subscribe(response => {
      this.profList = response
      console.log(this.profList)
    })
  }

}
