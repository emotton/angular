import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { HeaderComponent } from '../../componentes/header/header.component';
import { HomeLazyComponent } from '../../componentes/home-lazy/home-lazy.component';

const routes: Routes = [
  { path: '', component: HomeLazyComponent,
    children: [
      { path: 'header', component: HeaderComponent},
      { path: 'footer', component: FooterComponent}
    ]}
];

@NgModule({
  declarations: [HomeLazyComponent, HeaderComponent, FooterComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
