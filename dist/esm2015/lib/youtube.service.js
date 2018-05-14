/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
const /** @type {?} */ getWindow = () => window;
const ɵ0 = getWindow;
export class YoutubeService {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
        this._window = getWindow();
    }
    /**
     * @return {?}
     */
    getIframeApi() {
        if (!this.iframeApi) {
            this.loadIframeApi();
        }
        return this.iframeApi;
    }
    /**
     * @return {?}
     */
    loadIframeApi() {
        this.iframeApi = new Promise(resolve => {
            const /** @type {?} */ scriptTag = this._window.document.createElement('script');
            scriptTag.src = 'https://www.youtube.com/iframe_api';
            this._window.document.body.appendChild(scriptTag);
            // The IFrame Player API will call this function when the page has finished downloading the JavaScript for the player API
            this._window['onYouTubeIframeAPIReady'] = () => {
                resolve(this._window['YT']);
            };
        });
    }
}
YoutubeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
YoutubeService.ctorParameters = () => [
    { type: NgZone, },
];
/** @nocollapse */ YoutubeService.ngInjectableDef = i0.defineInjectable({ factory: function YoutubeService_Factory() { return new YoutubeService(i0.inject(i0.NgZone)); }, token: YoutubeService, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50LyIsInNvdXJjZXMiOlsibGliL3lvdXR1YmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRW5ELHVCQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7O0FBSy9CLE1BQU07Ozs7SUFLSixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO0tBQzVCOzs7O0lBRU0sWUFBWTtRQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7OztJQUdoQixhQUFhO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckMsdUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRSxTQUFTLENBQUMsR0FBRyxHQUFHLG9DQUFvQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBR2xELElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsR0FBRyxHQUFHLEVBQUU7Z0JBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDN0IsQ0FBQztTQUNILENBQUMsQ0FBQzs7OztZQTlCTixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOb0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuY29uc3QgZ2V0V2luZG93ID0gKCkgPT4gd2luZG93O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgWW91dHViZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX3dpbmRvdzogYW55O1xyXG5cclxuICBwcml2YXRlIGlmcmFtZUFwaTogUHJvbWlzZTxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xyXG4gICAgdGhpcy5fd2luZG93ID0gZ2V0V2luZG93KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0SWZyYW1lQXBpKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBpZiAoIXRoaXMuaWZyYW1lQXBpKSB7XHJcbiAgICAgIHRoaXMubG9hZElmcmFtZUFwaSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmlmcmFtZUFwaTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZElmcmFtZUFwaSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaWZyYW1lQXBpID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjcmlwdFRhZyA9IHRoaXMuX3dpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgc2NyaXB0VGFnLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJztcclxuICAgICAgdGhpcy5fd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKTtcclxuXHJcbiAgICAgIC8vIFRoZSBJRnJhbWUgUGxheWVyIEFQSSB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSBwYWdlIGhhcyBmaW5pc2hlZCBkb3dubG9hZGluZyB0aGUgSmF2YVNjcmlwdCBmb3IgdGhlIHBsYXllciBBUElcclxuICAgICAgdGhpcy5fd2luZG93WydvbllvdVR1YmVJZnJhbWVBUElSZWFkeSddID0gKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5fd2luZG93WydZVCddKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=