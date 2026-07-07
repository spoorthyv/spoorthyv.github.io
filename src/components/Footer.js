import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

import '../stylesheets/footer.scss';

// Project subpages in homepage order (Portfolio.js). Dribbble is an external
// link with no subpage, so it's omitted — which keeps Peloton first and
// Photography last, each with a single button.
const projectNav = [
   { path: '/peloton', name: 'Peloton, Music' },
   { path: '/squid', name: 'Squid Notes' },
   { path: '/ebay', name: 'Ebay' },
   { path: '/jupyter', name: 'Project Jupyter' },
   { path: '/uber', name: 'Uber Case Study' },
   { path: '/fiveMinShower', name: '5 Min Shower' },
   { path: '/photography', name: 'Photography' },
];

class Footer extends React.Component {
   render() {
      const { pathname, theme } = this.props;

      const index = projectNav.findIndex(p => p.path === pathname);
      if (index === -1) return null;

      const prev = index > 0 ? projectNav[index - 1] : null;
      const next = index < projectNav.length - 1 ? projectNav[index + 1] : null;

      return (
         <div className={`projectFooter ${theme === 'dark' ? 'dark' : 'light'}`}>
            {prev ? (
               <Link className="footerButton previous" to={prev.path}>
                  <IconArrowLeft size={24} stroke={2} />
                  <span className="footerButtonText">
                     <span className="direction">Previous Project</span>
                     <span className="projectName">{prev.name}</span>
                  </span>
               </Link>
            ) : <span className="footerSpacer" />}

            {next ? (
               <Link className="footerButton next" to={next.path}>
                  <span className="footerButtonText">
                     <span className="direction">Next Project</span>
                     <span className="projectName">{next.name}</span>
                  </span>
                  <IconArrowRight size={24} stroke={2} />
               </Link>
            ) : <span className="footerSpacer" />}
         </div>
      );
   }
}

export default Footer;
