import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireObject , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  itemsRef: AngularFireList<any[]>;
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('/messages') as AngularFireList<Message[]>;
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })

    this.itemsRef.snapshotChanges(['child_added'])
      .subscribe(actions => {
        actions.forEach(action => {
          console.log(action.type);
          console.log(action.key);
          console.log(action.payload.val());
        });
      });



  }
  addItem(message) {
    this.itemsRef.push(message);
  }
  updateItem(key: string, message) {
    this.itemsRef.update(key, message);
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }
  ngOnInit() {
  }

}

interface Message {
  text: string;
  name: string;
  tel: string;
}
