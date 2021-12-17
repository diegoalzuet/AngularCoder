import { CartComponent } from './components/cart/cart.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'carrito/:id',
    component: CartComponent
  },
  {
    path: 'peliculas/:id',
    component: InfoComponent
  },
  {
    path: 'peliculas',
    component: MoviesComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },{
    path: 'info',
    component:InfoComponent
  },
  {
    path:'carrito',
    component: CartComponent
  },
  {
    path:'',
    redirectTo: 'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
