import {Component, OnInit} from '@angular/core';
import {AdminHomeService} from "../../../core/services/admin-home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private adminHomeSV: AdminHomeService) {
  }

  ngOnInit() {
    this.adminHomeSV.onHome()
  }
}
