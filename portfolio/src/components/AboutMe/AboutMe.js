import React from 'react';

import './AboutMe.modules.scss';
const AboutMe = () => {
    return ( 
        <section className="aboutme">
            <div className="aboutme__container">
                <div className="aboutme__text">
                    <h3 className="aboutme__heading">Software created with passion</h3>
                    <p className="aboutme__paragraph">test</p>
                </div>
                <div className="dais">
                    <div className="dais__slot">
                        <h5 className="dais__label">Backend</h5>
                        <div className="dais__silver"></div>
                    </div>
                    <div className="dais__slot">
                    <h5 className="dais__label">Frontend</h5>
                        <div className="dais__gold"></div>
                    </div>
                    <div className="dais__slot">
                        <div className="dais__bronze">UI/UX</div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AboutMe;