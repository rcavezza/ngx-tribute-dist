import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName, NgModel } from '@angular/forms';
import Tribute, { TributeOptions } from 'tributejs';
export declare class NgxTributeDirective<T> implements OnInit {
    private element;
    private formControlName;
    private formControlDirective;
    private ngModelDirective;
    options: TributeOptions<T>;
    implicitFormControl: FormControl;
    onMentioned: EventEmitter<string>;
    tribute: Tribute<T>;
    constructor(element: ElementRef, formControlName: FormControlName, formControlDirective: FormControlDirective, ngModelDirective: NgModel);
    readonly control: FormControl;
    ngOnInit(): void;
}
