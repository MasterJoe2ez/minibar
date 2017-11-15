import { Injectable } from '@angular/core';
@Injectable()
export class UserTableService {

  userTableData = [
    {
      id: 1,
      pin: 123456,
      name: 'xxxx xxxxxxx',
      tel: '085-5555555',
    },
    {
      id: 2,
      pin: 234567,
      name: 'xxxx xxxxxxx',
      tel: '085-5555555',
    },
    {
      id: 3,
      pin: 345678,
      name: 'xxxx xxxxxxx',
      tel: '085-5555555',
    },
  ];

  constructor() { }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.userTableData);
      }, 2000);
    });
  }

}
