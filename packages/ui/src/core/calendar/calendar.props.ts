import type { Values } from '../../utils/types';

import { PopperOptions, VirtualElement } from '../popper/popper.props';
import { Position } from '../popper/types';

export type AnchorElType = Element | VirtualElement | null | undefined;

export type PopperPositionType = Values<typeof Position>;

export interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  maxDate?: string;
  position?: PopperPositionType;
  popperOptions?: PopperOptions;
  minDate?: string;
  anchorEl?: AnchorElType;
  open?: boolean;
  autoSelectToday?: boolean;
  enableAutoSelect?: boolean;
  isDisabled?: boolean;
  zIndex?: number;
  calendarStyles?: object;
  onChange?: (value: string) => void;
  setOpen?: (value: boolean) => void;
}

export interface MonthPickerProps {
  _month?: number;
  maxYear?: number;
  minYear?: number;
  maxMonth?: number;
  minMonth?: number;
  value?: string;
  maxDate?: string;
  minDate?: string;
  year?: number;
  selectedDay?: number;
  showMonthsDatePicker?: boolean;
  enableAutoSelect?: boolean;
  currentMonth?: number | string;
  getMonthStr?: (value: number) => number | string;
  monthDetails?: object[];
  setMonth?: (value: number) => void;
  onChange?: (value: string) => void;
  setSelectedDay?: (value: number) => void;
  setMonthDetails?: (value: any) => void;
  getMonthDetails?: (year: number, month: number) => object[];
  getTimeStamp?: () => number;
  setShowMonthsDatePicker?: (value: boolean) => void;
}

export interface YearPickerProps {
  showYearsDatePicker?: boolean;
  enableAutoSelect?: boolean;
  maxDate?: string;
  minYear?: number;
  minDate?: string;
  value?: string;
  _year?: number;
  maxYear?: number;
  maxMonth?: number;
  isYearForm?: boolean;
  monthIndex?: number;
  monthDetails?: object[];
  selectedDay?: number;
  setYear?: (value: number) => void;
  setSelectedDay?: (value: number) => void;
  setMonthDetails?: (value: any) => void;
  getMonthDetails?: (year: number, month: number) => object[];
  getTimeStamp?: () => number;
  onChange?: (value: string) => void;
  setShowYearsDatePicker?: (value: boolean) => void;
}
