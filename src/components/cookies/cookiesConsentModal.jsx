// CookieConsentModal.jsx
import React, { useState, useEffect } from 'react';

const CookieConsentModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShowModal(true);
    } else if (consent === 'accepted') {
      loadGoogleAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowModal(false);
    loadGoogleAnalytics();
  };

  const handleDeny = () => {
    localStorage.setItem('cookieConsent', 'denied');
    setShowModal(false);
  };

  const loadGoogleAnalytics = () => {
    // Carga asincrónica del script de Google Analytics
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WDGDZ4QZPV';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-WDGDZ4QZPV');
    }
  };

 

  return (
    < div id="default-modal" class= {`sticky z-50 justify-center bg-slate-200 items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${!showModal ? 'hidden' : ''}`}>
    
      <section className=" bg-gray-100  shadow dark:bg-gray-100 py-6 flex justify-around content-center items-center">
       <p>Usamos cookies para optimizar nuestro sitio web y nuestro servicio.</p>
       <div className='flex gap-10'>
       <button onClick={handleDeny}>Denegar</button>
       <button onClick={handleAccept} className='"focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"'>Aceptar</button>
       

       </div>
       
      </section>
    </div>
   
  );
};

export default CookieConsentModal;
