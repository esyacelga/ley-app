import { TestBed } from '@angular/core/testing';
import { NotifyService } from './notify.service';
describe('NotifyService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(NotifyService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=notify.service.spec.js.map