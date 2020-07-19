import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

import samplePDF from '../files/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends React.Component {
   render() {
      return (
         <div id="resume">
            <Document file={samplePDF}>
               <Page pageNumber={1} />
            </Document>
         </div>
      );
   }
}

export default Resume;
