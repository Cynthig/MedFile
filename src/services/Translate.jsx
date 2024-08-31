import React, { useState } from "react";
import axios from "axios";

const Translate = () => {
  const [text, setText] = useState('');
  const [languageCode, setLanguageCode] = useState('');
  const [targetCode, setTargetCode] = useState('');
  const [translateId, setTranslateId] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [OrgID, setOrgID] = useState('');

  const handleTranslate = async () => {
    if (!OrgID) {
        console.error("OrgID is required.");
        return;
      }
    try {
      const client_id = 'm7PODIL7Fa2HTxKQeFfDCY4lUgL3xqRO'; // Replace with your client ID
      const client_secret = 'yCfAG8F0IizSA4yn'; // Replace with your client secret
      const auth = btoa(`${client_id}:${client_secret}`);

      //const authResponse = await axios.post(
        // 'https://api.chenosis.io/oauth/client/accesstoken?grant_type=client_credentials',
        // {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     Authorization: `Basic bTdQT0RJTDdGYTJIVHhLUWVGZkRDWTRsVWdMM3hxUk86eUNmQUc4RjBJaXpTQTR5bg==`,
        //   },
        // }
      //);

    //   const accessToken = authResponse.data.access_token;
    //   console.log('Authentication successful:', accessToken);

      const translationResponse = await axios.post(
        'https://api.chenosis.io/botlhale/translate/getTranslation',
        {
          text,
          languageCode,
          targetCode,
          translateId,
          OrgID: 'Chen-5147-GSGJMA',
        },
        {
          headers: {
            Authorization: `Bearer "p6JoegEQA4WhysaM1sQHtb790AsF`,
            'content-Type':'application/json',
          },
        }
      );

      setTranslatedText(translationResponse.data.translatedText);
    } catch (error) {
    console.error('Error translating text:', error.response?.data || error.message);    }
  };

  return (
    <div>
      <h1>Language Translator</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Language Code"
        value={languageCode}
        onChange={(e) => setLanguageCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Target Code"
        value={targetCode}
        onChange={(e) => setTargetCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Translate ID"
        value={translateId}
        onChange={(e) => setTranslateId(e.target.value)}
      />

     <input
        type="text"
        placeholder="OrgID"
        value={OrgID}
        onChange={(e) => setOrgID(e.target.value)}
     />
      
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && <p>Translated text: {translatedText}</p>}
    </div>
  );
};

export default Translate;
