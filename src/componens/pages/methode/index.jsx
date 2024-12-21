import { useTranslation } from  "react-i18next";

const Word = ({ v }) => {
  // Use next-i18next to get translation function for the 'about' namespace
  const { t: translate } = useTranslation('translation');

  // Get the translated word based on the key 'v'
  const translatedWord = translate(v);

  // Optional: Log the translation process for debugging
  
  return (
    <>
      {translatedWord}
    </>
  );
};

export default Word;
