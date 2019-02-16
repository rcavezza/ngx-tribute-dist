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
export class NgxTributeDirective {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyaWJ1dGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRyaWJ1dGUvIiwic291cmNlcyI6WyJsaWIvbmd4LXRyaWJ1dGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0YsT0FBTyxPQUF5QixNQUFNLFdBQVcsQ0FBQzs7OztBQU1sRCxNQUFNOzs7Ozs7O0lBWUYsWUFDWSxTQUNZLGVBQWdDLEVBQ2hDLG9CQUEwQyxFQUMxQyxnQkFBeUI7UUFIckMsWUFBTyxHQUFQLE9BQU87UUFDSyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVM7MkJBUm5DLElBQUksWUFBWSxFQUFVO0tBU3BDOzs7O0lBRUosSUFBSSxPQUFPO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUI7WUFDM0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO1lBQ3RELENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7WUFDaEUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2hFOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFOztZQUNqRSxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FDckM7Z0JBQ0csQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUs7Z0JBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFFM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEM7U0FDSixDQUFDLENBQUM7S0FDTjs7O1lBL0NKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7YUFDMUI7Ozs7WUFQa0IsVUFBVTtZQUNjLGVBQWUsdUJBcUJqRCxRQUFRO1lBckJJLG9CQUFvQix1QkFzQmhDLFFBQVE7WUF0QjJDLE9BQU8sdUJBdUIxRCxRQUFROzs7c0JBZlosS0FBSyxTQUFDLFlBQVk7a0NBR2xCLEtBQUs7MEJBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE9wdGlvbmFsLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSwgTmdNb2RlbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IFRyaWJ1dGUsIHtUcmlidXRlT3B0aW9uc30gZnJvbSAndHJpYnV0ZWpzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4VHJpYnV0ZV0nLFxuICAgIGV4cG9ydEFzOiAnbmd4LXRyaWJ1dGUnXG59KVxuZXhwb3J0IGNsYXNzIE5neFRyaWJ1dGVEaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgnbmd4VHJpYnV0ZScpXG4gICAgb3B0aW9uczogVHJpYnV0ZU9wdGlvbnM8VD47XG5cbiAgICBASW5wdXQoKVxuICAgIGltcGxpY2l0Rm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuXG4gICAgQE91dHB1dCgpXG4gICAgb25NZW50aW9uZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIHRyaWJ1dGU6IFRyaWJ1dGU8VD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGZvcm1Db250cm9sTmFtZTogRm9ybUNvbnRyb2xOYW1lLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGZvcm1Db250cm9sRGlyZWN0aXZlOiBGb3JtQ29udHJvbERpcmVjdGl2ZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuZ01vZGVsRGlyZWN0aXZlOiBOZ01vZGVsXG4gICAgKSB7fVxuXG4gICAgZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsaWNpdEZvcm1Db250cm9sIHx8XG4gICAgICAgICAgICAodGhpcy5mb3JtQ29udHJvbE5hbWUgJiYgdGhpcy5mb3JtQ29udHJvbE5hbWUuY29udHJvbCkgfHxcbiAgICAgICAgICAgICh0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlICYmIHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUuY29udHJvbCkgfHxcbiAgICAgICAgICAgICh0aGlzLm5nTW9kZWxEaXJlY3RpdmUgJiYgdGhpcy5uZ01vZGVsRGlyZWN0aXZlLmNvbnRyb2wpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnRyaWJ1dGUgPSBuZXcgVHJpYnV0ZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLnRyaWJ1dGUuYXR0YWNoKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmlidXRlLXJlcGxhY2VkJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBbJ0lOUFVUJywgJ1RFWFRBUkVBJ10uaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGFnTmFtZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgID8gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICA6IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgICAgICAgdGhpcy5vbk1lbnRpb25lZC5lbWl0KHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==