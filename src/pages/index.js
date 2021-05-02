import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>🌌 Pump Machine Dump Machine Get Lowcost Products And Sing!.. No? No No No, Tabadabada I am currently dying, let me sing you a song...</title>
      </Helmet>
      <p><div style='font-size:220px;'>🌌</div></p>
      <h1>Pump Machine Dump Machine Get Lowcost Products And Sing!.. No? No No No, Tabadabada I am currently dying, let me sing you a song...</h1>
      <p>Current mood: Distracted... Making artist's shits look prettier and stinkier. And pending videoartproject with Apophysis; involves software programming with desirably GPLv3 license. Искусство должно принадлежать народу! Всем привет! And you're welcome! Stay tuned, follow hype, and let's happily dance! Extatic sufi dances make globe disappear in </p>
      
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
        directories, <code>/src</code> for static content and <code>/api</code>{' '}
        which contains a serverless{' '}
        <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Node.js (TypeScript)
        </a>
        .
      </p>
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
      <hr noshade />
      <p>
        Powered by{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
      </p>
    </main>
  );
}

export default Index;
