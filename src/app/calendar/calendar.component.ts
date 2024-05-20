import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScheduleComponent, MonthService, DayService, WeekService, WorkWeekService, AgendaService, MonthAgendaService, ResourcesModel, CellClickEventArgs, CurrentAction, EventSettingsModel, EJ2Instance, CallbackFunction, ScheduleModule, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
import { extend, Internationalization, closest, isNullOrUndefined } from '@syncfusion/ej2-base';
import { scheduleData } from '../data';
import { CommonModule  } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { LessonService } from '../services/lesson.service';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ScheduleModule,  CommonModule, ButtonModule],
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
 
  public eventSettings: EventSettingsModel = { dataSource: extend([], scheduleData, Object, true) as Record<string, any>[] };

  public getResourceData(data: Record<string, any>): Record<string, any> {
    const resources: ResourcesModel = this.scheduleObj.getResourceCollections()[0];
    const resourceData: Record<string, any> = (resources.dataSource as Record<string, any>[]).filter((resource: Record<string, any>) =>
      resource.Id === data.RoomId)[0] as Record<string, any>;
    return resourceData;
  }

  public getHeaderStyles(data: Record<string, any>): Record<string, any> {
    // if (data.elementType === 'cell') {
    //   return { 'align-items': 'center', color: '#919191' };
    // } else {
    //   const resourceData: Record<string, any> = this.getResourceData(data);
      return { background: '#475387', color: '#FFFFFF' };
    // }
  }

  public getHeaderTitle(data: Record<string, any>): string {
    return (data.elementType === 'cell') ? 'Ajouter une leçon' : 'Détails - ' + data.Subject;
  }

  public getHeaderDetails(data: { [key: string]: Date }): string {
    return this.intl.formatDate(data.StartTime, { type: 'date', skeleton: 'full' }) + ' (' +
      this.intl.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' +
      this.intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ')';
  }

  public buttonClickActions(e: Event): void {
    const quickPopup: HTMLElement = closest(e.target as HTMLElement, '.e-quick-popup-wrapper') as HTMLElement;
    this.scheduleObj.openQuickInfoPopup({
      Subject: 'Meeting',
      StartTime: new Date(2023, 2, 6, 20, 0, 0),
      EndTime: new Date(2023, 2, 6, 21, 0, 0)
  });
  }

  public reserverCreneau(): void {
    this.lessonService.addStudentToLesson(1,1).subscribe((data) => {
      console.log(data);
  });}
}
