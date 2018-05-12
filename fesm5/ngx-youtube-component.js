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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXlvdXR1YmUtY29tcG9uZW50LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gteW91dHViZS1jb21wb25lbnQvbGliL3lvdXR1YmUuc2VydmljZS50cyIsIm5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50L2xpYi95b3V0dWJlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50L2xpYi95b3V0dWJlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgZ2V0V2luZG93ID0gKCkgPT4gd2luZG93O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBZb3V0dWJlU2VydmljZSB7XG4gIHByaXZhdGUgX3dpbmRvdzogYW55O1xuXG4gIHByaXZhdGUgaWZyYW1lQXBpOiBQcm9taXNlPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLl93aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJZnJhbWVBcGkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoIXRoaXMuaWZyYW1lQXBpKSB7XG4gICAgICB0aGlzLmxvYWRJZnJhbWVBcGkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pZnJhbWVBcGk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRJZnJhbWVBcGkoKTogdm9pZCB7XG4gICAgdGhpcy5pZnJhbWVBcGkgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IHNjcmlwdFRhZyA9IHRoaXMuX3dpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdFRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG4gICAgICB0aGlzLl93aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xuXG4gICAgICAvLyBUaGUgSUZyYW1lIFBsYXllciBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgcGFnZSBoYXMgZmluaXNoZWQgZG93bmxvYWRpbmcgdGhlIEphdmFTY3JpcHQgZm9yIHRoZSBwbGF5ZXIgQVBJXG4gICAgICB0aGlzLl93aW5kb3dbJ29uWW91VHViZUlmcmFtZUFQSVJlYWR5J10gPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodGhpcy5fd2luZG93WydZVCddKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7fSBmcm9tICdAdHlwZXMveW91dHViZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFlvdXR1YmVTZXJ2aWNlIH0gZnJvbSAnLi95b3V0dWJlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd5b3V0dWJlJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFlvdXR1YmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSB2aWRlb0lkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYXllclZhcnM6IFlULlBsYXllclZhcnM7XG4gIEBJbnB1dCgpIGV2ZW50czogWVQuRXZlbnRzO1xuXG4gIHByaXZhdGUgcGxheWVyOiBZVC5QbGF5ZXI7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHlvdXR1YmVBcGlTZXJ2aWNlOiBZb3V0dWJlU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXllckVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHBsYXllck9wdGlvbnM6IFlULlBsYXllck9wdGlvbnMgPSB7fTtcblxuICAgIGlmICh0aGlzLndpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBsYXllck9wdGlvbnMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGF5ZXJPcHRpb25zLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZpZGVvSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGxheWVyT3B0aW9ucy52aWRlb0lkID0gdGhpcy52aWRlb0lkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBsYXllclZhcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGxheWVyT3B0aW9ucy5wbGF5ZXJWYXJzID0gdGhpcy5wbGF5ZXJWYXJzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGF5ZXJPcHRpb25zLmV2ZW50cyA9IHt9O1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmV2ZW50cykuZm9yRWFjaChldmVudExpc3RlbmVyTmFtZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudExpc3RlbmVyTmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5ldmVudHNbZXZlbnRMaXN0ZW5lck5hbWVdO1xuICAgICAgICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IGV2ZW50ID0+IHN1YmplY3QubmV4dChldmVudCk7XG5cbiAgICAgICAgICBwbGF5ZXJPcHRpb25zLmV2ZW50c1tldmVudExpc3RlbmVyTmFtZV0gPSBoYW5kbGVyO1xuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YmplY3Quc3Vic2NyaWJlKGV2ZW50TGlzdGVuZXIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy55b3V0dWJlQXBpU2VydmljZS5nZXRJZnJhbWVBcGkoKS50aGVuKHN1Y2Nlc3MgPT4ge1xuICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgc3VjY2Vzcy5QbGF5ZXIoXG4gICAgICAgIHRoaXMucGxheWVyRWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICBwbGF5ZXJPcHRpb25zXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXI7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBmb3IgKGNvbnN0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFlvdXR1YmVTZXJ2aWNlIH0gZnJvbSAnLi95b3V0dWJlLnNlcnZpY2UnO1xuaW1wb3J0IHsgWW91dHViZUNvbXBvbmVudCB9IGZyb20gJy4veW91dHViZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbWW91dHViZVNlcnZpY2VdLFxuICBkZWNsYXJhdGlvbnM6IFtZb3V0dWJlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1lvdXR1YmVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFlvdXR1YmVNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJ0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