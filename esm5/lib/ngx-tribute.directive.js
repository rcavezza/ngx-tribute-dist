/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Optional, Output } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName, NgModel } from '@angular/forms';
import Tribute from 'tributejs';
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
export { NgxTributeDirective };
if (false) {
    /** @type {?} */
    NgxTributeDirective.prototype.options;
    /** @type {?} */
    NgxTributeDirective.prototype.implicitFormControl;
    /** @type {?} */
    NgxTributeDirective.prototype.onMentioned;
    /** @type {?} */
    NgxTributeDirective.prototype.tribute;
    /** @type {?} */
    NgxTributeDirective.prototype.element;
    /** @type {?} */
    NgxTributeDirective.prototype.formControlName;
    /** @type {?} */
    NgxTributeDirective.prototype.formControlDirective;
    /** @type {?} */
    NgxTributeDirective.prototype.ngModelDirective;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyaWJ1dGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRyaWJ1dGUvIiwic291cmNlcyI6WyJsaWIvbmd4LXRyaWJ1dGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0YsT0FBTyxPQUF5QixNQUFNLFdBQVcsQ0FBQzs7Ozs7SUFrQjlDLDZCQUNZLFNBQ1ksZUFBZ0MsRUFDaEMsb0JBQTBDLEVBQzFDLGdCQUF5QjtRQUhyQyxZQUFPLEdBQVAsT0FBTztRQUNLLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUzsyQkFSbkMsSUFBSSxZQUFZLEVBQVU7S0FTcEM7SUFFSixzQkFBSSx3Q0FBTzs7OztRQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUI7Z0JBQzNCLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztnQkFDdEQsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztnQkFDaEUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hFOzs7T0FBQTs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFOztZQUM1RCxJQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQ3hDLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FDckM7Z0JBQ0csQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUs7Z0JBQ2xDLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFFM0MsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFN0IsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEM7U0FDSixDQUFDLENBQUM7S0FDTjs7Z0JBL0NKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7aUJBQzFCOzs7O2dCQVBrQixVQUFVO2dCQUNjLGVBQWUsdUJBcUJqRCxRQUFRO2dCQXJCSSxvQkFBb0IsdUJBc0JoQyxRQUFRO2dCQXRCMkMsT0FBTyx1QkF1QjFELFFBQVE7OzswQkFmWixLQUFLLFNBQUMsWUFBWTtzQ0FHbEIsS0FBSzs4QkFHTCxNQUFNOzs4QkFmWDs7U0FRYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUsIE5nTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBUcmlidXRlLCB7VHJpYnV0ZU9wdGlvbnN9IGZyb20gJ3RyaWJ1dGVqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neFRyaWJ1dGVdJyxcbiAgICBleHBvcnRBczogJ25neC10cmlidXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hUcmlidXRlRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoJ25neFRyaWJ1dGUnKVxuICAgIG9wdGlvbnM6IFRyaWJ1dGVPcHRpb25zPFQ+O1xuXG4gICAgQElucHV0KClcbiAgICBpbXBsaWNpdEZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcblxuICAgIEBPdXRwdXQoKVxuICAgIG9uTWVudGlvbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICB0cmlidXRlOiBUcmlidXRlPFQ+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBmb3JtQ29udHJvbE5hbWU6IEZvcm1Db250cm9sTmFtZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBmb3JtQ29udHJvbERpcmVjdGl2ZTogRm9ybUNvbnRyb2xEaXJlY3RpdmUsXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbmdNb2RlbERpcmVjdGl2ZTogTmdNb2RlbFxuICAgICkge31cblxuICAgIGdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbGljaXRGb3JtQ29udHJvbCB8fFxuICAgICAgICAgICAgKHRoaXMuZm9ybUNvbnRyb2xOYW1lICYmIHRoaXMuZm9ybUNvbnRyb2xOYW1lLmNvbnRyb2wpIHx8XG4gICAgICAgICAgICAodGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZSAmJiB0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlLmNvbnRyb2wpIHx8XG4gICAgICAgICAgICAodGhpcy5uZ01vZGVsRGlyZWN0aXZlICYmIHRoaXMubmdNb2RlbERpcmVjdGl2ZS5jb250cm9sKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50cmlidXRlID0gbmV3IFRyaWJ1dGUodGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy50cmlidXRlLmF0dGFjaCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJpYnV0ZS1yZXBsYWNlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gWydJTlBVVCcsICdURVhUQVJFQSddLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnRhZ05hbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA/IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgOiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgICAgICAgIHRoaXMub25NZW50aW9uZWQuZW1pdCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=