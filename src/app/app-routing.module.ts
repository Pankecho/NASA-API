import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDemoComponent } from './material/material-demo/material-demo.component';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';
import {MarsComponent} from './mars/mars.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'apod',
    pathMatch: 'full'
  },
  {
    path: 'mars-rover',
    component: MarsComponent
  },
  {
    path: 'apod',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
