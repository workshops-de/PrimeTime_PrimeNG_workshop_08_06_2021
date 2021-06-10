import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FieldsetModule } from 'primeng/fieldset';
import { EditorModule } from 'primeng/editor';
import { ListboxModule } from 'primeng/listbox';



@NgModule({
  declarations: [
    ProjectsComponent,
    ValidationErrorsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    EditorModule,
    RadioButtonModule,
    FieldsetModule,
    ListboxModule
  ]
})
export class MainModule { }
