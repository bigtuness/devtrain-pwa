import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveGpsComponent } from './live-gps.component';

describe('LiveGpsComponent', () => {
  let component: LiveGpsComponent;
  let fixture: ComponentFixture<LiveGpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveGpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
