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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteW91dHViZS1jb21wb25lbnQvIiwic291cmNlcyI6WyJsaWIveW91dHViZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUVMLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPbkQsTUFBTTs7Ozs7SUFVSixZQUNVLG1CQUNBO1FBREEsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQixrQkFBYSxHQUFiLGFBQWE7NkJBSmlCLEVBQUU7S0FLdEM7Ozs7SUFFSixRQUFRO1FBQ04sdUJBQU0sYUFBYSxHQUFxQixFQUFFLENBQUM7UUFFM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdCLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3RDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUM1QztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixhQUFhLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRTtnQkFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELHVCQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ3JELHVCQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO29CQUNuQyx1QkFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUU3QyxhQUFhLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsT0FBTyxDQUFDO29CQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7aUJBQzNEO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFDaEMsYUFBYSxDQUNkLENBQUM7WUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQixDQUFDLENBQUM7S0FDSjs7OztJQUVELFdBQVc7UUFDVCxHQUFHLENBQUMsQ0FBQyx1QkFBTSxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDOUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVCO0tBQ0Y7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7WUFOUSxjQUFjO1lBSnJCLFVBQVU7OztzQkFZVCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQge30gZnJvbSAnQHR5cGVzL3lvdXR1YmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBZb3V0dWJlU2VydmljZSB9IGZyb20gJy4veW91dHViZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneW91dHViZScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBZb3V0dWJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgdmlkZW9JZDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGF5ZXJWYXJzOiBZVC5QbGF5ZXJWYXJzO1xuICBASW5wdXQoKSBldmVudHM6IFlULkV2ZW50cztcblxuICBwcml2YXRlIHBsYXllcjogWVQuUGxheWVyO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB5b3V0dWJlQXBpU2VydmljZTogWW91dHViZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF5ZXJFbGVtZW50OiBFbGVtZW50UmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBwbGF5ZXJPcHRpb25zOiBZVC5QbGF5ZXJPcHRpb25zID0ge307XG5cbiAgICBpZiAodGhpcy53aWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGF5ZXJPcHRpb25zLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGxheWVyT3B0aW9ucy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52aWRlb0lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBsYXllck9wdGlvbnMudmlkZW9JZCA9IHRoaXMudmlkZW9JZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wbGF5ZXJWYXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBsYXllck9wdGlvbnMucGxheWVyVmFycyA9IHRoaXMucGxheWVyVmFycztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGxheWVyT3B0aW9ucy5ldmVudHMgPSB7fTtcblxuICAgICAgT2JqZWN0LmtleXModGhpcy5ldmVudHMpLmZvckVhY2goZXZlbnRMaXN0ZW5lck5hbWUgPT4ge1xuICAgICAgICBpZiAodGhpcy5ldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnRMaXN0ZW5lck5hbWUpKSB7XG4gICAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRzW2V2ZW50TGlzdGVuZXJOYW1lXTtcbiAgICAgICAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBldmVudCA9PiBzdWJqZWN0Lm5leHQoZXZlbnQpO1xuXG4gICAgICAgICAgcGxheWVyT3B0aW9ucy5ldmVudHNbZXZlbnRMaXN0ZW5lck5hbWVdID0gaGFuZGxlcjtcbiAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChzdWJqZWN0LnN1YnNjcmliZShldmVudExpc3RlbmVyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMueW91dHViZUFwaVNlcnZpY2UuZ2V0SWZyYW1lQXBpKCkudGhlbihzdWNjZXNzID0+IHtcbiAgICAgIHRoaXMucGxheWVyID0gbmV3IHN1Y2Nlc3MuUGxheWVyKFxuICAgICAgICB0aGlzLnBsYXllckVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgcGxheWVyT3B0aW9uc1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHRoaXMucGxheWVyO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgZm9yIChjb25zdCBzdWJzY3JpcHRpb24gb2YgdGhpcy5zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==