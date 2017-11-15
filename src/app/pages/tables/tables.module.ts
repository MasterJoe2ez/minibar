import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { DataFilterPipe } from './components/dataTables/data-filter.pipe';
import { HotTable, HotTableModule } from 'ng2-handsontable';



import { routing } from './tables.routing';
import { Tables } from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { BasicTablesService } from './components/basicTables/basicTables.service';
import { ResponsiveTable } from './components/basicTables/components/responsiveTable';
import { StripedTable } from './components/basicTables/components/stripedTable';
import { BorderedTable } from './components/basicTables/components/borderedTable';
import { HoverTable } from './components/basicTables/components/hoverTable';
import { CondensedTable } from './components/basicTables/components/condensedTable';
import { ContextualTable } from './components/basicTables/components/contextualTable';
import { SmartTables } from './components/smartTables/smartTables.component';
import { SmartTablesService } from './components/smartTables/smartTables.service';
import { DataTables } from './components/dataTables/dataTables.component';
import { DataTablesService } from './components/dataTables/dataTables.service';
import { UserTableService } from './components/user-table/user-table.service';
import { TableService } from './shared/table.service';
import {UserService} from './components/user/user.service';
import { ReportService} from './components/report/report.service';
import { ItemsService} from './shared/items.service';

import { HotTablesComponent } from './components/hotTables/hotTables.component';
import { HandsontableSectionComponent } from './components/hotTables/handsontable-section';
import { BasicDemoComponent } from './components/hotTables/handsontable/basic-demo';
import { SheetDemoComponent } from './components/hotTables/handsontable/sheet-demo';
import { FinanceDemoComponent } from './components/hotTables/handsontable/finance-demo';
import { ScienceDemoComponent } from './components/hotTables/handsontable/science-demo';
import { SportDemoComponent } from './components/hotTables/handsontable/sport-demo';
import { AdvancedDemoComponent } from './components/hotTables/handsontable/advanced-demo';
import { UserTableComponent } from './components/user-table/user-table.component';
import { TestComponent } from './components/test/test.component';
import { UserComponent } from './components/user/user.component';
import { PopupComponent } from './components/popup/popup.component';
import { PopupUserComponent } from './components/user/popup-user/popup-user.component';
import { ReportComponent } from './components/report/report.component';
import { DescriptionComponent } from './components/report/description/description.component';
import { ItemsComponent } from './components/items/items.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    HotTableModule,
  ],
  declarations: [
    Tables,
    BasicTables,
    HoverTable,
    BorderedTable,
    CondensedTable,
    StripedTable,
    ContextualTable,
    ResponsiveTable,
    SmartTables,
    DataTables,
    DataFilterPipe,
    HotTablesComponent,
    HandsontableSectionComponent,
    BasicDemoComponent,
    AdvancedDemoComponent,
    FinanceDemoComponent,
    ScienceDemoComponent,
    SportDemoComponent,
    SheetDemoComponent,
    UserTableComponent,
    TestComponent,
    UserComponent,
    PopupComponent,
    PopupUserComponent,
    ReportComponent,
    DescriptionComponent,
    ItemsComponent
  ],
  entryComponents: [
    PopupComponent
  ],
  providers: [
    BasicTablesService,
    SmartTablesService,
    DataTablesService,
    UserTableService,
    TableService,
    UserService,
    ReportService,
    ItemsService,
  ]

})
export class TablesModule {
}
