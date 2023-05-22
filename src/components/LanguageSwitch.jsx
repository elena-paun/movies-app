import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex items-center'>
      <button
        className={`${
          i18n.language === 'en' ? 'bg-gray-200 text-gray-700' : 'text-gray-200'
        } p-1 rounded-sm`}
        onClick={() => changeLanguage('en')}>
        en
      </button>
      <div>|</div>
      <button
        className={`${
          i18n.language === 'jp' ? 'bg-gray-200 text-gray-700' : 'text-gray-200'
        } p-1 rounded-sm`}
        onClick={() => changeLanguage('jp')}>
        jp
      </button>
    </div>
  );
};

export default LanguageSwitch;
