import { Routes, RouterModule } from '@angular/router';

import { Tables } from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { SmartTables } from './components/smartTables/smartTables.component';
import { DataTables } from './components/dataTables/dataTables.component';
import { HotTablesComponent } from './components/hotTables/hotTables.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import {TestComponent} from './components/test/test.component';
import {UserComponent} from './components/user/user.component';
import {ItemsComponent} from './components/items/items.component';
import { ReportComponent} from "./components/report/report.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'basictables', component: BasicTables },
      { path: 'smarttables', component: SmartTables },
      { path: 'datatables', component: DataTables },
      { path: 'hottables', component: HotTablesComponent },
      { path: 'usertable' , component: UserTableComponent },
      { path: 'test' , component: TestComponent },
      { path: 'user' , component: UserComponent },
      { path: 'items' , component: ItemsComponent },
      { path: 'report' , component: ReportComponent },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
