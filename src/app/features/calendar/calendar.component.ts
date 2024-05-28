import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ScheduleComponent, MonthService, DayService, WeekService, WorkWeekService, AgendaService, MonthAgendaService, EventSettingsModel, ScheduleModule, ActionEventArgs } from '@syncfusion/ej2-angular-schedule';
import { Internationalization, closest } from '@syncfusion/ej2-base';
import { CommonModule  } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { LessonService } from '../../shared/services/lessons/services/lesson.service';
import {CalendarFiltersComponent} from "./calendar-filters/calendar-filters.component";
import { userId } from '../../../assets/mock/data';
import { Lesson } from '../../shared/models/lesson';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ScheduleModule, CommonModule, ButtonModule, CalendarFiltersComponent],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent{

  selectedDate$: Date = new Date();
  lessons$!: Observable<Lesson[]>;

  @ViewChild('scheduleObj') public scheduleObj!: ScheduleComponent;

  public intl: Internationalization = new Internationalization();

  public eventSettings: EventSettingsModel = {
    fields: {
      subject: { title: 'Event Name', name: 'title'},
      startTime: { title: 'From', name: 'startTime' },
      endTime: { title: 'To', name: 'endTime' }
    }
   };

  constructor(private lessonService: LessonService) {}
  
  public onCreate(): void {
    this.getLessons(userId, false);
    this.refreshEvents();
  }

  public getHeaderStyles(): Record<string, any> {
      return { background: '#475387', color: '#FFFFFF' };
  }

  public getHeaderTitle(data: Record<string, any>): string {
    return (data.elementType === 'cell') ? 'Ajouter une leçon' : 'Détails - ' + data.title;
  }

  public getHeaderDetails(data: { [key: string]: Date }): string {
    return this.intl.formatDate(data.startTime, { type: 'date', skeleton: 'full' }) + ' (' +
      this.intl.formatDate(data.startTime, { skeleton: 'hm' }) + ' - ' +
      this.intl.formatDate(data.endTime, { skeleton: 'hm' }) + ')';
  }

  public onActionComplete(args: ActionEventArgs) {
    if (args.requestType === "viewNavigate" || args.requestType === "dateNavigate") {
      this.getLessons(userId, false);
      this.refreshEvents();
    }
  }

  public refreshEvents(): void {
          // Clear existing events
          this.scheduleObj.eventSettings.dataSource = [];
          this.scheduleObj.refreshEvents();
  
          // Add new events
          this.lessons$.subscribe(
            lessons => {
              this.scheduleObj.eventSettings.dataSource = lessons as Record<string, any>[];
            },
            error => {
              console.error('Erreur lors de la récupération des leçons', error);
            }
          );
          this.scheduleObj.refreshEvents();
  }

  private getLessons(id: string, flag: boolean){
    const currentViewDates = this.scheduleObj.getCurrentViewDates();
    const startDate = currentViewDates[0];
    const endDate = currentViewDates[currentViewDates.length - 1];
    
    this.lessons$ = this.lessonService.getLessons(id, startDate, endDate, flag);
  }

  public reserverCreneau(idLesson: number): void {
    this.lessonService.addStudentToLesson(idLesson,userId).subscribe((data) => {
      this.scheduleObj.closeQuickInfoPopup();
      this.refreshEvents();
  });}

  public fileDattente(idLesson: number): void {
    this.lessonService.addStudentToWaitingList(idLesson,userId).subscribe((data) => {
      this.scheduleObj.closeQuickInfoPopup();
      this.refreshEvents();
  })}

  public quitterFileAttente(idLesson: number): void {
    this.lessonService.removeStudentFromWaitingList(idLesson,userId).subscribe((data) => {
      this.scheduleObj.closeQuickInfoPopup();
      this.refreshEvents();
  });
  }
  
  public async annulerReservation(idLesson: number){
    this.lessonService.removeStudentFromLesson(idLesson,userId).subscribe((data) => {
      this.scheduleObj.closeQuickInfoPopup();
      this.refreshEvents();
  });}
}

