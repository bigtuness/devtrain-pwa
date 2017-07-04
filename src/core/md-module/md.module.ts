import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as hammerjs from 'hammerjs';

import {
    MdAutocompleteModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule, MdDatepickerModule, MdDialogModule,
    MdIconModule,
    MdInputModule, MdListModule, MdMenuModule, MdNativeDateModule, MdProgressBarModule, MdSelectModule,
    MdSidenavModule, MdSlideToggleModule, MdSnackBarModule, MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdGridListModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdCardModule,
        MdCheckboxModule,
        MdDatepickerModule,
        MdDialogModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdNativeDateModule,
        MdProgressBarModule,
        MdSelectModule,
        MdSidenavModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule,
        MdGridListModule
    ],
    exports: [
        MdAutocompleteModule,
        MdButtonModule,
        MdCardModule,
        MdCheckboxModule,
        MdDatepickerModule,
        MdDialogModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdNativeDateModule,
        MdProgressBarModule,
        MdSelectModule,
        MdSidenavModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule,
        MdGridListModule
    ],
    declarations: []
})
export class MdModule { }
