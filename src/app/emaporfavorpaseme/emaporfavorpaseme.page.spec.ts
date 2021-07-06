import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmaporfavorpasemePage } from './emaporfavorpaseme.page';

describe('EmaporfavorpasemePage', () => {
  let component: EmaporfavorpasemePage;
  let fixture: ComponentFixture<EmaporfavorpasemePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmaporfavorpasemePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmaporfavorpasemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
