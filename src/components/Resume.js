import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { IconCloudDownload } from '@tabler/icons-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import resumePDF from '../files/resume.pdf';

import { ReactComponent as SkewedRect } from '../images/shapes/skewedrect.svg';
import { ReactComponent as Circle } from '../images/shapes/circle.svg';
import { ReactComponent as Triangle } from '../images/shapes/triangle.svg';

import '../stylesheets/resume.scss';

// Configure PDF.js worker via CDN (import.meta.url breaks in CRA production builds)
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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

      let ticking = false;
      const handleScroll = () => {
         if (ticking) return;
         ticking = true;

         requestAnimationFrame(() => {
            const wrapper = document.getElementById('wrapper');
            if (!wrapper) {
               ticking = false;
               return;
            }

            const scrollY = wrapper.scrollTop;
            const skewedRect = document.getElementById('SkewedRect');
            const circle1 = document.getElementById('Circle1');
            const circle2 = document.getElementById('Circle2');
            const circle3 = document.getElementById('Circle3');
            const triangle = document.getElementById('Triangle');

            if (skewedRect) skewedRect.style.transform = `translateY(${scrollY * 0.15}px) rotate(-15deg)`;
            if (circle1) circle1.style.transform = `translateY(${scrollY * -0.15}px) rotate(45deg)`;
            if (circle2) circle2.style.transform = `translateY(${scrollY * -0.1}px) rotate(-75deg)`;
            if (circle3) circle3.style.transform = `translateY(${scrollY * -0.1}px) rotate(200deg)`;
            if (triangle) triangle.style.transform = `translateY(${scrollY * 0.2}px) rotate(115deg)`;

            ticking = false;
         });
      };

      const wrapper = document.getElementById('wrapper');
      if (wrapper) {
         wrapper.addEventListener('scroll', handleScroll);
      }

      return () => {
         resizeObserver.disconnect();
         if (wrapper) wrapper.removeEventListener('scroll', handleScroll);
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
         <SkewedRect id="SkewedRect" />
         <Circle id="Circle1" />
         <Circle id="Circle2" />
         <Circle id="Circle3" />
         <Triangle id="Triangle" />
      </div>
   );
};

export default Resume;
