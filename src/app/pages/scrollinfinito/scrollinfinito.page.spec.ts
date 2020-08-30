import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScrollinfinitoPage } from './scrollinfinito.page';

describe('ScrollinfinitoPage', () => {
  let component: ScrollinfinitoPage;
  let fixture: ComponentFixture<ScrollinfinitoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollinfinitoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollinfinitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
