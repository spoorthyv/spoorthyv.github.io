import React from 'react';

import windowChrome from '../images/peloton/prototype/windowChrome.png';
import mainTimeline from '../images/peloton/prototype/mainTimeline.png';
import panelMovements from '../images/peloton/prototype/panelMovements.png';
import panelSegments from '../images/peloton/prototype/panelSegments.png';
import panelMusic from '../images/peloton/prototype/panelMusic.png';
import panelNotes from '../images/peloton/prototype/panelNotes.png';
import panelClassInfo from '../images/peloton/prototype/panelClassInfo.png';
import panelInspector from '../images/peloton/prototype/panelInspector.png';
import panelErrors from '../images/peloton/prototype/panelErrors.png';
import iconMovements from '../images/peloton/prototype/iconMovements.svg';
import iconMovementsFilled from '../images/peloton/prototype/iconMovementsFilled.svg';
import iconSegments from '../images/peloton/prototype/iconSegments.svg';
import iconSegmentsFilled from '../images/peloton/prototype/iconSegmentsFilled.svg';
import iconMusic from '../images/peloton/prototype/iconMusic.svg';
import iconMusicFilled from '../images/peloton/prototype/iconMusicFilled.svg';
import iconNotes from '../images/peloton/prototype/iconNotes.svg';
import iconNotesFilled from '../images/peloton/prototype/iconNotesFilled.svg';
import iconClassInfo from '../images/peloton/prototype/iconClassInfo.svg';
import iconClassInfoFilled from '../images/peloton/prototype/iconClassInfoFilled.svg';
import iconInspector from '../images/peloton/prototype/iconInspector.svg';
import iconInspectorFilled from '../images/peloton/prototype/iconInspectorFilled.svg';
import iconErrors from '../images/peloton/prototype/iconErrors.svg';
import iconErrorsFilled from '../images/peloton/prototype/iconErrorsFilled.svg';

const tabs = [
    { label: 'Movements', icon: iconMovements, iconFilled: iconMovementsFilled, panel: panelMovements },
    { label: 'Segments', icon: iconSegments, iconFilled: iconSegmentsFilled, panel: panelSegments },
    { label: 'Music', icon: iconMusic, iconFilled: iconMusicFilled, panel: panelMusic },
    { label: 'Notes', icon: iconNotes, iconFilled: iconNotesFilled, panel: panelNotes },
    { label: 'Class Info', icon: iconClassInfo, iconFilled: iconClassInfoFilled, panel: panelClassInfo },
    { label: 'Inspector', icon: iconInspector, iconFilled: iconInspectorFilled, panel: panelInspector },
    { label: 'Errors', icon: iconErrors, iconFilled: iconErrorsFilled, panel: panelErrors }
];

class CrescendoPrototype extends React.Component {
    state = { selected: 0 }; // Movements tab, matching the design's default

    render() {
        // Controlled when a `selected` prop is passed, self-contained otherwise
        const selected = this.props.selected !== undefined ? this.props.selected : this.state.selected;
        const tab = tabs[selected];

        return (
            <div className="crescendoPrototype">
                <img className="windowChrome" src={windowChrome} alt="" />
                <div className="prototypeBody">
                    <img className="mainImage" src={mainTimeline} alt="Crescendo class planning timeline" />
                    <div className="clickableSidebar">
                        <div className="panelSelector">
                            {tabs.map((t, i) => (
                                <button
                                    key={t.label}
                                    className={i === selected ? 'selected' : ''}
                                    title={t.label}
                                    aria-label={t.label}
                                    onClick={() => {
                                        this.setState({ selected: i });
                                        if (this.props.onSelect) this.props.onSelect(i);
                                    }}
                                >
                                    <img src={i === selected ? t.iconFilled : t.icon} alt="" />
                                </button>
                            ))}
                        </div>
                        <img className="panelImage" src={tab.panel} alt={`Crescendo sidebar ${tab.label} panel`} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CrescendoPrototype;
