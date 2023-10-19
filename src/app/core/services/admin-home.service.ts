import {Injectable} from "@angular/core";

@Injectable()
export class AdminHomeService {
  homeMode: boolean = true;

  onHome() {
    this.homeMode = true;
  }

  onAdmin() {
    this.homeMode = false;
  }
}
