import {NgModule} from "@angular/core";
import {AdminFooterComponent} from './admin-footer/admin-footer.component';
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import {HomeAdminComponent} from './home-admin/home-admin.component';

@NgModule({
  declarations: [
    AdminFooterComponent,
    AdminHeaderComponent,
    HomeAdminComponent
  ],
  exports: [
    HomeAdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  imports: [],
  providers: []
})
export class AdminModule {
}
