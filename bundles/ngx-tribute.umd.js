(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('tributejs')) :
    typeof define === 'function' && define.amd ? define('ngx-tribute', ['exports', '@angular/core', '@angular/forms', 'tributejs'], factory) :
    (factory((global['ngx-tribute'] = {}),global.ng.core,global.ng.forms,null));
}(this, (function (exports,core,forms,Tribute) { 'use strict';

    Tribute = Tribute && Tribute.hasOwnProperty('default') ? Tribute['default'] : Tribute;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var NgxTributeDirective = (function () {
        function NgxTributeDirective(element, formControlName, formControlDirective, ngModelDirective) {
            this.element = element;
            this.formControlName = formControlName;
            this.formControlDirective = formControlDirective;
            this.ngModelDirective = ngModelDirective;
            this.onMentioned = new core.EventEmitter();
        }
        Object.defineProperty(NgxTributeDirective.prototype, "control", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[ngxTribute]',
                        exportAs: 'ngx-tribute'
                    },] },
        ];
        /** @nocollapse */
        NgxTributeDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: forms.FormControlName, decorators: [{ type: core.Optional }] },
                { type: forms.FormControlDirective, decorators: [{ type: core.Optional }] },
                { type: forms.NgModel, decorators: [{ type: core.Optional }] }
            ];
        };
        NgxTributeDirective.propDecorators = {
            options: [{ type: core.Input, args: ['ngxTribute',] }],
            implicitFormControl: [{ type: core.Input }],
            onMentioned: [{ type: core.Output }]
        };
        return NgxTributeDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxTributeModule = (function () {
        function NgxTributeModule() {
        }
        NgxTributeModule.decorators = [
            { type: core.NgModule, args: [{
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

    exports.NgxTributeModule = NgxTributeModule;
    exports.NgxTributeDirective = NgxTributeDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRyaWJ1dGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtdHJpYnV0ZS9saWIvbmd4LXRyaWJ1dGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtdHJpYnV0ZS9saWIvbmd4LXRyaWJ1dGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE9wdGlvbmFsLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSwgTmdNb2RlbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IFRyaWJ1dGUsIHtUcmlidXRlT3B0aW9uc30gZnJvbSAndHJpYnV0ZWpzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbmd4VHJpYnV0ZV0nLFxuICAgIGV4cG9ydEFzOiAnbmd4LXRyaWJ1dGUnXG59KVxuZXhwb3J0IGNsYXNzIE5neFRyaWJ1dGVEaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgnbmd4VHJpYnV0ZScpXG4gICAgb3B0aW9uczogVHJpYnV0ZU9wdGlvbnM8VD47XG5cbiAgICBASW5wdXQoKVxuICAgIGltcGxpY2l0Rm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuXG4gICAgQE91dHB1dCgpXG4gICAgb25NZW50aW9uZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIHRyaWJ1dGU6IFRyaWJ1dGU8VD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGZvcm1Db250cm9sTmFtZTogRm9ybUNvbnRyb2xOYW1lLFxuICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGZvcm1Db250cm9sRGlyZWN0aXZlOiBGb3JtQ29udHJvbERpcmVjdGl2ZSxcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuZ01vZGVsRGlyZWN0aXZlOiBOZ01vZGVsXG4gICAgKSB7fVxuXG4gICAgZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsaWNpdEZvcm1Db250cm9sIHx8XG4gICAgICAgICAgICAodGhpcy5mb3JtQ29udHJvbE5hbWUgJiYgdGhpcy5mb3JtQ29udHJvbE5hbWUuY29udHJvbCkgfHxcbiAgICAgICAgICAgICh0aGlzLmZvcm1Db250cm9sRGlyZWN0aXZlICYmIHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUuY29udHJvbCkgfHxcbiAgICAgICAgICAgICh0aGlzLm5nTW9kZWxEaXJlY3RpdmUgJiYgdGhpcy5uZ01vZGVsRGlyZWN0aXZlLmNvbnRyb2wpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnRyaWJ1dGUgPSBuZXcgVHJpYnV0ZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLnRyaWJ1dGUuYXR0YWNoKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmlidXRlLXJlcGxhY2VkJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBbJ0lOUFVUJywgJ1RFWFRBUkVBJ10uaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGFnTmFtZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgID8gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWVcbiAgICAgICAgICAgICAgICA6IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgICAgICAgdGhpcy5vbk1lbnRpb25lZC5lbWl0KHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05neFRyaWJ1dGVEaXJlY3RpdmV9IGZyb20gJy4vbmd4LXRyaWJ1dGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ3hUcmlidXRlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW05neFRyaWJ1dGVEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE5neFRyaWJ1dGVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIkZvcm1Db250cm9sTmFtZSIsIk9wdGlvbmFsIiwiRm9ybUNvbnRyb2xEaXJlY3RpdmUiLCJOZ01vZGVsIiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7UUFvQkksNkJBQ1ksU0FDWSxlQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsZ0JBQXlCO1lBSHJDLFlBQU8sR0FBUCxPQUFPO1lBQ0ssb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQ2hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7WUFDMUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFTOytCQVJuQyxJQUFJQSxpQkFBWSxFQUFVO1NBU3BDO1FBRUosc0JBQUksd0NBQU87OztnQkFBWDtnQkFDSSxPQUFPLElBQUksQ0FBQyxtQkFBbUI7cUJBQzFCLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7cUJBQ3JELElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDO3FCQUMvRCxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hFOzs7V0FBQTs7OztRQUVELHNDQUFROzs7WUFBUjtnQkFBQSxpQkFpQkM7Z0JBaEJHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUVoRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTs7b0JBQzVELElBQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FDeEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUNyQzswQkFDSyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLOzBCQUNoQyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7b0JBRTNDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUU3QixJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7d0JBQ2QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2hDO2lCQUNKLENBQUMsQ0FBQzthQUNOOztvQkEvQ0pDLGNBQVMsU0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLGFBQWE7cUJBQzFCOzs7Ozt3QkFQa0JDLGVBQVU7d0JBQ2NDLHFCQUFlLHVCQXFCakRDLGFBQVE7d0JBckJJQywwQkFBb0IsdUJBc0JoQ0QsYUFBUTt3QkF0QjJDRSxhQUFPLHVCQXVCMURGLGFBQVE7Ozs7OEJBZlpHLFVBQUssU0FBQyxZQUFZOzBDQUdsQkEsVUFBSztrQ0FHTEMsV0FBTTs7a0NBZlg7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztxQkFDL0I7OytCQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=