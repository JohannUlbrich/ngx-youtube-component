import { Injectable, NgZone, Component, Input, ElementRef, NgModule, defineInjectable, inject } from '@angular/core';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXlvdXR1YmUtY29tcG9uZW50LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gteW91dHViZS1jb21wb25lbnQvbGliL3lvdXR1YmUuc2VydmljZS50cyIsIm5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50L2xpYi95b3V0dWJlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXlvdXR1YmUtY29tcG9uZW50L2xpYi95b3V0dWJlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgZ2V0V2luZG93ID0gKCkgPT4gd2luZG93O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBZb3V0dWJlU2VydmljZSB7XG4gIHByaXZhdGUgX3dpbmRvdzogYW55O1xuXG4gIHByaXZhdGUgaWZyYW1lQXBpOiBQcm9taXNlPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLl93aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJZnJhbWVBcGkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoIXRoaXMuaWZyYW1lQXBpKSB7XG4gICAgICB0aGlzLmxvYWRJZnJhbWVBcGkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pZnJhbWVBcGk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRJZnJhbWVBcGkoKTogdm9pZCB7XG4gICAgdGhpcy5pZnJhbWVBcGkgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IHNjcmlwdFRhZyA9IHRoaXMuX3dpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdFRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG4gICAgICB0aGlzLl93aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xuXG4gICAgICAvLyBUaGUgSUZyYW1lIFBsYXllciBBUEkgd2lsbCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgcGFnZSBoYXMgZmluaXNoZWQgZG93bmxvYWRpbmcgdGhlIEphdmFTY3JpcHQgZm9yIHRoZSBwbGF5ZXIgQVBJXG4gICAgICB0aGlzLl93aW5kb3dbJ29uWW91VHViZUlmcmFtZUFQSVJlYWR5J10gPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUodGhpcy5fd2luZG93WydZVCddKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7fSBmcm9tICdAdHlwZXMveW91dHViZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFlvdXR1YmVTZXJ2aWNlIH0gZnJvbSAnLi95b3V0dWJlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd5b3V0dWJlJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFlvdXR1YmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSB2aWRlb0lkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYXllclZhcnM6IFlULlBsYXllclZhcnM7XG4gIEBJbnB1dCgpIGV2ZW50czogWVQuRXZlbnRzO1xuXG4gIHByaXZhdGUgcGxheWVyOiBZVC5QbGF5ZXI7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHlvdXR1YmVBcGlTZXJ2aWNlOiBZb3V0dWJlU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXllckVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHBsYXllck9wdGlvbnM6IFlULlBsYXllck9wdGlvbnMgPSB7fTtcblxuICAgIGlmICh0aGlzLndpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBsYXllck9wdGlvbnMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGF5ZXJPcHRpb25zLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZpZGVvSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGxheWVyT3B0aW9ucy52aWRlb0lkID0gdGhpcy52aWRlb0lkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBsYXllclZhcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGxheWVyT3B0aW9ucy5wbGF5ZXJWYXJzID0gdGhpcy5wbGF5ZXJWYXJzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGF5ZXJPcHRpb25zLmV2ZW50cyA9IHt9O1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmV2ZW50cykuZm9yRWFjaChldmVudExpc3RlbmVyTmFtZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudExpc3RlbmVyTmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5ldmVudHNbZXZlbnRMaXN0ZW5lck5hbWVdO1xuICAgICAgICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IGV2ZW50ID0+IHN1YmplY3QubmV4dChldmVudCk7XG5cbiAgICAgICAgICBwbGF5ZXJPcHRpb25zLmV2ZW50c1tldmVudExpc3RlbmVyTmFtZV0gPSBoYW5kbGVyO1xuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YmplY3Quc3Vic2NyaWJlKGV2ZW50TGlzdGVuZXIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy55b3V0dWJlQXBpU2VydmljZS5nZXRJZnJhbWVBcGkoKS50aGVuKHN1Y2Nlc3MgPT4ge1xuICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgc3VjY2Vzcy5QbGF5ZXIoXG4gICAgICAgIHRoaXMucGxheWVyRWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICBwbGF5ZXJPcHRpb25zXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXI7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBmb3IgKGNvbnN0IHN1YnNjcmlwdGlvbiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFlvdXR1YmVTZXJ2aWNlIH0gZnJvbSAnLi95b3V0dWJlLnNlcnZpY2UnO1xuaW1wb3J0IHsgWW91dHViZUNvbXBvbmVudCB9IGZyb20gJy4veW91dHViZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbWW91dHViZVNlcnZpY2VdLFxuICBkZWNsYXJhdGlvbnM6IFtZb3V0dWJlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1lvdXR1YmVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFlvdXR1YmVNb2R1bGUge31cbiJdLCJuYW1lcyI6W10s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