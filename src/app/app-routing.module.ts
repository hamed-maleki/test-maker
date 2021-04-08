import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCreateComponent } from './test-create/test-create.component';
import {AddingTestComponent} from './adding-test/adding-test.component'

const routes: Routes = [
  { path: '', component: TestCreateComponent },
  { path: 'createTest', component: AddingTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
