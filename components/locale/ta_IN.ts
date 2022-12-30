import Pagination from 'rc-pagination/lib/locale/ta_IN';
import Calendar from '../calendar/locale/ta_IN';
import DatePicker from '../date-picker/locale/ta_IN';
import type { Locale } from '.';
import TimePicker from '../time-picker/locale/ta_IN';

const localeValues: Locale = {
  locale: 'ta',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  // locales for all comoponents
  global: {
    placeholder: 'தேதியைத் தேர்ந்தெடுக்கவும்',
  },
  Table: {
    filterTitle: 'பட்டியலை மூடு',
    filterConfirm: 'சரி',
    filterReset: 'மீட்டமை',
    filterEmptyText: 'வெற்று உரையை வடிகட்டவும்',
    filterCheckall: 'அனைத்தையும் கிளிக் செய்யவும்',
    filterSearchPlaceholder: 'தேடல் பெட்டி',
    emptyText: 'தகவல் இல்லை',
    selectAll: 'அனைத்தையும் தேர்வுசெய்',
    selectInvert: 'தலைகீழாக மாற்று',
    sortTitle: 'தலைப்பை வரிசைப்படுத்தவும்',
    selectionAll: 'அனைத்தையும் தேர்ந்தெடுத்தது',
    expand: 'விரிவடையும்',
    triggerDesc: 'இறங்கு',
    triggerAsc: 'ஏறும்',
  },
  Modal: {
    okText: 'சரி',
    cancelText: 'ரத்து செய்யவும்',
    justOkText: 'பரவாயில்லை, சரி',
  },
  Popconfirm: {
    okText: 'சரி',
    cancelText: 'ரத்து செய்யவும்',
  },
  Transfer: {
    titles: ['', ''],
    notFoundContent: 'உள்ளடக்கம் கிடைக்கவில்லை',
    searchPlaceholder: 'இங்கு தேடவும்',
    itemUnit: 'தகவல்',
    itemsUnit: 'தகவல்கள்',
  },
  Upload: {
    uploading: 'பதிவேற்றுகிறது...',
    removeFile: 'கோப்பை அகற்று',
    uploadError: 'பதிவேற்றுவதில் பிழை',
    previewFile: 'கோப்பை முன்னோட்டமிடுங்கள்',
    downloadFile: 'பதிவிறக்க கோப்பு',
  },
  Empty: {
    description: 'தகவல் இல்லை',
  },
  Icon: {
    icon: 'உருவம்',
  },
  Text: {
    edit: 'திருத்து',
    copy: 'நகல் எடு',
    copied: 'நகல் எடுக்கப்பட்டது',
    expand: 'விரிவாக்கவும்',
  },
  PageHeader: {
    back: 'பின் செல்லவும்',
  },
  Form: {
    optional: '(விருப்பமானது)',
    defaultValidateMessages: {
      default: 'சரிபார்ப்பு ${label}',
      required: 'தேவை ${label}',
      enum: '${label} ஒன்று இருக்க வேண்டும் [${enum}]',
      whitespace: '${label} வெறுமையாக இருக்க முடியாது',
      date: {
        format: '${label} தேதி வடிவம் தவறானது',
        parse: '${label} தேதியாக மாற்ற முடியாது',
        invalid: '${label} இது தவறான தேதி',
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: '${label} இருக்க வேண்டுய எழுத்துக்கள் ${len}',
        min: '${label} குறைந்தபட்சம் இருக்க வேண்டும் எழுத்துக்கள் ${min}',
        max: '${label} வார்த்தை அதிகபட்சம் ${max}',
        range: '${label} வார்த்தை ${min} முதல் ${max} வரை இருக்க வேண்டும்',
      },
      number: {
        len: '${label}, ${len}க்கு சமமாக இருக்க வேண்டும்',
        min: '${label} குறைந்தபட்சம் ${min} ஆக இருக்க வேண்டும்',
        max: '${label} வார்த்தை அதிகபட்சம் ${max} ஆக இருக்க வேண்டும்',
        range: '${label}, ${min}-${max}க்குள் இருக்க வேண்டும் ',
      },
      array: {
        len: 'இருக்க வேண்டும் ${len} ${label}',
        min: 'குறைந்தபட்சம் ${min} ${label}',
        max: 'அதிக பட்சம் ${max} ${label}',
        range: '${label} அளவு ${min}-${max}க்கு இடையில் இருக்க வேண்டும்',
      },
      pattern: {
        mismatch: '${label} வடிவத்துடன் பொருந்தவில்லை ${pattern}',
      },
    },
  },
  Image: {
    preview: 'முன்னோட்ட',
  },
  QRCode: {
    expired: 'QR குறியீடு காலாவதியானது',
    refresh: 'புதுப்பிப்பு',
  },
};

export default localeValues;
