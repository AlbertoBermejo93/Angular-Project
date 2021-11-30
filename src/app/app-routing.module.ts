import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemComponent } from './item/item.component';


// declaracion de las rutas en la pagina web
const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'detail', component: DetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'item/:id', component: ItemComponent},
  { path: 'boutique/item/:id', component: ItemComponent},
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
