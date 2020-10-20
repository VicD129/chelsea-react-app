import React from 'react';
import GitHubLogo from './github-brands.svg';

let footerLink = {
    color: '#fff'
};

function Footer() {
  return (
    <React.Fragment>
        <footer className="fixed-bottom bg-brand-color text-white text-center">
            <p className="font-weight-bold mb-0 py-3"><span className="text-white-50">by</span> <a target="_blank" rel="noopener noreferrer" href="https://viktordemydov.com" style={footerLink}>viktordemydov.com</a> <span className="text-white-50">on</span> <a target="_blank" rel="noopener noreferrer" href="https://github.com/VicD129/chelsea-react-app" style={footerLink}><img src={GitHubLogo} alt="GitHub Logo" height="24px" className="ml-1" /></a></p>
        </footer>
    </React.Fragment>
  );
}

export default Footer;
