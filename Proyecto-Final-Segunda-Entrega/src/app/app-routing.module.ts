import { CartComponent } from './features/cart/components/cart/cart.component';
import { LoginComponent } from './features/login/components/login/login.component';
import { RegisterComponent } from './features/register/components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'carrito/:id',
    component: CartComponent
  },
  // {
  //   path: 'peliculas/:id',
  //   component: InfoComponent
  // },
  // {
  //   path: 'peliculas',
  //   component: MoviesComponent
  // },
  {
    path: 'peliculas',
    loadChildren: ()=>import('./features/movies/movies.module').then(m=>m.MoviesModule)
  },
  {
    path:'login',
    loadChildren: ()=> import('./features/login/login.module').then(m => m.LoginModule)
    // component: LoginComponent
  },
  {
    path:'register',
    loadChildren: ()=> import('./features/register/register.module').then(m=>m.RegisterModule)
    // component: RegisterComponent
  },
  // {
  //   path: 'info',
  //   component:InfoComponent
  // },
  {
    path:'carrito',
    loadChildren: ()=> import('./features/cart/cart.module').then(m => m.CartModule)
    // component: CartComponent
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
