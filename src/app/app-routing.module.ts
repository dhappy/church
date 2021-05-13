import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { FloorplanComponent } from './components/floorplan/floorplan.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'plan',
    component: FloorplanComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
