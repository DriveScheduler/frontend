import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ScheduleComponent, MonthService, DayService, WeekService, WorkWeekService, AgendaService, MonthAgendaService, EventSettingsModel, ScheduleModule, ActionEventArgs } from '@syncfusion/ej2-angular-schedule';
import { extend, Internationalization, closest } from '@syncfusion/ej2-base';
import { scheduleData, monitorData } from '../../../assets/mock/data';
import { CommonModule  } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { LessonService } from '../lessons/services/lesson.service';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import {CalendarFiltersComponent} from "./calendar-filters/calendar-filters.component";

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

  public eventSettings: EventSettingsModel = { dataSource: extend([], scheduleData, Object, true) as Record<string, any>[] };

  public getHeaderStyles(data: Record<string, any>): Record<string, any> {
      return { background: '#475387', color: '#FFFFFF' };
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

  public onActionBegin(args: ActionEventArgs): void {
    if (args.requestType === 'toolbarItemRendering') {
      if (args.items) {
      args.items.push({ align: 'Right', template: '<input type="text" id="UserDropdown" />' });
      }
    }
  }

  public onActionComplete(args: ActionEventArgs): void {
    if (args.requestType === 'toolBarItemRendered') {
      let userDropdown: HTMLElement = document.getElementById('UserDropdown') as HTMLElement;

      let userDropDownObj = new DropDownList({
        dataSource: monitorData,
        fields: { text: 'Name', value: 'Name' },
        placeholder: 'Filtrer par moniteur',
        width: '150px',
        change: (e: any) => this.onMonitorChange(e.value)
      });
      userDropDownObj.appendTo(userDropdown);
    }
  }

  public onMonitorChange(moniteur: string): void {
    console.log(moniteur);
    if (moniteur === 'All') {
      this.scheduleObj.eventSettings.dataSource = this.eventSettings.dataSource;
    } else {
      this.scheduleObj.eventSettings.dataSource = (this.eventSettings.dataSource as any[]).filter(event => event.Moniteur === moniteur);
    }
    this.scheduleObj.refreshEvents();
  }

  public reserverCreneau(idLesson: number): void {
    this.lessonService.addStudentToLesson(idLesson,"47C0B9DB-44AB-4EEA-9F73-0B76092AAA45").subscribe((data) => {
      console.log(data);
  });}
}
