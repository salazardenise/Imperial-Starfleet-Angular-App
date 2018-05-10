import { RouterModule } from '@angular/router';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { DeathSquareComponent } from './death-square/death-square.component';
import { TurrentComponent } from './turrent/turrent.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TurrentComponent, DeathSquareComponent, LaserCannonComponent],
  exports: [TurrentComponent, DeathSquareComponent, LaserCannonComponent]
})
export class InternalDefensesModule { }
