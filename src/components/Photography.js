import React from 'react';

import Eagle from '../images/photography/IMGP6915-1405412511-O.jpg';
import Kina from '../images/photography/kina.jpg';
import BigSurWaterfall from '../images/photography/IMGP7651.jpg';
import BigSurBridge from '../images/photography/IMGP7718.jpg';
import Cereal from '../images/photography/Copy of IMGP8069.jpg';
import MtDiablo from '../images/photography/Copy of MtDiabloHDR2.jpg';

import '../stylesheets/photography.scss';

const images = [Eagle, Kina, BigSurWaterfall, BigSurBridge, Cereal, MtDiablo];

class Photography extends React.Component {
   state = {
      activeImageIndex: null
   };

   componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
   }

   componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
      // Ensure we restore wrapper scroll and z-index if component unmounts while lightbox is open
      const wrapper = document.getElementById('wrapper');
      if (wrapper) {
         wrapper.style.overflowY = 'auto';
         wrapper.style.zIndex = '';
      }
   }

   touchStartX = 0;
   touchEndX = 0;
   isSwiping = false;
   imageRef = React.createRef();

   handleTouchStart = (e) => {
      this.touchStartX = e.touches[0].screenX;
      this.isSwiping = true;
      if (this.imageRef.current) {
         this.imageRef.current.style.transition = 'none';
      }
   }

   handleTouchMove = (e) => {
      if (!this.isSwiping || !this.imageRef.current) return;
      const currentX = e.touches[0].screenX;
      const deltaX = currentX - this.touchStartX;
      
      // Translate the image in real time
      this.imageRef.current.style.transform = `translateX(${deltaX}px)`;
      // Fade out slightly as it gets dragged further
      const opacity = 1 - Math.min(Math.abs(deltaX) / (window.innerWidth * 0.8), 0.5);
      this.imageRef.current.style.opacity = opacity;
   }

   handleTouchEnd = (e) => {
      if (!this.isSwiping || !this.imageRef.current) return;
      this.isSwiping = false;
      this.touchEndX = e.changedTouches[0].screenX;
      
      const deltaX = this.touchEndX - this.touchStartX;
      const threshold = 70; // 70px threshold
      
      if (deltaX < -threshold) {
         // Swipe Left -> Next Image
         this.animateSlideOut(false);
      } else if (deltaX > threshold) {
         // Swipe Right -> Prev Image
         this.animateSlideOut(true);
      } else {
         // Snap back to center
         this.imageRef.current.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out';
         this.imageRef.current.style.transform = 'translateX(0)';
         this.imageRef.current.style.opacity = '1';
      }
   }

   animateSlideOut = (isPrev) => {
      const img = this.imageRef.current;
      if (!img) return;

      img.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out';
      img.style.transform = `translateX(${isPrev ? '100%' : '-100%'})`;
      img.style.opacity = '0';

      setTimeout(() => {
         // Change the state
         const nextIndex = isPrev 
            ? (this.state.activeImageIndex - 1 + images.length) % images.length
            : (this.state.activeImageIndex + 1) % images.length;
         
         this.setState({ activeImageIndex: nextIndex }, () => {
            // Position the new image on the opposite side instantly
            const newImg = this.imageRef.current;
            if (newImg) {
               newImg.style.transition = 'none';
               newImg.style.transform = `translateX(${isPrev ? '-100%' : '100%'})`;
               newImg.style.opacity = '0';
               
               // Force reflow
               // eslint-disable-next-line no-unused-expressions
               newImg.offsetHeight;
               
               // Slide and fade it into the center
               newImg.style.transition = 'transform 0.25s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.25s ease-out';
               newImg.style.transform = 'translateX(0)';
               newImg.style.opacity = '1';
            }
         });
      }, 200);
   }

   handleKeyDown = (e) => {
      if (this.state.activeImageIndex === null) return;
      if (e.key === 'Escape') {
         this.closeLightbox();
      } else if (e.key === 'ArrowRight') {
         this.navigateNext();
      } else if (e.key === 'ArrowLeft') {
         this.navigatePrev();
      }
   }

   openLightbox = (index) => {
      this.setState({ activeImageIndex: index });
      const wrapper = document.getElementById('wrapper');
      if (wrapper) {
         wrapper.style.overflowY = 'hidden';
         wrapper.style.zIndex = '99999';
      }
   }

   closeLightbox = () => {
      this.setState({ activeImageIndex: null });
      const wrapper = document.getElementById('wrapper');
      if (wrapper) {
         wrapper.style.overflowY = 'auto';
         wrapper.style.zIndex = '';
      }
   }

   navigateNext = (e) => {
      if (e) e.stopPropagation();
      this.animateSlideOut(false);
   }

   navigatePrev = (e) => {
      if (e) e.stopPropagation();
      this.animateSlideOut(true);
   }

   renderImageList() {
      return images.map((image, index) => {
         return (
            <div 
               className="grid-item" 
               key={index} 
               onClick={() => this.openLightbox(index)}
            >
               <img src={image} alt={"Photography " + (index + 1)} />
               <div className="grid-item-overlay" />
            </div>
         );
      });
   }

   renderLightbox() {
      const { activeImageIndex } = this.state;
      if (activeImageIndex === null) return null;

      const currentImage = images[activeImageIndex];

      return (
         <div 
            className="lightbox-overlay" 
            onClick={this.closeLightbox}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
         >
            <button className="lightbox-prev" onClick={this.navigatePrev} aria-label="Previous image">
               <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
               </svg>
            </button>

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
               <img 
                  ref={this.imageRef}
                  src={currentImage} 
                  alt={"Photography Fullscreen " + (activeImageIndex + 1)} 
                  className="lightbox-image" 
               />
            </div>

            <button className="lightbox-next" onClick={this.navigateNext} aria-label="Next image">
               <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
               </svg>
            </button>

            <div className="lightbox-counter">
               {activeImageIndex + 1} / {images.length}
            </div>
         </div>
      );
   }

   render() {
      return (
         <div className="photography-container">
            <div className="photography-grid">
               {this.renderImageList()}
            </div>
            {this.renderLightbox()}
         </div>
      );
   }
}

export default Photography;

