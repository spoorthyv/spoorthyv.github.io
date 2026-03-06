import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import resumePDF from '../files/resume.pdf';
import downloadCloud from '../images/resume/downloadCloud.svg';

import '../stylesheets/resume.scss';

// Configure the worker for react-pdf to use local bundle instead of CDN
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
   'pdfjs-dist/build/pdf.worker.min.mjs',
   import.meta.url,
).toString();

class Resume extends React.Component {
   render() {
      return (
         <div id="resume">
            <div className="contentWrapper">
               <div className="resumePdf">
                  <Document file={resumePDF}>
                     <Page pageNumber={1} width={870} renderTextLayer={false} renderAnnotationLayer={false} />
                  </Document>
               </div>
               <a id="dlResumeButton" href={resumePDF} download>
                  Download Resume
                  <img src={downloadCloud} alt="Download" />
               </a>
            </div>
         </div>
      );
   }
}

export default Resume;
