// Tamil Locale added to rc-calendar
import CalendarLocale from 'rc-picker/lib/locale/ta_IN';
import TimePickerLocale from '../../time-picker/locale/ta_IN';
import type { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்',
    rangePlaceholder: ['தொடக்க தேதி', 'கடைசி தேதி'],
    quarterPlaceholder: 'காலாண்டு தேதியைத் தேர்ந்தெடுக்கவும்',
    monthPlaceholder: 'மாத தேதியைத் தேர்ந்தெடுக்கவும்',
    weekPlaceholder: 'வாரம் தேதியைத் தேர்ந்தெடுக்கவும்',
    rangeYearPlaceholder: ['ஆண்டு தொடக்க தேதி', 'ஆண்டு கடைசி தேதி'],
    rangeMonthPlaceholder: ['மாதம் தொடக்க தேதி', 'மாதம் கடைசி தேதி'],
    rangeWeekPlaceholder: ['வாரம் தொடக்க தேதி', 'வாரம் தொடக்க தேதி'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
