import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { PrimeIcons,MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'Scrap-Tech';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'About Us', icon: 'pi pi-info-circle', routerLink: '/about-us' },
      { label: 'Blog', icon: 'pi pi-pencil', routerLink: '/blog' },
      { label: 'Contact Us', icon: 'pi pi-envelope', routerLink: '/contact-us' },
      {
        label: 'Products',
        icon: 'pi pi-tags',
        items: [
          { label: 'Fruits & Vegetables', icon: 'pi pi-apple', routerLink: '/products/fruits-vegetables' },
          { label: 'Agriculture Products', icon: 'pi pi-leaf', routerLink: '/products/agriculture-products' },
          { label: 'Flour', icon: 'pi pi-shopping-cart', routerLink: '/products/flour' },
          { label: 'Spices', icon: 'pi pi-star', routerLink: '/products/spices' },
          { label: 'Dehydrate Food', icon: 'pi pi-cloud', routerLink: '/products/dehydrate-food' },
          { label: 'Garments', icon: 'pi pi-shirt', routerLink: '/products/garments' }
        ]
      }
    ];
  }
}
