import React, { useState } from 'react';
import { translateText } from '../utils/translate';

export default function Translator() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    const result = await translateText(text);
    setTranslatedText(result);
  };

  return (
    <div>
      <h1>English to Arabic Translator</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text in English"
      />
      <button onClick={handleTranslate}>Translate</button>
      <h2>Translated Text:</h2>
      <p>{translatedText}</p>
    </div>
  );
}
