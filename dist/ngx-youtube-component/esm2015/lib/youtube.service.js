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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50LyIsInNvdXJjZXMiOlsibGliL3lvdXR1YmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRW5ELHVCQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7O0FBSy9CLE1BQU07Ozs7SUFLSixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO0tBQzVCOzs7O0lBRU0sWUFBWTtRQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7OztJQUdoQixhQUFhO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckMsdUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRSxTQUFTLENBQUMsR0FBRyxHQUFHLG9DQUFvQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBR2xELElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsR0FBRyxHQUFHLEVBQUU7Z0JBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDN0IsQ0FBQztTQUNILENBQUMsQ0FBQzs7OztZQTlCTixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOb0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBnZXRXaW5kb3cgPSAoKSA9PiB3aW5kb3c7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFlvdXR1YmVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfd2luZG93OiBhbnk7XG5cbiAgcHJpdmF0ZSBpZnJhbWVBcGk6IFByb21pc2U8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuX3dpbmRvdyA9IGdldFdpbmRvdygpO1xuICB9XG5cbiAgcHVibGljIGdldElmcmFtZUFwaSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICghdGhpcy5pZnJhbWVBcGkpIHtcbiAgICAgIHRoaXMubG9hZElmcmFtZUFwaSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmlmcmFtZUFwaTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZElmcmFtZUFwaSgpOiB2b2lkIHtcbiAgICB0aGlzLmlmcmFtZUFwaSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3Qgc2NyaXB0VGFnID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0VGFnLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJztcbiAgICAgIHRoaXMuX3dpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XG5cbiAgICAgIC8vIFRoZSBJRnJhbWUgUGxheWVyIEFQSSB3aWxsIGNhbGwgdGhpcyBmdW5jdGlvbiB3aGVuIHRoZSBwYWdlIGhhcyBmaW5pc2hlZCBkb3dubG9hZGluZyB0aGUgSmF2YVNjcmlwdCBmb3IgdGhlIHBsYXllciBBUElcbiAgICAgIHRoaXMuX3dpbmRvd1snb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHknXSA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLl93aW5kb3dbJ1lUJ10pO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuIl19