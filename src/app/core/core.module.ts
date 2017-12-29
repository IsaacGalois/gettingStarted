import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class CoreModule { }
