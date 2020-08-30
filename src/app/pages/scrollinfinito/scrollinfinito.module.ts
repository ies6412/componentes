import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollinfinitoPageRoutingModule } from './scrollinfinito-routing.module';

import { ScrollinfinitoPage } from './scrollinfinito.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollinfinitoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ScrollinfinitoPage]
})
export class ScrollinfinitoPageModule {}
