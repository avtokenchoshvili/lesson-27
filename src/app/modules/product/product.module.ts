import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from 'src/app/product-list/product-list.component';
import { ProductDetailComponent } from 'src/app/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';

console.log('product module loaded...');

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
