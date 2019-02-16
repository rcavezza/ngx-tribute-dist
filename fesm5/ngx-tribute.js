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
var NgxTributeDirective = /** @class */ (function () {
    function NgxTributeDirective(element, formControlName, formControlDirective, ngModelDirective) {
        this.element = element;
        this.formControlName = formControlName;
        this.formControlDirective = formControlDirective;
        this.ngModelDirective = ngModelDirective;
        this.onMentioned = new EventEmitter();
    }
    Object.defineProperty(NgxTributeDirective.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.implicitFormControl ||
                (this.formControlName && this.formControlName.control) ||
                (this.formControlDirective && this.formControlDirective.control) ||
                (this.ngModelDirective && this.ngModelDirective.control);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxTributeDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.tribute = new Tribute(this.options);
        this.tribute.attach(this.element.nativeElement);
        this.element.nativeElement.addEventListener('tribute-replaced', function () {
            /** @type {?} */
            var value = ['INPUT', 'TEXTAREA'].includes(_this.element.nativeElement.tagName)
                ? _this.element.nativeElement.value
                : _this.element.nativeElement.innerHTML;
            _this.onMentioned.emit(value);
            if (_this.control) {
                _this.control.setValue(value);
            }
        });
    };
    NgxTributeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxTribute]',
                    exportAs: 'ngx-tribute'
                },] },
    ];
    /** @nocollapse */
    NgxTributeDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: FormControlName, decorators: [{ type: Optional }] },
        { type: FormControlDirective, decorators: [{ type: Optional }] },
        { type: NgModel, decorators: [{ type: Optional }] }
    ]; };
    NgxTributeDirective.propDecorators = {
        options: [{ type: Input, args: ['ngxTribute',] }],
        implicitFormControl: [{ type: Input }],
        onMentioned: [{ type: Output }]
    };
    return NgxTributeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxTributeModule = /** @class */ (function () {
    function NgxTributeModule() {
    }
    NgxTributeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [NgxTributeDirective],
                    exports: [NgxTributeDirective]
                },] },
    ];
    return NgxTributeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxTributeModule, NgxTributeDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyaWJ1dGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC10cmlidXRlL2xpYi9uZ3gtdHJpYnV0ZS5kaXJlY3RpdmUudHMiLCJuZzovL25neC10cmlidXRlL2xpYi9uZ3gtdHJpYnV0ZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3B0aW9uYWwsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lLCBOZ01vZGVsfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgVHJpYnV0ZSwge1RyaWJ1dGVPcHRpb25zfSBmcm9tICd0cmlidXRlanMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3hUcmlidXRlXScsXG4gICAgZXhwb3J0QXM6ICduZ3gtdHJpYnV0ZSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4VHJpYnV0ZURpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCduZ3hUcmlidXRlJylcbiAgICBvcHRpb25zOiBUcmlidXRlT3B0aW9uczxUPjtcblxuICAgIEBJbnB1dCgpXG4gICAgaW1wbGljaXRGb3JtQ29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgICBAT3V0cHV0KClcbiAgICBvbk1lbnRpb25lZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgdHJpYnV0ZTogVHJpYnV0ZTxUPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWUsXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZm9ybUNvbnRyb2xEaXJlY3RpdmU6IEZvcm1Db250cm9sRGlyZWN0aXZlLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5nTW9kZWxEaXJlY3RpdmU6IE5nTW9kZWxcbiAgICApIHt9XG5cbiAgICBnZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGxpY2l0Rm9ybUNvbnRyb2wgfHxcbiAgICAgICAgICAgICh0aGlzLmZvcm1Db250cm9sTmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZS5jb250cm9sKSB8fFxuICAgICAgICAgICAgKHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUgJiYgdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS5jb250cm9sKSB8fFxuICAgICAgICAgICAgKHRoaXMubmdNb2RlbERpcmVjdGl2ZSAmJiB0aGlzLm5nTW9kZWxEaXJlY3RpdmUuY29udHJvbCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudHJpYnV0ZSA9IG5ldyBUcmlidXRlKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMudHJpYnV0ZS5hdHRhY2godGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyaWJ1dGUtcmVwbGFjZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IFsnSU5QVVQnLCAnVEVYVEFSRUEnXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC50YWdOYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgPyB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgIDogdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICB0aGlzLm9uTWVudGlvbmVkLmVtaXQodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tmd4VHJpYnV0ZURpcmVjdGl2ZX0gZnJvbSAnLi9uZ3gtdHJpYnV0ZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05neFRyaWJ1dGVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTmd4VHJpYnV0ZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VHJpYnV0ZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0lBb0JJLDZCQUNZLFNBQ1ksZUFBZ0MsRUFDaEMsb0JBQTBDLEVBQzFDLGdCQUF5QjtRQUhyQyxZQUFPLEdBQVAsT0FBTztRQUNLLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUzsyQkFSbkMsSUFBSSxZQUFZLEVBQVU7S0FTcEM7SUFFSixzQkFBSSx3Q0FBTzs7OztRQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsbUJBQW1CO2lCQUMxQixJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO2lCQUNyRCxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztpQkFDL0QsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoRTs7O09BQUE7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTs7WUFDNUQsSUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUN4QyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQ3JDO2tCQUNLLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUs7a0JBQ2hDLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztZQUUzQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU3QixJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEM7U0FDSixDQUFDLENBQUM7S0FDTjs7Z0JBL0NKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7aUJBQzFCOzs7O2dCQVBrQixVQUFVO2dCQUNjLGVBQWUsdUJBcUJqRCxRQUFRO2dCQXJCSSxvQkFBb0IsdUJBc0JoQyxRQUFRO2dCQXRCMkMsT0FBTyx1QkF1QjFELFFBQVE7OzswQkFmWixLQUFLLFNBQUMsWUFBWTtzQ0FHbEIsS0FBSzs4QkFHTCxNQUFNOzs4QkFmWDs7Ozs7OztBQ0FBOzs7O2dCQUdDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsRUFDUjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQy9COzsyQkFSRDs7Ozs7Ozs7Ozs7Ozs7OyJ9