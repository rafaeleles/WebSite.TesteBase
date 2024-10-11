import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    AboutRoutingModule  
  ],
  exports: [
    AboutComponent
  ],
  providers: [],
  bootstrap: [AboutComponent]
})
export class AboutModule { }