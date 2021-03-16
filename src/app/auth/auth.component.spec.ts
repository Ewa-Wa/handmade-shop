import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasketService } from '../basket/basket.service';
import { ItemClientService } from '../items/item/itemClient.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';

describe('HomeComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports:[HttpClientModule],
      providers: [AuthService, DataStorageService, ItemClientService, BasketService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display \'Welcome\' if user is logged in', () => {
    let authService = fixture.debugElement.injector.get(AuthService);
    authService.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Welcome');
  });

  it('shouldn\'t display \'Welcome\' if user isn\'t logged in', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3')).toBeFalsy();
  });


});