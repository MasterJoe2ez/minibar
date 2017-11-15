import { Component, OnInit } from '@angular/core';
import { ItemsService} from '../../shared/items.service';
import { NgForm } from "@angular/forms";
import { Item} from "../../shared/item";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemsService) {
    this.itemService.item = {
      $key: null,
      id: '',
      name: '',
      amount: 0,
      cost: 0,
      sell: 0,
    };
  }


  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.pin.length;
  }

  ngOnInit() {
    let x = this.itemService.getItemList();
    x.snapshotChanges().subscribe(item => {
      this.items = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.items.push(y as Item);
      });
    });
  }

  onSubmit(form: NgForm) {
    if (form.value.$key === null) {
      this.itemService.createItem(form.value);
    }
    else {
      this.itemService.updateItem(form.value);
    }
    this.resetForm(form);
  }



    resetForm(form: NgForm) {
    if (form !== null) {
      form.reset();
      this.itemService.item = {
        $key: null,
        id: '',
        name: '',
        amount: 0,
        cost: 0,
        sell: 0,
      };
    }
  }

  onDelete(form: NgForm) {
    if (confirm('Are you sure to delete this record ?')) {
      this.itemService.deleteItem(form.value.$key);
      this.resetForm(form);
    }
  }

  onItemClick(item: Item) {
    this.itemService.item = Object.assign({}, item);
  }


}
