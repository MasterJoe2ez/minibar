import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserTableService } from './user-table.service';
import { TableService } from '../../shared/table.service';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline" ></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        value: 'id',
      },
      pin: {
        title: 'PIN',
        type: 'string',
        value: 'pin'
      },
      name: {
        title: 'Name',
        type: 'string',
        value: 'name'
      },
      tel: {
        title: 'Tel.',
        type: 'string',
        value: 'tel'
      },

    },
  };


  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: UserTableService,
              private firebaseService: TableService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  id: number;
  pin: string;
  name: string;
  tel: string;
  onAddSubmit() {
    let user = {
      id: this.id,
      pin: this.pin,
      name: this.name,
      tel: this.tel,
    };
    this.firebaseService.addUser(user);
  }


  ngOnInit() {
  }

}
