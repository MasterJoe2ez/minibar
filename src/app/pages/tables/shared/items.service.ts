import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Item } from './item';
@Injectable()
export class ItemsService {

  items: AngularFireList<any> = null;
  item: Item = new Item();

  constructor(private db: AngularFireDatabase) { }

  getItemList() {
    this.items = this.db.list('items');
    return this.items;
  }


  createItem(item: Item) {
    this.items.push({
      id: item.id,
      name: item.name,
      amount: item.amount,
      cost: item.cost,
      sell: item.sell,
    });
  }

  updateItem(item: Item) {
    this.items.update(item.$key, {
      id: item.id,
      name: item.name,
      amount: item.amount,
      cost: item.cost,
      sell: item.sell,
    });
  }

  deleteItem(key: string) {
    this.items.remove(key);
  }


}
