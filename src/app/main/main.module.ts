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
import { TimesComponent } from './times/times.component';
import { TableModule } from 'primeng/table';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { StepsModule } from 'primeng/steps';
import { CalendarModule } from 'primeng/calendar';
import { TreeModule } from 'primeng/tree';
import { DataViewModule } from 'primeng/dataview';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({
  declarations: [
    ProjectsComponent,
    ValidationErrorsComponent,
    TimesComponent,
    TimesheetComponent
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
    ListboxModule,
    TableModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    CalendarModule,
    TreeModule,
    DataViewModule,
    TooltipModule
  ]
})
export class MainModule { }
