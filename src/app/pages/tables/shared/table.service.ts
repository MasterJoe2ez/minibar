import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import {FirebaseListObservable , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TableService {
  usersRef: AngularFireList<any[]>;
  users: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.usersRef = db.list('/users') as AngularFireList<User[]>;
    // Use snapshotChanges().map() to store the key
    this.users = this.usersRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    this.usersRef.snapshotChanges(['child_added'])
      .subscribe(actions => {
        actions.forEach(action => {
          console.log(action.type);
          console.log(action.key);
          console.log(action.payload.val());
        });
      });
  }

  addUser(user) {
    this.usersRef.push(user);
  }
  // updateUser(key: string, newText: string) {
  //   this.usersRef.update(key, { text: newText });
  // }
  deleteUser(key: string) {
    this.usersRef.remove(key);
  }
  deleteEverything() {
    this.usersRef.remove();
  }
}

interface User {
  $key?: string;
  id?: number;
  pin?: string;
  name?: string;
  tel?: string;
}
