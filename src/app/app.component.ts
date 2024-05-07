import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScheduleAllModule, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScheduleAllModule],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public selectedDate: Date = new Date(2022, 1, 20);
  private data: Object[] = [
    {
      Id: 1,
      Subject: 'Scrum Meeting',
      Location: 'Office',
      StartTime: new Date(2022, 1, 12, 9, 30),
      EndTime: new Date(2023, 1, 12, 10, 30),
      RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1'
    },
  ];
 
  public eventSettings: EventSettingsModel = { dataSource: this.data };
}
