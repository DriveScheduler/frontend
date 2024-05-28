export interface Lesson {
    state: {
        value: number;
        label: string;
    };
    id: number;
    title: string;
    status: string;
    startTime: Date;
    endTime: Date;
    duration: string;
    teacher: string;
    vehicle: string;
}