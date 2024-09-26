export type Habit = {
    name: string;
    url: string,
    habitType: number,
    icon: string,
    submenus: string[],
    notification: number
}

export type DataPerson = Habit[];

export type dataHabitProps = {
    data: Habit
}