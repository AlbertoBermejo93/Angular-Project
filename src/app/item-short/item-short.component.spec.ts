import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShortComponent } from './item-short.component';

describe('ItemShortComponent', () => {
  let component: ItemShortComponent;
  let fixture: ComponentFixture<ItemShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
