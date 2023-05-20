import { InjectionToken } from "@angular/core";
import { LabTask } from "./task";

export const tasks = [
  new LabTask(
    'Помыть посуду',
    'Скопилось слишком много посуды.',
    1607328000000
  ),
  new LabTask(
    'Вымыть пол',
    'Пыль на полу понемногу превращается в комочки.',
    1684940400000
  ),
  new LabTask(
    'Прибраться в комнате',
    'Нужно приготовиться к визиту мамы.',
    1685458800000
  )
];

export const LAB_TASKS = new InjectionToken<LabTask[]>('LAB_TASKS');
