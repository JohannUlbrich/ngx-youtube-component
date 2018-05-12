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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXlvdXR1YmUtY29tcG9uZW50LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50L2xpYi95b3V0dWJlLnNlcnZpY2UudHMiLCJuZzovL25neC15b3V0dWJlLWNvbXBvbmVudC9saWIveW91dHViZS5jb21wb25lbnQudHMiLCJuZzovL25neC15b3V0dWJlLWNvbXBvbmVudC9saWIveW91dHViZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IGdldFdpbmRvdyA9ICgpID0+IHdpbmRvdztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgWW91dHViZVNlcnZpY2Uge1xuICBwcml2YXRlIF93aW5kb3c6IGFueTtcblxuICBwcml2YXRlIGlmcmFtZUFwaTogUHJvbWlzZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gICAgdGhpcy5fd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SWZyYW1lQXBpKCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKCF0aGlzLmlmcmFtZUFwaSkge1xuICAgICAgdGhpcy5sb2FkSWZyYW1lQXBpKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaWZyYW1lQXBpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkSWZyYW1lQXBpKCk6IHZvaWQge1xuICAgIHRoaXMuaWZyYW1lQXBpID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCBzY3JpcHRUYWcgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHRUYWcuc3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknO1xuICAgICAgdGhpcy5fd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKTtcblxuICAgICAgLy8gVGhlIElGcmFtZSBQbGF5ZXIgQVBJIHdpbGwgY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIHBhZ2UgaGFzIGZpbmlzaGVkIGRvd25sb2FkaW5nIHRoZSBKYXZhU2NyaXB0IGZvciB0aGUgcGxheWVyIEFQSVxuICAgICAgdGhpcy5fd2luZG93WydvbllvdVR1YmVJZnJhbWVBUElSZWFkeSddID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHRoaXMuX3dpbmRvd1snWVQnXSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQge30gZnJvbSAnQHR5cGVzL3lvdXR1YmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBZb3V0dWJlU2VydmljZSB9IGZyb20gJy4veW91dHViZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneW91dHViZScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBZb3V0dWJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgdmlkZW9JZDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGF5ZXJWYXJzOiBZVC5QbGF5ZXJWYXJzO1xuICBASW5wdXQoKSBldmVudHM6IFlULkV2ZW50cztcblxuICBwcml2YXRlIHBsYXllcjogWVQuUGxheWVyO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB5b3V0dWJlQXBpU2VydmljZTogWW91dHViZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF5ZXJFbGVtZW50OiBFbGVtZW50UmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBwbGF5ZXJPcHRpb25zOiBZVC5QbGF5ZXJPcHRpb25zID0ge307XG5cbiAgICBpZiAodGhpcy53aWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGF5ZXJPcHRpb25zLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGxheWVyT3B0aW9ucy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52aWRlb0lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBsYXllck9wdGlvbnMudmlkZW9JZCA9IHRoaXMudmlkZW9JZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wbGF5ZXJWYXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBsYXllck9wdGlvbnMucGxheWVyVmFycyA9IHRoaXMucGxheWVyVmFycztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGxheWVyT3B0aW9ucy5ldmVudHMgPSB7fTtcblxuICAgICAgT2JqZWN0LmtleXModGhpcy5ldmVudHMpLmZvckVhY2goZXZlbnRMaXN0ZW5lck5hbWUgPT4ge1xuICAgICAgICBpZiAodGhpcy5ldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnRMaXN0ZW5lck5hbWUpKSB7XG4gICAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRzW2V2ZW50TGlzdGVuZXJOYW1lXTtcbiAgICAgICAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBldmVudCA9PiBzdWJqZWN0Lm5leHQoZXZlbnQpO1xuXG4gICAgICAgICAgcGxheWVyT3B0aW9ucy5ldmVudHNbZXZlbnRMaXN0ZW5lck5hbWVdID0gaGFuZGxlcjtcbiAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChzdWJqZWN0LnN1YnNjcmliZShldmVudExpc3RlbmVyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMueW91dHViZUFwaVNlcnZpY2UuZ2V0SWZyYW1lQXBpKCkudGhlbihzdWNjZXNzID0+IHtcbiAgICAgIHRoaXMucGxheWVyID0gbmV3IHN1Y2Nlc3MuUGxheWVyKFxuICAgICAgICB0aGlzLnBsYXllckVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgcGxheWVyT3B0aW9uc1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHRoaXMucGxheWVyO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgZm9yIChjb25zdCBzdWJzY3JpcHRpb24gb2YgdGhpcy5zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBZb3V0dWJlU2VydmljZSB9IGZyb20gJy4veW91dHViZS5zZXJ2aWNlJztcbmltcG9ydCB7IFlvdXR1YmVDb21wb25lbnQgfSBmcm9tICcuL3lvdXR1YmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIHByb3ZpZGVyczogW1lvdXR1YmVTZXJ2aWNlXSxcbiAgZGVjbGFyYXRpb25zOiBbWW91dHViZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtZb3V0dWJlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBZb3V0dWJlTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIk5nWm9uZSIsIlN1YmplY3QiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIklucHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUVBLHFCQUFNLFNBQVMsR0FBRyxjQUFNLE9BQUEsTUFBTSxHQUFBLENBQUM7O1FBVTdCLHdCQUFvQixJQUFZO1lBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO1NBQzVCOzs7O1FBRU0scUNBQVk7Ozs7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCO2dCQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7UUFHaEIsc0NBQWE7Ozs7O2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztvQkFDbEMscUJBQU0sU0FBUyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEUsU0FBUyxDQUFDLEdBQUcsR0FBRyxvQ0FBb0MsQ0FBQztvQkFDckQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7O29CQUdsRCxLQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLEdBQUc7d0JBQ3hDLE9BQU8sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQzdCLENBQUM7aUJBQ0gsQ0FBQyxDQUFDOzs7b0JBOUJOQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt3QkFOb0JDLFNBQU07Ozs7NkJBQTNCOzs7Ozs7OztRQzJCRSwwQkFDVSxtQkFDQTtZQURBLHNCQUFpQixHQUFqQixpQkFB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