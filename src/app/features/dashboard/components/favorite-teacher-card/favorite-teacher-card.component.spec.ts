import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTeacherCardComponent } from './favorite-teacher-card.component';

describe('TeacherCardComponent', () => {
  let component: FavoriteTeacherCardComponent;
  let fixture: ComponentFixture<FavoriteTeacherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteTeacherCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteTeacherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
