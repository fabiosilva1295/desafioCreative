import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { GetProfService } from 'src/app/services/get-prof/get-prof.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public user: Professor = {}

  constructor(public getProfService: GetProfService) { }

  ngOnInit(): void {

    this.getProfService.getProf().subscribe((response: any) => {
      this.user = response[0]
    })

  }

}
