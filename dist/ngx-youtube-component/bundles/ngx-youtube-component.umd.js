(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('tslib'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-youtube-component', ['exports', '@angular/core', 'tslib', 'rxjs'], factory) :
    (factory((global['ngx-youtube-component'] = {}),global.ng.core,global.tslib,null));
}(this, (function (exports,i0,tslib_1,rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ getWindow = function () { return window; };
    var YoutubeService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        YoutubeService.ctorParameters = function () {
            return [
                { type: i0.NgZone, },
            ];
        };
        /** @nocollapse */ YoutubeService.ngInjectableDef = i0.defineInjectable({ factory: function YoutubeService_Factory() { return new YoutubeService(i0.inject(i0.NgZone)); }, token: YoutubeService, providedIn: "root" });
        return YoutubeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var YoutubeComponent = (function () {
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
                            var /** @type {?} */ subject_1 = new rxjs.Subject();
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
                    for (var _a = tslib_1.__values(this.subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var subscription = _b.value;
                        subscription.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                var e_1, _c;
            };
        YoutubeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'youtube',
                        template: '',
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        YoutubeComponent.ctorParameters = function () {
            return [
                { type: YoutubeService, },
                { type: i0.ElementRef, },
            ];
        };
        YoutubeComponent.propDecorators = {
            "width": [{ type: i0.Input },],
            "height": [{ type: i0.Input },],
            "videoId": [{ type: i0.Input },],
            "playerVars": [{ type: i0.Input },],
            "events": [{ type: i0.Input },],
        };
        return YoutubeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var YoutubeModule = (function () {
        function YoutubeModule() {
        }
        YoutubeModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.YoutubeService = YoutubeService;
    exports.YoutubeComponent = YoutubeComponent;
    exports.YoutubeModule = YoutubeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXlvdXR1YmUtY29tcG9uZW50LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50L2xpYi95b3V0dWJlLnNlcnZpY2UudHMiLCJuZzovL25neC15b3V0dWJlLWNvbXBvbmVudC9saWIveW91dHViZS5jb21wb25lbnQudHMiLCJuZzovL25neC15b3V0dWJlLWNvbXBvbmVudC9saWIveW91dHViZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jb25zdCBnZXRXaW5kb3cgPSAoKSA9PiB3aW5kb3c7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZb3V0dWJlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfd2luZG93OiBhbnk7XHJcblxyXG4gIHByaXZhdGUgaWZyYW1lQXBpOiBQcm9taXNlPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7XHJcbiAgICB0aGlzLl93aW5kb3cgPSBnZXRXaW5kb3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRJZnJhbWVBcGkoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGlmICghdGhpcy5pZnJhbWVBcGkpIHtcclxuICAgICAgdGhpcy5sb2FkSWZyYW1lQXBpKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaWZyYW1lQXBpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkSWZyYW1lQXBpKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pZnJhbWVBcGkgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgY29uc3Qgc2NyaXB0VGFnID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzY3JpcHRUYWcuc3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknO1xyXG4gICAgICB0aGlzLl93aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xyXG5cclxuICAgICAgLy8gVGhlIElGcmFtZSBQbGF5ZXIgQVBJIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIHBhZ2UgaGFzIGZpbmlzaGVkIGRvd25sb2FkaW5nIHRoZSBKYXZhU2NyaXB0IGZvciB0aGUgcGxheWVyIEFQSVxyXG4gICAgICB0aGlzLl93aW5kb3dbJ29uWW91VHViZUlmcmFtZUFQSVJlYWR5J10gPSAoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLl93aW5kb3dbJ1lUJ10pO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEVsZW1lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQge30gZnJvbSAnQHR5cGVzL3lvdXR1YmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgWW91dHViZVNlcnZpY2UgfSBmcm9tICcuL3lvdXR1YmUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3lvdXR1YmUnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZb3V0dWJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgdmlkZW9JZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYXllclZhcnM6IFlULlBsYXllclZhcnM7XHJcbiAgQElucHV0KCkgZXZlbnRzOiBZVC5FdmVudHM7XHJcblxyXG4gIHByaXZhdGUgcGxheWVyOiBZVC5QbGF5ZXI7XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgeW91dHViZUFwaVNlcnZpY2U6IFlvdXR1YmVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwbGF5ZXJFbGVtZW50OiBFbGVtZW50UmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IHBsYXllck9wdGlvbnM6IFlULlBsYXllck9wdGlvbnMgPSB7fTtcclxuXHJcbiAgICBpZiAodGhpcy53aWR0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBsYXllck9wdGlvbnMud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBsYXllck9wdGlvbnMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudmlkZW9JZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBsYXllck9wdGlvbnMudmlkZW9JZCA9IHRoaXMudmlkZW9JZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wbGF5ZXJWYXJzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGxheWVyT3B0aW9ucy5wbGF5ZXJWYXJzID0gdGhpcy5wbGF5ZXJWYXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBsYXllck9wdGlvbnMuZXZlbnRzID0ge307XHJcblxyXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmV2ZW50cykuZm9yRWFjaChldmVudExpc3RlbmVyTmFtZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50TGlzdGVuZXJOYW1lKSkge1xyXG4gICAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRzW2V2ZW50TGlzdGVuZXJOYW1lXTtcclxuICAgICAgICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gZXZlbnQgPT4gc3ViamVjdC5uZXh0KGV2ZW50KTtcclxuXHJcbiAgICAgICAgICBwbGF5ZXJPcHRpb25zLmV2ZW50c1tldmVudExpc3RlbmVyTmFtZV0gPSBoYW5kbGVyO1xyXG4gICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3ViamVjdC5zdWJzY3JpYmUoZXZlbnRMaXN0ZW5lcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy55b3V0dWJlQXBpU2VydmljZS5nZXRJZnJhbWVBcGkoKS50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllciA9IG5ldyBzdWNjZXNzLlBsYXllcihcclxuICAgICAgICB0aGlzLnBsYXllckVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICBwbGF5ZXJPcHRpb25zXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXI7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgZm9yIChjb25zdCBzdWJzY3JpcHRpb24gb2YgdGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBZb3V0dWJlU2VydmljZSB9IGZyb20gJy4veW91dHViZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgWW91dHViZUNvbXBvbmVudCB9IGZyb20gJy4veW91dHViZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXSxcclxuICBwcm92aWRlcnM6IFtZb3V0dWJlU2VydmljZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbWW91dHViZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1lvdXR1YmVDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZb3V0dWJlTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiTmdab25lIiwiU3ViamVjdCIsInRzbGliXzEuX192YWx1ZXMiLCJDb21wb25lbnQiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBRUEscUJBQU0sU0FBUyxHQUFHLGNBQU0sT0FBQSxNQUFNLEdBQUEsQ0FBQzs7UUFVN0Isd0JBQW9CLElBQVk7WUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUM7U0FDNUI7Ozs7UUFFTSxxQ0FBWTs7OztnQkFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDdEI7Z0JBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7OztRQUdoQixzQ0FBYTs7Ozs7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO29CQUNsQyxxQkFBTSxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNoRSxTQUFTLENBQUMsR0FBRyxHQUFHLG9DQUFvQyxDQUFDO29CQUNyRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FB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