export interface Lesson {
    state: {
        value: number;
        label: string;
    };
    id: number;
    title: string;
    startTime: Date;
    endTime: Date;
    duration: string;
    teacher: string;
    vehicle: string;
    waitingList: number;
    color: string;
    cssClass: string | undefined;
}