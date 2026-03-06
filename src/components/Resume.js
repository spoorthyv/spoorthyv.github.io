import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { IconCloudDownload } from '@tabler/icons-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import resumePDF from '../files/resume.pdf';

import '../stylesheets/resume.scss';

// Configure the worker for react-pdf to use local bundle instead of CDN
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
   'pdfjs-dist/build/pdf.worker.min.mjs',
   import.meta.url,
).toString();

const Resume = () => {
   const [width, setWidth] = useState(870);
   const pdfWrapperRef = useRef(null);

   useEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => {
         for (let entry of entries) {
            setWidth(entry.contentRect.width);
         }
      });

      if (pdfWrapperRef.current) {
         resizeObserver.observe(pdfWrapperRef.current);
      }

      return () => {
         resizeObserver.disconnect();
      };
   }, []);

   return (
      <div id="resume">
         <div className="contentWrapper">
            <div className="resumePdf" ref={pdfWrapperRef}>
               <Document file={resumePDF}>
                  <Page
                     pageNumber={1}
                     width={width}
                     renderTextLayer={false}
                     renderAnnotationLayer={false}
                  />
               </Document>
            </div>
            <a id="dlResumeButton" href={resumePDF} download>
               Download Resume
               <IconCloudDownload size={24} />
            </a>
         </div>
      </div>
   );
};

export default Resume;
