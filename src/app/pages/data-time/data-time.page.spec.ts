import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataTimePage } from './data-time.page';

describe('DataTimePage', () => {
  let component: DataTimePage;
  let fixture: ComponentFixture<DataTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
