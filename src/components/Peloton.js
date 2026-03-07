import React from 'react';
import TopBanner from './TopBanner';
import '../stylesheets/App.scss';
import '../stylesheets/peloton.scss';

class Peloton extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="peloton fullScreen">
                <TopBanner bgColor="#181a1d" arrowColor="#8f8f8fff" />
                <div style={{ padding: "40px 120px" }}>
                    <h1>Peloton</h1>
                    <p>Still working on this page. Check back soon!</p>
                </div>
            </div>
        );
    }
}

export default Peloton;
