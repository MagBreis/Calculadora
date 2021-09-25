import { CientificaService } from './services/cientifica.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CientificaComponent } from './components';



@NgModule({
  declarations: [
    CientificaComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    CientificaComponent
  ],
  providers:[
    CientificaService
  ]
})
export class CientificaModule { }
