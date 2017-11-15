import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Report } from './report';
@Injectable()
export class ReportService {

  constructor(private db: AngularFireDatabase) { }

  users: AngularFireList<any> = null;

  getRoportList() {
    this.users = this.db.list('users');
    return this.users;
  }
  deleteReport(key: string) {
    this.users.remove(key);
  }


}
