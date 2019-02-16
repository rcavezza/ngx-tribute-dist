import { Directive, ElementRef, EventEmitter, Input, Optional, Output, NgModule } from '@angular/core';
import { FormControlDirective, FormControlName, NgModel } from '@angular/forms';
import Tribute from 'tributejs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class NgxTributeDirective {
    /**
     * @param {?} element
     * @param {?} formControlName
     * @param {?} formControlDirective
     * @param {?} ngModelDirective
     */
    constructor(element, formControlName, formControlDirective, ngModelDirective) {
        this.element = element;
        this.formControlName = formControlName;
        this.formControlDirective = formControlDirective;
        this.ngModelDirective = ngModelDirective;
        this.onMentioned = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get control() {
        return this.implicitFormControl ||
            (this.formControlName && this.formControlName.control) ||
            (this.formControlDirective && this.formControlDirective.control) ||
            (this.ngModelDirective && this.ngModelDirective.control);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tribute = new Tribute(this.options);
        this.tribute.attach(this.element.nativeElement);
        this.element.nativeElement.addEventListener('tribute-replaced', () => {
            /** @type {?} */
            const value = ['INPUT', 'TEXTAREA'].includes(this.element.nativeElement.tagName)
                ? this.element.nativeElement.value
                : this.element.nativeElement.innerHTML;
            this.onMentioned.emit(value);
            if (this.control) {
                this.control.setValue(value);
            }
        });
    }
}
NgxTributeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxTribute]',
                exportAs: 'ngx-tribute'
            },] },
];
/** @nocollapse */
NgxTributeDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: FormControlName, decorators: [{ type: Optional }] },
    { type: FormControlDirective, decorators: [{ type: Optional }] },
    { type: NgModel, decorators: [{ type: Optional }] }
];
NgxTributeDirective.propDecorators = {
    options: [{ type: Input, args: ['ngxTribute',] }],
    implicitFormControl: [{ type: Input }],
    onMentioned: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxTributeModule {
}
NgxTributeModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [NgxTributeDirective],
                exports: [NgxTributeDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxTributeModule, NgxTributeDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyaWJ1dGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC10cmlidXRlL2xpYi9uZ3gtdHJpYnV0ZS5kaXJlY3RpdmUudHMiLCJuZzovL25neC10cmlidXRlL2xpYi9uZ3gtdHJpYnV0ZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3B0aW9uYWwsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lLCBOZ01vZGVsfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgVHJpYnV0ZSwge1RyaWJ1dGVPcHRpb25zfSBmcm9tICd0cmlidXRlanMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3hUcmlidXRlXScsXG4gICAgZXhwb3J0QXM6ICduZ3gtdHJpYnV0ZSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4VHJpYnV0ZURpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCduZ3hUcmlidXRlJylcbiAgICBvcHRpb25zOiBUcmlidXRlT3B0aW9uczxUPjtcblxuICAgIEBJbnB1dCgpXG4gICAgaW1wbGljaXRGb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgICBAT3V0cHV0KClcbiAgICBvbk1lbnRpb25lZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgdHJpYnV0ZTogVHJpYnV0ZTxUPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWUsXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZm9ybUNvbnRyb2xEaXJlY3RpdmU6IEZvcm1Db250cm9sRGlyZWN0aXZlLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5nTW9kZWxEaXJlY3RpdmU6IE5nTW9kZWxcbiAgICApIHt9XG5cbiAgICBnZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGxpY2l0Rm9ybUNvbnRyb2wgfHxcbiAgICAgICAgICAgICh0aGlzLmZvcm1Db250cm9sTmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZS5jb250cm9sKSB8fFxuICAgICAgICAgICAgKHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUgJiYgdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS5jb250cm9sKSB8fFxuICAgICAgICAgICAgKHRoaXMubmdNb2RlbERpcmVjdGl2ZSAmJiB0aGlzLm5nTW9kZWxEaXJlY3RpdmUuY29udHJvbCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudHJpYnV0ZSA9IG5ldyBUcmlidXRlKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMudHJpYnV0ZS5hdHRhY2godGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyaWJ1dGUtcmVwbGFjZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IFsnSU5QVVQnLCAnVEVYVEFSRUEnXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC50YWdOYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgPyB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgIDogdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICB0aGlzLm9uTWVudGlvbmVkLmVtaXQodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tmd4VHJpYnV0ZURpcmVjdGl2ZX0gZnJvbSAnLi9uZ3gtdHJpYnV0ZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05neFRyaWJ1dGVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTmd4VHJpYnV0ZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VHJpYnV0ZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFRQTs7Ozs7OztJQVlJLFlBQ1ksU0FDWSxlQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsZ0JBQXlCO1FBSHJDLFlBQU8sR0FBUCxPQUFPO1FBQ0ssb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFTOzJCQVJuQyxJQUFJLFlBQVksRUFBVTtLQVNwQzs7OztJQUVKLElBQUksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUMxQixJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO2FBQ3JELElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDO2FBQy9ELElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDaEU7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTs7WUFDNUQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQ3JDO2tCQUNLLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUs7a0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztZQUUzQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEM7U0FDSixDQUFDLENBQUM7S0FDTjs7O1lBL0NKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7YUFDMUI7Ozs7WUFQa0IsVUFBVTtZQUNjLGVBQWUsdUJBcUJqRCxRQUFRO1lBckJJLG9CQUFvQix1QkFzQmhDLFFBQVE7WUF0QjJDLE9BQU8sdUJBdUIxRCxRQUFROzs7c0JBZlosS0FBSyxTQUFDLFlBQVk7a0NBR2xCLEtBQUs7MEJBR0wsTUFBTTs7Ozs7OztBQ2ZYOzs7WUFHQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQy9COzs7Ozs7Ozs7Ozs7Ozs7In0=