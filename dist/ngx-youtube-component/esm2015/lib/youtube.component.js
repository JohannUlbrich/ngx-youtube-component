/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { YoutubeService } from './youtube.service';
export class YoutubeComponent {
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
function YoutubeComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    YoutubeComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    YoutubeComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    YoutubeComponent.propDecorators;
    /** @type {?} */
    YoutubeComponent.prototype.width;
    /** @type {?} */
    YoutubeComponent.prototype.height;
    /** @type {?} */
    YoutubeComponent.prototype.videoId;
    /** @type {?} */
    YoutubeComponent.prototype.playerVars;
    /** @type {?} */
    YoutubeComponent.prototype.events;
    /** @type {?} */
    YoutubeComponent.prototype.player;
    /** @type {?} */
    YoutubeComponent.prototype.subscriptions;
    /** @type {?} */
    YoutubeComponent.prototype.youtubeApiService;
    /** @type {?} */
    YoutubeComponent.prototype.playerElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteW91dHViZS1jb21wb25lbnQvIiwic291cmNlcyI6WyJsaWIveW91dHViZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUVMLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPbkQsTUFBTTs7Ozs7SUFVSixZQUNVLG1CQUNBO1FBREEsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQixrQkFBYSxHQUFiLGFBQWE7NkJBSmlCLEVBQUU7S0FLdEM7Ozs7SUFFSixRQUFRO1FBQ04sdUJBQU0sYUFBYSxHQUFxQixFQUFFLENBQUM7UUFFM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdCLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3RDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUM1QztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixhQUFhLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRTtnQkFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELHVCQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ3JELHVCQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO29CQUNuQyx1QkFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUU3QyxhQUFhLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsT0FBTyxDQUFDO29CQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7aUJBQzNEO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFDaEMsYUFBYSxDQUNkLENBQUM7WUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQixDQUFDLENBQUM7S0FDSjs7OztJQUVELFdBQVc7UUFDVCxHQUFHLENBQUMsQ0FBQyx1QkFBTSxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDOUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVCO0tBQ0Y7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7WUFOUSxjQUFjO1lBSnJCLFVBQVU7OztzQkFZVCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFbGVtZW50UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHt9IGZyb20gJ0B0eXBlcy95b3V0dWJlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFlvdXR1YmVTZXJ2aWNlIH0gZnJvbSAnLi95b3V0dWJlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd5b3V0dWJlJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWW91dHViZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHZpZGVvSWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGF5ZXJWYXJzOiBZVC5QbGF5ZXJWYXJzO1xyXG4gIEBJbnB1dCgpIGV2ZW50czogWVQuRXZlbnRzO1xyXG5cclxuICBwcml2YXRlIHBsYXllcjogWVQuUGxheWVyO1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHlvdXR1YmVBcGlTZXJ2aWNlOiBZb3V0dWJlU2VydmljZSxcclxuICAgIHByaXZhdGUgcGxheWVyRWxlbWVudDogRWxlbWVudFJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBwbGF5ZXJPcHRpb25zOiBZVC5QbGF5ZXJPcHRpb25zID0ge307XHJcblxyXG4gICAgaWYgKHRoaXMud2lkdGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwbGF5ZXJPcHRpb25zLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwbGF5ZXJPcHRpb25zLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnZpZGVvSWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwbGF5ZXJPcHRpb25zLnZpZGVvSWQgPSB0aGlzLnZpZGVvSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucGxheWVyVmFycyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBsYXllck9wdGlvbnMucGxheWVyVmFycyA9IHRoaXMucGxheWVyVmFycztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5ldmVudHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwbGF5ZXJPcHRpb25zLmV2ZW50cyA9IHt9O1xyXG5cclxuICAgICAgT2JqZWN0LmtleXModGhpcy5ldmVudHMpLmZvckVhY2goZXZlbnRMaXN0ZW5lck5hbWUgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudExpc3RlbmVyTmFtZSkpIHtcclxuICAgICAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50c1tldmVudExpc3RlbmVyTmFtZV07XHJcbiAgICAgICAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IGV2ZW50ID0+IHN1YmplY3QubmV4dChldmVudCk7XHJcblxyXG4gICAgICAgICAgcGxheWVyT3B0aW9ucy5ldmVudHNbZXZlbnRMaXN0ZW5lck5hbWVdID0gaGFuZGxlcjtcclxuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YmplY3Quc3Vic2NyaWJlKGV2ZW50TGlzdGVuZXIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueW91dHViZUFwaVNlcnZpY2UuZ2V0SWZyYW1lQXBpKCkudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgc3VjY2Vzcy5QbGF5ZXIoXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgcGxheWVyT3B0aW9uc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMucGxheWVyO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGZvciAoY29uc3Qgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19