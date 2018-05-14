import { Injectable, NgZone, NgModule, Component, Input, ElementRef, defineInjectable, inject } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ getWindow = () => window;
class YoutubeService {
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
/** @nocollapse */ YoutubeService.ngInjectableDef = defineInjectable({ factory: function YoutubeService_Factory() { return new YoutubeService(inject(NgZone)); }, token: YoutubeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class YoutubeComponent {
    /**
     * @param {?} youtubeApiService
     * @param {?} playerElement
     */
    constructor(youtubeApiService, playerElement) {
        this.youtubeApiService = youtubeApiService;
        this.playerElement = playerElement;
        this.subscriptions = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ playerOptions = {};
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
            Object.keys(this.events).forEach(eventListenerName => {
                if (this.events.hasOwnProperty(eventListenerName)) {
                    const /** @type {?} */ eventListener = this.events[eventListenerName];
                    const /** @type {?} */ subject = new Subject();
                    const /** @type {?} */ handler = event => subject.next(event);
                    playerOptions.events[eventListenerName] = handler;
                    this.subscriptions.push(subject.subscribe(eventListener));
                }
            });
        }
        this.youtubeApiService.getIframeApi().then(success => {
            this.player = new success.Player(this.playerElement.nativeElement, playerOptions);
            return this.player;
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        for (const /** @type {?} */ subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }
}
YoutubeComponent.decorators = [
    { type: Component, args: [{
                selector: 'youtube',
                template: '',
                styles: []
            },] },
];
/** @nocollapse */
YoutubeComponent.ctorParameters = () => [
    { type: YoutubeService, },
    { type: ElementRef, },
];
YoutubeComponent.propDecorators = {
    "width": [{ type: Input },],
    "height": [{ type: Input },],
    "videoId": [{ type: Input },],
    "playerVars": [{ type: Input },],
    "events": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class YoutubeModule {
}
YoutubeModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                providers: [YoutubeService],
                declarations: [YoutubeComponent],
                exports: [YoutubeComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { YoutubeService, YoutubeComponent, YoutubeModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXlvdXR1YmUtY29tcG9uZW50LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gteW91dHViZS1jb21wb25lbnQvbGliL3lvdXR1YmUuc2VydmljZS50cyIsIm5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50L2xpYi95b3V0dWJlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50L2xpYi95b3V0dWJlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IGdldFdpbmRvdyA9ICgpID0+IHdpbmRvdztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFlvdXR1YmVTZXJ2aWNlIHtcclxuICBwcml2YXRlIF93aW5kb3c6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBpZnJhbWVBcGk6IFByb21pc2U8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcclxuICAgIHRoaXMuX3dpbmRvdyA9IGdldFdpbmRvdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldElmcmFtZUFwaSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgaWYgKCF0aGlzLmlmcmFtZUFwaSkge1xyXG4gICAgICB0aGlzLmxvYWRJZnJhbWVBcGkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5pZnJhbWVBcGk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRJZnJhbWVBcGkoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlmcmFtZUFwaSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCBzY3JpcHRUYWcgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdFRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XHJcbiAgICAgIHRoaXMuX3dpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XHJcblxyXG4gICAgICAvLyBUaGUgSUZyYW1lIFBsYXllciBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgcGFnZSBoYXMgZmluaXNoZWQgZG93bmxvYWRpbmcgdGhlIEphdmFTY3JpcHQgZm9yIHRoZSBwbGF5ZXIgQVBJXHJcbiAgICAgIHRoaXMuX3dpbmRvd1snb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHknXSA9ICgpID0+IHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuX3dpbmRvd1snWVQnXSk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRWxlbWVudFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7fSBmcm9tICdAdHlwZXMveW91dHViZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBZb3V0dWJlU2VydmljZSB9IGZyb20gJy4veW91dHViZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAneW91dHViZScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFlvdXR1YmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuICBASW5wdXQoKSB2aWRlb0lkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxheWVyVmFyczogWVQuUGxheWVyVmFycztcclxuICBASW5wdXQoKSBldmVudHM6IFlULkV2ZW50cztcclxuXHJcbiAgcHJpdmF0ZSBwbGF5ZXI6IFlULlBsYXllcjtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB5b3V0dWJlQXBpU2VydmljZTogWW91dHViZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsYXllckVsZW1lbnQ6IEVsZW1lbnRSZWZcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgcGxheWVyT3B0aW9uczogWVQuUGxheWVyT3B0aW9ucyA9IHt9O1xyXG5cclxuICAgIGlmICh0aGlzLndpZHRoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGxheWVyT3B0aW9ucy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGxheWVyT3B0aW9ucy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy52aWRlb0lkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGxheWVyT3B0aW9ucy52aWRlb0lkID0gdGhpcy52aWRlb0lkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBsYXllclZhcnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwbGF5ZXJPcHRpb25zLnBsYXllclZhcnMgPSB0aGlzLnBsYXllclZhcnM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGxheWVyT3B0aW9ucy5ldmVudHMgPSB7fTtcclxuXHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRzKS5mb3JFYWNoKGV2ZW50TGlzdGVuZXJOYW1lID0+IHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnRMaXN0ZW5lck5hbWUpKSB7XHJcbiAgICAgICAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5ldmVudHNbZXZlbnRMaXN0ZW5lck5hbWVdO1xyXG4gICAgICAgICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBldmVudCA9PiBzdWJqZWN0Lm5leHQoZXZlbnQpO1xyXG5cclxuICAgICAgICAgIHBsYXllck9wdGlvbnMuZXZlbnRzW2V2ZW50TGlzdGVuZXJOYW1lXSA9IGhhbmRsZXI7XHJcbiAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChzdWJqZWN0LnN1YnNjcmliZShldmVudExpc3RlbmVyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnlvdXR1YmVBcGlTZXJ2aWNlLmdldElmcmFtZUFwaSgpLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgIHRoaXMucGxheWVyID0gbmV3IHN1Y2Nlc3MuUGxheWVyKFxyXG4gICAgICAgIHRoaXMucGxheWVyRWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgIHBsYXllck9wdGlvbnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnBsYXllcjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBmb3IgKGNvbnN0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFlvdXR1YmVTZXJ2aWNlIH0gZnJvbSAnLi95b3V0dWJlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBZb3V0dWJlQ29tcG9uZW50IH0gZnJvbSAnLi95b3V0dWJlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtdLFxyXG4gIHByb3ZpZGVyczogW1lvdXR1YmVTZXJ2aWNlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtZb3V0dWJlQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbWW91dHViZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFlvdXR1YmVNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUVBLHVCQUFNLFNBQVMsR0FBRyxNQUFNLE1BQU0sQ0FBQzs7Ozs7SUFVN0IsWUFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEVBQUUsQ0FBQztLQUM1Qjs7OztJQUVNLFlBQVk7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7OztJQUdoQixhQUFhO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTztZQUNsQyx1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hFLFNBQVMsQ0FBQyxHQUFHLEdBQUcsb0NBQW9DLENBQUM7WUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7WUFHbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHO2dCQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzdCLENBQUM7U0FDSCxDQUFDLENB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