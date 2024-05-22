import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ScheduleComponent, MonthService, DayService, WeekService, WorkWeekService, AgendaService, MonthAgendaService, EventSettingsModel, ScheduleModule, ActionEventArgs } from '@syncfusion/ej2-angular-schedule';
import { extend, Internationalization, closest } from '@syncfusion/ej2-base';
import { CommonModule  } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { LessonService } from '../lessons/services/lesson.service';
import {CalendarFiltersComponent} from "./calendar-filters/calendar-filters.component";
import { userId } from '../../../assets/mock/data';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ScheduleModule, CommonModule, ButtonModule, CalendarFiltersComponent],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  @ViewChild('scheduleObj') public scheduleObj!: ScheduleComponent;

  public selectedDate: Date = new Date(2024, 4, 5);
  public intl: Internationalization = new Internationalization();

  constructor(private lessonService: LessonService) {}

  public eventSettings: EventSettingsModel = {
    fields: {
      subject: { title: 'Event Name', name: 'title'},
      startTime: { title: 'From', name: 'startTime' },
      endTime: { title: 'To', name: 'endTime' }
    }
   };

  public getHeaderStyles(data: Record<string, any>): Record<string, any> {
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

  public buttonClickActions(e: Event): void {
    const quickPopup: HTMLElement = closest(e.target as HTMLElement, '.e-quick-popup-wrapper') as HTMLElement;
    this.scheduleObj.openQuickInfoPopup({
      Subject: 'Meeting',
      StartTime: new Date(2023, 2, 6, 20, 0, 0),
      EndTime: new Date(2023, 2, 6, 21, 0, 0)
  });
  }

  public async onActionComplete(args: ActionEventArgs): Promise<void> {
    if ( args.requestType === "viewNavigate" || args.requestType === "dateNavigate") { 
      var currentViewDates = this.scheduleObj.getCurrentViewDates(); 
      var startDate = currentViewDates[0]; 
      var endDate = currentViewDates[currentViewDates.length-1];
      console.log(startDate);
      console.log(endDate);
      const data = await this.getLessons(userId, startDate, endDate, false);
      this.eventSettings.dataSource = data as any[];
      this.scheduleObj.deleteEvent(this.scheduleObj.eventsData as { [key: string]: any}[]);
      this.scheduleObj.addEvent(data as any[]);
      console.log(this.eventSettings.dataSource);
    }
  }

private async getLessons(id: string, startDate: Date, endDate: Date, flag: boolean): Promise<any[]> {
  return new Promise<any[]>((resolve, reject) => {
      this.lessonService.getLessons(id, startDate, endDate, flag).subscribe((data) => {
          console.log("on lance la requete");
          resolve(data as any[]);
      }, (error) => {
          reject(error);
      });
  });
}

  public onMonitorChange(moniteur: string): void {
    if (moniteur === 'All') {
      this.scheduleObj.eventSettings.dataSource = this.eventSettings.dataSource;
    } else {
      this.scheduleObj.eventSettings.dataSource = (this.eventSettings.dataSource as any[]).filter(event => event.Moniteur === moniteur);
    }
    this.scheduleObj.refreshEvents();
  }

  public reserverCreneau(idLesson: number): void {
    this.lessonService.addStudentToLesson(idLesson,userId).subscribe((data) => {
  });}

  public fileDattente(idLesson: number): void {
    this.lessonService.addStudentToWaitingList(idLesson,userId).subscribe((data) => {
  })}

  public quitterFileAttente(idLesson: number): void {
    //this.lessonService.removeStudentFromLesson(idLesson,userId).subscribe((data) => {
  };

  public async annulerReservation(idLesson: number){
    this.lessonService.removeStudentFromLesson(idLesson,userId).subscribe();
  }
}
