import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BasketService } from '../basket/basket.service';
import { ItemClientService } from '../items/item/itemClient.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AdminComponent } from './admin.component';
import { ItemAdmin } from './itemAdmin.model';
import { ItemAdminService } from './itemAdmin.service';

describe('HomeComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports:[HttpClientTestingModule],
      providers: [ItemAdminService, DataStorageService, ItemClientService, BasketService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should use itemAdminService items', () => {
    let itemAdminService = fixture.debugElement.injector.get(ItemAdminService);
    
    expect(itemAdminService.getItems()).toEqual(component.items);
  });

//   it('should use mocked items', () => {
//     let itemAdminService = fixture.debugElement.injector.get(ItemAdminService);
//     let items: ItemAdmin[] = [
//         new ItemAdmin("test")
//     ];
//     let spy = spyOn(itemAdminService, 'getItems').and.returnValue(items)
//     fixture.detectChanges();
//     expect(component.items[0]).toBeTruthy();

    // fixture.whenStable().then(() => {
    //     expect(component.items[0]).toBeTruthy();
    // });
    
//   });

  it('should display the \'Name\' input label', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('Name');
  });


});

