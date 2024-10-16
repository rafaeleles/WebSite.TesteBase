import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }