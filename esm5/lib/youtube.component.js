/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { YoutubeService } from './youtube.service';
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
            for (var _a = tslib_1.__values(this.subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
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
export { YoutubeComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gteW91dHViZS1jb21wb25lbnQvIiwic291cmNlcyI6WyJsaWIveW91dHViZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFFTCxVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQWlCakQsMEJBQ1UsbUJBQ0E7UUFEQSxzQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYTs2QkFKaUIsRUFBRTtLQUt0Qzs7OztJQUVKLG1DQUFROzs7SUFBUjtRQUFBLGlCQTBDQztRQXpDQyxxQkFBTSxhQUFhLEdBQXFCLEVBQUUsQ0FBQztRQUUzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQixhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdEM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzVDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLGFBQWEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRTFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLGlCQUFpQjtnQkFDaEQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELHFCQUFNLGFBQWEsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ3JELHFCQUFNLFNBQU8sR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO29CQUNuQyxxQkFBTSxPQUFPLEdBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxTQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFuQixDQUFtQixDQUFDO29CQUU3QyxhQUFhLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsT0FBTyxDQUFDO29CQUNsRCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7aUJBQzNEO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztZQUNoRCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FDOUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQ2hDLGFBQWEsQ0FDZCxDQUFDO1lBRUYsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7O1lBQ0UsR0FBRyxDQUFDLENBQXVCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFBLGdCQUFBO2dCQUF4QyxJQUFNLFlBQVksV0FBQTtnQkFDckIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzVCOzs7Ozs7Ozs7O0tBQ0Y7O2dCQXBFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O2dCQU5RLGNBQWM7Z0JBSnJCLFVBQVU7OzswQkFZVCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7OzJCQXRCUjs7U0FpQmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHt9IGZyb20gJ0B0eXBlcy95b3V0dWJlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgWW91dHViZVNlcnZpY2UgfSBmcm9tICcuL3lvdXR1YmUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3lvdXR1YmUnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgWW91dHViZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHZpZGVvSWQ6IHN0cmluZztcbiAgQElucHV0KCkgcGxheWVyVmFyczogWVQuUGxheWVyVmFycztcbiAgQElucHV0KCkgZXZlbnRzOiBZVC5FdmVudHM7XG5cbiAgcHJpdmF0ZSBwbGF5ZXI6IFlULlBsYXllcjtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgeW91dHViZUFwaVNlcnZpY2U6IFlvdXR1YmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxheWVyRWxlbWVudDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgcGxheWVyT3B0aW9uczogWVQuUGxheWVyT3B0aW9ucyA9IHt9O1xuXG4gICAgaWYgKHRoaXMud2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGxheWVyT3B0aW9ucy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBsYXllck9wdGlvbnMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmlkZW9JZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGF5ZXJPcHRpb25zLnZpZGVvSWQgPSB0aGlzLnZpZGVvSWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGxheWVyVmFycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwbGF5ZXJPcHRpb25zLnBsYXllclZhcnMgPSB0aGlzLnBsYXllclZhcnM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBsYXllck9wdGlvbnMuZXZlbnRzID0ge307XG5cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRzKS5mb3JFYWNoKGV2ZW50TGlzdGVuZXJOYW1lID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50TGlzdGVuZXJOYW1lKSkge1xuICAgICAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50c1tldmVudExpc3RlbmVyTmFtZV07XG4gICAgICAgICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gZXZlbnQgPT4gc3ViamVjdC5uZXh0KGV2ZW50KTtcblxuICAgICAgICAgIHBsYXllck9wdGlvbnMuZXZlbnRzW2V2ZW50TGlzdGVuZXJOYW1lXSA9IGhhbmRsZXI7XG4gICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3ViamVjdC5zdWJzY3JpYmUoZXZlbnRMaXN0ZW5lcikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnlvdXR1YmVBcGlTZXJ2aWNlLmdldElmcmFtZUFwaSgpLnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICB0aGlzLnBsYXllciA9IG5ldyBzdWNjZXNzLlBsYXllcihcbiAgICAgICAgdGhpcy5wbGF5ZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHBsYXllck9wdGlvbnNcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB0aGlzLnBsYXllcjtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGZvciAoY29uc3Qgc3Vic2NyaXB0aW9uIG9mIHRoaXMuc3Vic2NyaXB0aW9ucykge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=