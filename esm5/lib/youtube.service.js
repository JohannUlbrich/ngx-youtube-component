/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
var /** @type {?} */ getWindow = function () { return window; };
var ɵ0 = getWindow;
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
    /** @nocollapse */ YoutubeService.ngInjectableDef = i0.defineInjectable({ factory: function YoutubeService_Factory() { return new YoutubeService(i0.inject(i0.NgZone)); }, token: YoutubeService, providedIn: "root" });
    return YoutubeService;
}());
export { YoutubeService };
function YoutubeService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    YoutubeService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    YoutubeService.ctorParameters;
    /** @type {?} */
    YoutubeService.prototype._window;
    /** @type {?} */
    YoutubeService.prototype.iframeApi;
    /** @type {?} */
    YoutubeService.prototype.zone;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50LyIsInNvdXJjZXMiOlsibGliL3lvdXR1YmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRW5ELHFCQUFNLFNBQVMsR0FBRyxjQUFNLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQzs7O0lBVTdCLHdCQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO0tBQzVCOzs7O0lBRU0scUNBQVk7Ozs7UUFDakIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7SUFHaEIsc0NBQWE7Ozs7O1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ2xDLHFCQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEUsU0FBUyxDQUFDLEdBQUcsR0FBRyxvQ0FBb0MsQ0FBQztZQUNyRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztZQUdsRCxBQURBLHlIQUF5SDtZQUN6SCxLQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLEdBQUc7Z0JBQ3hDLE9BQU8sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDN0IsQ0FBQztTQUNILENBQUMsQ0FBQzs7O2dCQTlCTixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5vQixNQUFNOzs7eUJBQTNCOztTQU9hLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgZ2V0V2luZG93ID0gKCkgPT4gd2luZG93O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBZb3V0dWJlU2VydmljZSB7XG4gIHByaXZhdGUgX3dpbmRvdzogYW55O1xuXG4gIHByaXZhdGUgaWZyYW1lQXBpOiBQcm9taXNlPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLl93aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJZnJhbWVBcGkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoIXRoaXMuaWZyYW1lQXBpKSB7XG4gICAgICB0aGlzLmxvYWRJZnJhbWVBcGkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pZnJhbWVBcGk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRJZnJhbWVBcGkoKTogdm9pZCB7XG4gICAgdGhpcy5pZnJhbWVBcGkgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IHNjcmlwdFRhZyA9IHRoaXMuX3dpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdFRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG4gICAgICB0aGlzLl93aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xuXG4gICAgICAvLyBUaGUgSUZyYW1lIFBsYXllciBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgcGFnZSBoYXMgZmluaXNoZWQgZG93bmxvYWRpbmcgdGhlIEphdmFTY3JpcHQgZm9yIHRoZSBwbGF5ZXIgQVBJXG4gICAgICB0aGlzLl93aW5kb3dbJ29uWW91VHViZUlmcmFtZUFQSVJlYWR5J10gPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodGhpcy5fd2luZG93WydZVCddKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==