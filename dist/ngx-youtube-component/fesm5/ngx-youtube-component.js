import { Injectable, NgZone, NgModule, defineInjectable, inject, Component, ElementRef, Input } from '@angular/core';
import { __values } from 'tslib';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ getWindow = function () { return window; };
var YoutubeService = /** @class */ (function () {
    function YoutubeService(zone) {
        this.zone = zone;
        this._window = getWindow();
    }
    /**
     * @return {?}
     */
    YoutubeService.prototype.getIframeApi = /**
     * @return {?}
     */
    function () {
        if (!this.iframeApi) {
            this.loadIframeApi();
        }
        return this.iframeApi;
    };
    /**
     * @return {?}
     */
    YoutubeService.prototype.loadIframeApi = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.iframeApi = new Promise(function (resolve) {
            var /** @type {?} */ scriptTag = _this._window.document.createElement('script');
            scriptTag.src = 'https://www.youtube.com/iframe_api';
            _this._window.document.body.appendChild(scriptTag);
            // The IFrame Player API will call this function when the page has finished downloading the JavaScript for the player API
            // The IFrame Player API will call this function when the page has finished downloading the JavaScript for the player API
            _this._window['onYouTubeIframeAPIReady'] = function () {
                resolve(_this._window['YT']);
            };
        });
    };
    YoutubeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    YoutubeService.ctorParameters = function () { return [
        { type: NgZone, },
    ]; };
    /** @nocollapse */ YoutubeService.ngInjectableDef = defineInjectable({ factory: function YoutubeService_Factory() { return new YoutubeService(inject(NgZone)); }, token: YoutubeService, providedIn: "root" });
    return YoutubeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var YoutubeComponent = /** @class */ (function () {
    function YoutubeComponent(youtubeApiService, playerElement) {
        this.youtubeApiService = youtubeApiService;
        this.playerElement = playerElement;
        this.subscriptions = [];
    }
    /**
     * @return {?}
     */
    YoutubeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ playerOptions = {};
        if (this.width !== undefined) {
            playerOptions.width = this.width;
        }
        if (this.height !== undefined) {
            playerOptions.height = this.height;
        }
        if (this.videoId !== undefined) {
            playerOptions.videoId = this.videoId;
        }
        if (this.playerVars !== undefined) {
            playerOptions.playerVars = this.playerVars;
        }
        if (this.events !== undefined) {
            playerOptions.events = {};
            Object.keys(this.events).forEach(function (eventListenerName) {
                if (_this.events.hasOwnProperty(eventListenerName)) {
                    var /** @type {?} */ eventListener = _this.events[eventListenerName];
                    var /** @type {?} */ subject_1 = new Subject();
                    var /** @type {?} */ handler = function (event) { return subject_1.next(event); };
                    playerOptions.events[eventListenerName] = handler;
                    _this.subscriptions.push(subject_1.subscribe(eventListener));
                }
            });
        }
        this.youtubeApiService.getIframeApi().then(function (success) {
            _this.player = new success.Player(_this.playerElement.nativeElement, playerOptions);
            return _this.player;
        });
    };
    /**
     * @return {?}
     */
    YoutubeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        try {
            for (var _a = __values(this.subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                var subscription = _b.value;
                subscription.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    YoutubeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'youtube',
                    template: '',
                    styles: []
                },] },
    ];
    /** @nocollapse */
    YoutubeComponent.ctorParameters = function () { return [
        { type: YoutubeService, },
        { type: ElementRef, },
    ]; };
    YoutubeComponent.propDecorators = {
        "width": [{ type: Input },],
        "height": [{ type: Input },],
        "videoId": [{ type: Input },],
        "playerVars": [{ type: Input },],
        "events": [{ type: Input },],
    };
    return YoutubeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var YoutubeModule = /** @class */ (function () {
    function YoutubeModule() {
    }
    YoutubeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    providers: [YoutubeService],
                    declarations: [YoutubeComponent],
                    exports: [YoutubeComponent]
                },] },
    ];
    return YoutubeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { YoutubeService, YoutubeComponent, YoutubeModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXlvdXR1YmUtY29tcG9uZW50LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gteW91dHViZS1jb21wb25lbnQvbGliL3lvdXR1YmUuc2VydmljZS50cyIsIm5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50L2xpYi95b3V0dWJlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50L2xpYi95b3V0dWJlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IGdldFdpbmRvdyA9ICgpID0+IHdpbmRvdztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFlvdXR1YmVTZXJ2aWNlIHtcclxuICBwcml2YXRlIF93aW5kb3c6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBpZnJhbWVBcGk6IFByb21pc2U8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcclxuICAgIHRoaXMuX3dpbmRvdyA9IGdldFdpbmRvdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldElmcmFtZUFwaSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgaWYgKCF0aGlzLmlmcmFtZUFwaSkge1xyXG4gICAgICB0aGlzLmxvYWRJZnJhbWVBcGkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5pZnJhbWVBcGk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRJZnJhbWVBcGkoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlmcmFtZUFwaSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCBzY3JpcHRUYWcgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdFRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XHJcbiAgICAgIHRoaXMuX3dpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XHJcblxyXG4gICAgICAvLyBUaGUgSUZyYW1lIFBsYXllciBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgcGFnZSBoYXMgZmluaXNoZWQgZG93bmxvYWRpbmcgdGhlIEphdmFTY3JpcHQgZm9yIHRoZSBwbGF5ZXIgQVBJXHJcbiAgICAgIHRoaXMuX3dpbmRvd1snb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHknXSA9ICgpID0+IHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuX3dpbmRvd1snWVQnXSk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRWxlbWVudFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7fSBmcm9tICdAdHlwZXMveW91dHViZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBZb3V0dWJlU2VydmljZSB9IGZyb20gJy4veW91dHViZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAneW91dHViZScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFlvdXR1YmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSB2aWRlb0lkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxheWVyVmFyczogWVQuUGxheWVyVmFycztcclxuICBASW5wdXQoKSBldmVudHM6IFlULkV2ZW50cztcclxuXHJcbiAgcHJpdmF0ZSBwbGF5ZXI6IFlULlBsYXllcjtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB5b3V0dWJlQXBpU2VydmljZTogWW91dHViZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsYXllckVsZW1lbnQ6IEVsZW1lbnRSZWZcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgcGxheWVyT3B0aW9uczogWVQuUGxheWVyT3B0aW9ucyA9IHt9O1xyXG5cclxuICAgIGlmICh0aGlzLndpZHRoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGxheWVyT3B0aW9ucy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGxheWVyT3B0aW9ucy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy52aWRlb0lkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGxheWVyT3B0aW9ucy52aWRlb0lkID0gdGhpcy52aWRlb0lkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBsYXllclZhcnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwbGF5ZXJPcHRpb25zLnBsYXllclZhcnMgPSB0aGlzLnBsYXllclZhcnM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGxheWVyT3B0aW9ucy5ldmVudHMgPSB7fTtcclxuXHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRzKS5mb3JFYWNoKGV2ZW50TGlzdGVuZXJOYW1lID0+IHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnRMaXN0ZW5lck5hbWUpKSB7XHJcbiAgICAgICAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5ldmVudHNbZXZlbnRMaXN0ZW5lck5hbWVdO1xyXG4gICAgICAgICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBldmVudCA9PiBzdWJqZWN0Lm5leHQoZXZlbnQpO1xyXG5cclxuICAgICAgICAgIHBsYXllck9wdGlvbnMuZXZlbnRzW2V2ZW50TGlzdGVuZXJOYW1lXSA9IGhhbmRsZXI7XHJcbiAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChzdWJqZWN0LnN1YnNjcmliZShldmVudExpc3RlbmVyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnlvdXR1YmVBcGlTZXJ2aWNlLmdldElmcmFtZUFwaSgpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgIHRoaXMucGxheWVyID0gbmV3IHN1Y2Nlc3MuUGxheWVyKFxyXG4gICAgICAgIHRoaXMucGxheWVyRWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgIHBsYXllck9wdGlvbnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnBsYXllcjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBmb3IgKGNvbnN0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFlvdXR1YmVTZXJ2aWNlIH0gZnJvbSAnLi95b3V0dWJlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBZb3V0dWJlQ29tcG9uZW50IH0gZnJvbSAnLi95b3V0dWJlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtdLFxyXG4gIHByb3ZpZGVyczogW1lvdXR1YmVTZXJ2aWNlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtZb3V0dWJlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbWW91dHViZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFlvdXR1YmVNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsQUFFQSxxQkFBTSxTQUFTLEdBQUcsY0FBTSxPQUFBLE1BQU0sR0FBQSxDQUFDOztJQVU3Qix3QkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEVBQUUsQ0FBQztLQUM1Qjs7OztJQUVNLHFDQUFZOzs7O1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7SUFHaEIsc0NBQWE7Ozs7O1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ2xDLHFCQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEUsU0FBUyxDQUFDLEdBQUcsR0FBRyxvQ0FBb0MsQ0FBQztZQUNyRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7WUFHbEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHO2dCQUN4QyxPQUFPLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJ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