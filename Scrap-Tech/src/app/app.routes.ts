import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { AgricultureProductsComponent } from './Pages/agriculture-products/agriculture-products.component';
import { DehydrateFoodComponent } from './Pages/dehydrate-food/dehydrate-food.component';
import { FlourComponent } from './Pages/flour/flour.component';
import { FruitsVegetablesComponent } from './Pages/fruits-vegetables/fruits-vegetables.component';
import { GarmentsComponent } from './Pages/garments/garments.component';
import { SpicesComponent } from './Pages/spices/spices.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'blog',component:BlogComponent},
    {path:'contact-us',component:ContactUsComponent},
    { path: 'products/fruits-vegetables', component: FruitsVegetablesComponent },
    { path: 'products/agriculture-products', component: AgricultureProductsComponent },
    { path: 'products/flour', component: FlourComponent },
    { path: 'products/spices', component: SpicesComponent },
    { path: 'products/dehydrate-food', component: DehydrateFoodComponent },
    { path: 'products/garments', component: GarmentsComponent },

];
