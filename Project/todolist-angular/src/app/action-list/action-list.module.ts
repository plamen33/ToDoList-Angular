import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import { SharedModule } from '../shared/shared.module';
import {ActionEditComponent} from "./action-edit/action-edit.component";
import {ActionListComponent} from "./action-list.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [  ActionListComponent,
    ActionEditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ActionListComponent }, // was: path: 'action-list'
    ])
    ,SharedModule
  ]
})
export class ActionListModule {}
