import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ScheduleComponent, MonthService, DayService, WorkWeekService, AgendaService, MonthAgendaService, EventSettingsModel, ScheduleModule, ActionEventArgs, PopupOpenEventArgs, EventRenderedArgs, ResourcesModel, WeekService } from '@syncfusion/ej2-angular-schedule';
import { Internationalization } from '@syncfusion/ej2-base';
import { CommonModule  } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { LessonService } from 'src/app/shared/services/lessons/services/lesson.service';
import {CalendarFiltersComponent} from "src/app/features/calendar/calendar-filters/calendar-filters.component";
import { Lesson } from 'src/app/shared/models/lesson';
import { Observable, Subscription, map } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomSnackbarService } from 'src/app/shared/components/custom-snackbar/custom-snackbar.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/shared/models/user';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ScheduleModule, CommonModule, ButtonModule, CalendarFiltersComponent,DateTimePickerModule, TextBoxModule, ReactiveFormsModule],
  providers: [DayService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent{

  selectedDate$: Date = new Date();
  lessons$!: Observable<Lesson[]>;
  selectedTeachers$ : string[] = [];
  onlyEmptyLessons$ : boolean = false;
  user!: User;
  userSubscription!: Subscription;

  @ViewChild('scheduleObj') public scheduleObj!: ScheduleComponent;

  public intl: Internationalization = new Internationalization();

  public eventSettings: EventSettingsModel = {
    fields: {
      subject: { title: 'Event Name', name: 'title'},
      startTime: { title: 'From', name: 'startTime' },
      endTime: { title: 'To', name: 'endTime' }
    },
   };

  constructor(private lessonService: LessonService, private customSnackbar: CustomSnackbarService, private userService: UserService) {
  }

  lessonFormCreation = new FormGroup({
    name: new FormControl('', Validators.required),
    start: new FormControl('', Validators.required),
    duration: new FormControl(30, Validators.required),
  });
  
  
  public onCreate(): void {
    this.initializeCalendar();
    this.getLessons();
    this.refreshEvents();
  }

  private initializeCalendar() {
    this.scheduleObj.currentView = 'WorkWeek';
    this.scheduleObj.views = ['Day', 'WorkWeek', 'Month', 'Agenda'];
    this.userSubscription = this.userService.getUser().subscribe(user => {
      
      this.user = user;
      if (this.user.userType.value === 0) {
        this.scheduleObj.eventSettings.allowAdding = false;
        this.scheduleObj.eventSettings.allowEditing = false;
        this.scheduleObj.eventSettings.allowDeleting = false;
      }
      this.getLessons();
      this.refreshEvents();
    });    
  }

  public onCellClick(args: any): void {
    const clickedDate: Date = args.startTime;
    this.lessonFormCreation.patchValue({
      name: '',
      start: clickedDate.toISOString()
    });
  }

  public onEventClick(args: any): void {
    const clickedDate: Date = args.event.startTime;
    this.lessonFormCreation.patchValue({
      name: args.event.title,
      start: clickedDate.toISOString(),
      duration: parseInt(args.event.duration)
    });
  }

  public onFilterChange(filters: any) {
    this.selectedTeachers$ = filters.teachers;
    this.onlyEmptyLessons$ = filters.onlyEmpty;
    this.getLessons();
    this.refreshEvents();
  }

  public getHeaderStyles(data: Record<string, any>): Record<string, any> {
    if (data.elementType === 'cell') {
      return { 'align-items': 'center', color: '#919191' };
    } else {
      return { background: data.color, color: '#FFFFFF' };
    }  
  }

  public getHeaderTitle(data: Record<string, any>): string {
    return (data.elementType === 'cell') ? 'Créer une leçon' : 'Détails - ' + data.title;
  }

  public getHeaderDetails(data: { [key: string]: Date }): string {
    return this.intl.formatDate(data.startTime, { type: 'date', skeleton: 'full' }) + ' (' +
      this.intl.formatDate(data.startTime, { skeleton: 'hm' }) + ' - ' +
      this.intl.formatDate(data.endTime, { skeleton: 'hm' }) + ')';
  }

  public onActionComplete(args: ActionEventArgs) {
    if (args.requestType === "viewNavigate" || args.requestType === "dateNavigate") {
      this.getLessons();
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
  }

  public onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'Editor') {
      args.cancel = true;
    }
  }

  applyCategoryColor(args: EventRenderedArgs): void {
      args.element.style.backgroundColor = args.data.color;      
  }
// ---------------------- CRUD ----------------------
  private getLessons(){
    const currentViewDates = this.scheduleObj.getCurrentViewDates();
    const startDate = currentViewDates[0];
    const endDate = currentViewDates[currentViewDates.length - 1];
    
    this.lessons$ = this.lessonService.getLessons(startDate, endDate, this.onlyEmptyLessons$, this.selectedTeachers$)
      .pipe(
        map((lessons: Lesson[]) => {
          return lessons.map((lesson) => {
            switch (lesson.state.value) {
              case 0:
                lesson.color = '#1E90FF';  // Libre
                break;
              case 1:
                lesson.color = '#ee1010';  // Réservé par un autre élève
                break;
              case 2:
                lesson.color = '#6B8E23';  // Réservé
                break;
              case 3:
                lesson.color = '#df6d14';  // En file d'attente
                break;
              default:
                lesson.color = '#000000';  // Default color if needed
            }
            return lesson;
          });
        })
      );
  }

  public reserverCreneau(idLesson: number): void {
    this.lessonService.addStudentToLesson(idLesson).subscribe(
      (data) => {
        this.customSnackbar.show('Réservation faite !', 'success')
        this.scheduleObj.closeQuickInfoPopup();
        this.refreshEvents();
      },
      (error) => this.customSnackbar.show(error.error, 'error')
    )
  }

  public fileDattente(idLesson: number): void {
    this.lessonService.addStudentToWaitingList(idLesson).subscribe((data) => {
      this.customSnackbar.show('Vous êtes en file d\'attente !', 'success')
      this.scheduleObj.closeQuickInfoPopup();
      this.refreshEvents();
    },
    (error) => this.customSnackbar.show(error.error, 'error')
  )
  }

  public quitterFileAttente(idLesson: number): void {
    this.lessonService.removeStudentFromWaitingList(idLesson).subscribe((data) => {
      this.customSnackbar.show('Vous avez quitté la file d\'attente !', 'success')
      this.scheduleObj.closeQuickInfoPopup();
      this.refreshEvents();
    },
    (error) => this.customSnackbar.show(error.error, 'error')
  )
}
  
  public async annulerReservation(idLesson: number){
    this.lessonService.removeStudentFromLesson(idLesson).subscribe((data) => {
      this.customSnackbar.show('Réservation annulée !', 'success')
      this.scheduleObj.closeQuickInfoPopup();
      this.refreshEvents();
    },
    (error) => this.customSnackbar.show(error.error, 'error')
  )
}
  public creerLecon(): void {
    const formData = this.lessonFormCreation.value;
    if (formData.start) {
      //Ici ca bricole parce que l'objet Date force avec son GMT +2
      const d = new Date(formData.start);
      const datePart = d.toLocaleDateString('fr-CA'); // Format: YYYY-MM-DD
      const timePart = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }); // Format: HH:mm:ss
      const formattedDateTime = `${datePart}T${timePart}`;
    
      formData.start = formattedDateTime;
    }
    
      this.lessonService.createLesson(formData).subscribe(
        (response) => {
          this.customSnackbar.show('Cours créé !', 'success')
          this.scheduleObj.closeQuickInfoPopup();
          this.refreshEvents();
        },
        (error) => this.customSnackbar.show(error.error, 'error')
      );
  }

  public supprimerLecon(idLesson: number): void {
    this.lessonService.deleteLesson(idLesson).subscribe(
      (response) => {
        this.customSnackbar.show('Cours supprimé !', 'success')
        this.scheduleObj.closeQuickInfoPopup();
        this.refreshEvents();
      },
      (error) => this.customSnackbar.show(error.error, 'error')
    );
  }

  public updateLecon(idLesson: number): void {
    const formData = this.lessonFormCreation.value;
    if (formData.start) {
      //Ici ca bricole parce que l'objet Date force avec son GMT +2
      const d = new Date(formData.start);
      const datePart = d.toLocaleDateString('fr-CA'); // Format: YYYY-MM-DD
      const timePart = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }); // Format: HH:mm:ss
      const formattedDateTime = `${datePart}T${timePart}`;
    
      formData.start = formattedDateTime;

      const requestBody = {
        id: idLesson,
        name: formData.name,
        start: formData.start,
        duration: formData.duration
      }

      this.lessonService.updateLesson(requestBody).subscribe(
        (response) => {
          this.customSnackbar.show('Cours mis à jour !', 'success')
          this.scheduleObj.closeQuickInfoPopup();
          this.refreshEvents();
        },
        (error) => this.customSnackbar.show(error.error, 'error')
      );
    }
  }
}

