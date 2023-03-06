import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { TableDataComponent } from './table-data/table-data.component';


const routes: Routes = [
 { path:'table',component:TableDataComponent},
 {path:'upload',component:FileUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }