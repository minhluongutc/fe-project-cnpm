import {Component, OnInit} from '@angular/core';
import {AdminHomeService} from "../../../core/services/admin-home.service";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  constructor(private adminHomeSV: AdminHomeService) {
  }

  ngOnInit() {
    this.adminHomeSV.onAdmin();
  }
}
