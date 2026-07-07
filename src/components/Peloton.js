import React from 'react';
import { Link } from 'react-router-dom';

import CrescendoPrototype from './CrescendoPrototype';
import {
    IconArrowLeft,
    IconBriefcase2,
    IconBrandApple,
    IconMapPin,
    IconCalendarEvent,
    IconUsers,
    IconHandClick
} from '@tabler/icons-react';

import crescLogo from '../images/peloton/crescLogo.png';
import maestroLogo from '../images/peloton/maestroLogo.png';
import crescendoWordmark from '../images/peloton/crescendoWordmark.svg';
import maestroWordmark from '../images/peloton/maestroWordmark.svg';
import maestroLockup from '../images/peloton/maestroLockup.svg';
import macbookMockup from '../images/peloton/macbookMockup.jpg';
import shadowingSession from '../images/peloton/shadowingSession.png';
import ds1 from '../images/peloton/ds1.png';
import ds2 from '../images/peloton/ds2.png';
import ds3 from '../images/peloton/ds3.png';
import ds4 from '../images/peloton/ds4.png';
import ds5 from '../images/peloton/ds5.png';
import ds6 from '../images/peloton/ds6.png';
import ds7 from '../images/peloton/ds7.png';
import ds8 from '../images/peloton/ds8.png';
import ds9 from '../images/peloton/ds9.png';
import classesDashboard from '../images/peloton/classesDashboard.png';
import dualPlanning from '../images/peloton/dualPlanning.png';
import listView from '../images/peloton/listView.png';
import musicCuration from '../images/peloton/musicCuration.png';
import playlistView from '../images/peloton/playlistView.png';
import maestroPlayer from '../images/peloton/maestroPlayer.png';
import maestroPopout from '../images/peloton/maestroPopout.png';
import bannerIcons from '../images/peloton/bannerIcons.png';

import '../stylesheets/App.scss';
import '../stylesheets/peloton.scss';

class SegmentedNav extends React.Component {
    state = { selected: 0 };

    render() {
        // Controlled when a `selected` prop is passed, self-contained otherwise
        const selected = this.props.selected !== undefined ? this.props.selected : this.state.selected;

        return (
            <div className="segmentedNav">
                {this.props.items.map((item, i) => (
                    <button
                        key={item}
                        className={i === selected ? 'selected' : ''}
                        onClick={() => {
                            this.setState({ selected: i });
                            if (this.props.onSelect) this.props.onSelect(i);
                        }}
                    >
                        {item}
                    </button>
                ))}
            </div>
        );
    }
}

class BigPicker extends React.Component {
    state = { selected: 0 };

    render() {
        // Controlled when a `selected` prop is passed, self-contained otherwise
        const selected = this.props.selected !== undefined ? this.props.selected : this.state.selected;

        return (
            <div className="bigPicker">
                {this.props.items.map((item, i) => (
                    <button
                        key={item.title}
                        className={i === selected ? 'selected' : ''}
                        onClick={() => {
                            this.setState({ selected: i });
                            if (this.props.onSelect) this.props.onSelect(i);
                        }}
                    >
                        <span className="pickerTitle">{item.title}</span>
                        <span className="pickerDesc">{item.desc}</span>
                    </button>
                ))}
            </div>
        );
    }
}

const painPoints = [
    <>“I never use the mobile app. I plan 99% of my class <b>at home</b>”</>,
    <>“While planning I need <b>Excel</b>, <b>Spotify</b>, and <b>Notes</b> open too”</>,
    <>“I spend 1/4th of my time <b>fixing mistakes</b>. The rules keep changing”</>,
    <>“I always need help finding what <b>songs we have rights to</b>”</>,
    <>“I listen to songs twice. Once for fun and once to <b>find the beat drop</b>”</>,
    <>“I always <b>miss emails</b> from the production team with corrections”</>,
    <>“I use my favorite songs in <b>almost half my classes</b> to save time”</>
];

const planningViews = [
    {
        title: 'Timeline',
        desc: 'Highly scannable + natural time-based alignment',
        img: dualPlanning,
        alt: 'Crescendo class planning timeline view'
    },
    {
        title: 'List View',
        desc: 'Information dense & efficient',
        img: listView,
        alt: 'Crescendo class planning list view'
    }
];

// Descriptions for each tab in the clickable sidebar prototype, indexed to
// match the tab order in CrescendoPrototype
const sidebarTabs = [
    { title: 'Movements', desc: 'Find movements to add to your class. Only shows moves that can be used in this class.' },
    { title: 'Segments', desc: 'Moves are organized into groups called segments (eg “Warmup”, “Running”, “Cooldown”, etc.). Provides an overview of the class.' },
    { title: 'Music', desc: 'Find music to add to your class. Only shows music that can be used for this class' },
    { title: 'Notes', desc: 'Instructors rely on notes to know what to say during a class. We built robust notes that can pull from class data with rich text formatting.' },
    { title: 'Class Info', desc: 'Class metadata. Clean, organized, and focused.' },
    { title: 'Inspector', desc: 'Automatically shows when you click on a specific move. Shows every editing option without cluttering the main view.' },
    { title: 'Errors', desc: 'Instead of receiving an email from a employee with corrections, we run checks and allow instructors to fix their class quickly.' }
];

const curationViews = [
    {
        label: 'Homepage',
        img: musicCuration,
        alt: 'Crescendo music curation homepage',
        desc: 'Fully featured music software to manage the largest of music libraries.'
    },
    {
        label: 'Playlist View',
        img: playlistView,
        alt: 'Crescendo playlist view',
        desc: 'Listen, add music, and share your playlist from one view'
    }
];

const maestroViews = [
    {
        label: 'Homepage',
        img: maestroPlayer,
        alt: 'Maestro in-studio music player',
        desc: 'Our in-studio music player. Built off the same architecture as Crescendo but with offline playback and bulletproof reliability'
    },
    {
        label: 'Pop out player',
        img: maestroPopout,
        alt: 'Maestro pop out player',
        desc: 'Played on a TV 32 feet from the instructor. Optimized for visibility.'
    }
];

class Peloton extends React.Component {
    state = { planningView: 0, sidebarTab: 0, curationView: 0, maestroView: 0 };

    heroRef = React.createRef();

    componentWillUnmount() {
    }

    // Drives the logo glow parallax — writes CSS vars directly so mouse
    // movement doesn't trigger React re-renders
    handleHeroMouseMove = (e) => {
        const hero = this.heroRef.current;
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        // Increased multiplier from 56 to 400 so the glow movement is actually perceptible
        hero.style.setProperty('--glow-x', `${(nx * 175).toFixed(1)}px`);
        hero.style.setProperty('--glow-y', `${(ny * 175).toFixed(1)}px`);
    };

    handleHeroMouseLeave = () => {
        const hero = this.heroRef.current;
        if (!hero) return;
        hero.style.setProperty('--glow-x', '0px');
        hero.style.setProperty('--glow-y', '0px');
    };

    render() {
        const planningView = planningViews[this.state.planningView];
        const sidebarTab = sidebarTabs[this.state.sidebarTab];
        const curationView = curationViews[this.state.curationView];
        const maestroView = maestroViews[this.state.maestroView];

        return (
            <div className="peloton">
                <div
                    className="hero"
                    ref={this.heroRef}
                    onMouseMove={this.handleHeroMouseMove}
                    onMouseLeave={this.handleHeroMouseLeave}
                >
                    <div className="staticNoise" style={{ backgroundImage: `url(${bannerIcons})` }} />
                    <Link className="backArrow" to="/">
                        <IconArrowLeft color="rgba(255, 255, 255, 0.8)" size={44} stroke={2} />
                    </Link>
                    <div className="logos blurredLogos" aria-hidden="true">
                        <div className="logoWrapper">
                            <img className="logoIcon" src={crescLogo} alt="" />
                            <img className="wordmark" src={crescendoWordmark} alt="" />
                        </div>
                        <div className="logoWrapper">
                            <img className="logoIcon" src={maestroLogo} alt="" />
                            <img className="wordmark maestroWordmark" src={maestroWordmark} alt="" />
                        </div>
                    </div>
                    <div className="logos">
                        <div className="logoWrapper crescendoGlow">
                            <img className="logoIcon" src={crescLogo} alt="Crescendo logo" />
                            <img className="wordmark" src={crescendoWordmark} alt="Crescendo" />
                        </div>
                        <div className="logoWrapper maestroGlow">
                            <img className="logoIcon" src={maestroLogo} alt="Maestro logo" />
                            <img className="wordmark maestroWordmark" src={maestroWordmark} alt="Maestro" />
                        </div>
                    </div>
                    <div className="summary">
                        <div className="summaryText">
                            <p>1,000+ Peloton classes a month start somewhere off-camera — an instructor choosing the right songs, mapping moves to the beat, and planning a month of classes before a single one is filmed.</p>
                            <p className="apps">
                                <span className="crescendo">Crescendo</span> is where classes are built.<br />
                                <span className="maestro">Maestro</span> is where they’re filmed.
                            </p>
                            <p>I led a complete redesign of both applications with the help of one other designer.</p>
                        </div>
                        <div className="pills">
                            <div className="pill"><IconBriefcase2 size={16} /><span>Product Designer III</span></div>
                            <div className="pill"><IconBrandApple size={16} /><span>Mac OS</span></div>
                            <div className="pill"><IconMapPin size={16} /><span>Atlanta / Remote</span></div>
                            <div className="pill"><IconCalendarEvent size={16} /><span>2023-2026</span></div>
                            <div className="pill"><IconUsers size={16} /><span>2 Designers, 1 PM, 5 Devs</span></div>
                        </div>
                    </div>
                </div>

                <img className="macbookMockup" src={macbookMockup} alt="Crescendo running on a MacBook Pro" />

                <div className="section research">
                    <div className="sectionInner row">
                        <div className="sideText">
                            <h3>Constant Communication</h3>
                            <p>We ran one hour shadowing sessions with Peloton’s fitness instructors on an ongoing basis with 3 goals:</p>
                            <ol>
                                <li>Get instructors invested in improving the software they use everyday</li>
                                <li>Understand every users workflow from the normal to niche</li>
                                <li>Learn what makes a well-crafted class feel special</li>
                            </ol>
                        </div>
                        <img className="screenshot rounded" src={shadowingSession} alt="Virtual shadowing session with Peloton instructors" />
                    </div>
                </div>

                <div className="painCarousel">
                    {painPoints.map((quote, i) => (
                        <div className="painCard" key={i}>
                            <p>{quote}</p>
                        </div>
                    ))}
                </div>

                <div className="section alt designSystem">
                    <div className="sectionInner">
                        <p className="bigStatement">
                            We built our custom design system to be <i>lightweight</i> enough
                            to be maintained by 1 designer, <i>powerful</i> enough to drive
                            consistency across 2 applications, and <i>smart</i> enough to
                            speed up development
                        </p>
                    </div>
                    <div className="bentoScroll">
                        <div className="bento">
                            <div className="bentoCol tall">
                                <div className="bentoCard"><img src={ds1} alt="Design system sidebar component" /></div>
                            </div>
                            <div className="bentoCol middle">
                                <div className="bentoRow">
                                    <div className="bentoCard"><img src={ds2} alt="Design system color tokens" /></div>
                                    <div className="bentoCard"><img src={ds3} alt="Design system type scale" /></div>
                                    <div className="bentoCard"><img src={ds4} alt="Design system buttons" /></div>
                                </div>
                                <div className="bentoRow">
                                    <div className="bentoCard grow"><img src={ds5} alt="Design system table components" /></div>
                                    <div className="bentoCard"><img src={ds6} alt="Design system pickers" /></div>
                                </div>
                                <div className="bentoRow">
                                    <div className="bentoCard grow toolbar"><img src={ds7} alt="Design system toolbar" /></div>
                                </div>
                            </div>
                            <div className="bentoCol right">
                                <div className="bentoCard"><img src={ds8} alt="Design system form controls" /></div>
                                <div className="bentoCard"><img src={ds9} alt="Design system cards" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section dashboard">
                    <div className="sectionInner wide">
                        <div className="sectionTitleGroup">
                            <h3>Classes Dashboard</h3>
                            <p>The most important classes call for your attention. Find the rest with filters.</p>
                        </div>
                        <img className="screenshot framed" src={classesDashboard} alt="Crescendo classes dashboard" />
                    </div>
                </div>

                <div className="section alt dualPlanning">
                    <div className="sectionInner row wide">
                        <div className="sideText narrow">
                            <h3>Dual Class Planning UI</h3>
                            <BigPicker
                                items={planningViews}
                                selected={this.state.planningView}
                                onSelect={i => this.setState({ planningView: i })}
                            />
                        </div>
                        <img className="screenshot framed" src={planningView.img} alt={planningView.alt} />
                    </div>
                </div>

                <div className="section sidebarSection">
                    <div className="sectionInner row">
                        <div className="prototypeWrapper">
                            <CrescendoPrototype
                                selected={this.state.sidebarTab}
                                onSelect={i => this.setState({ sidebarTab: i })}
                            />
                        </div>
                        <div className="sidebarNotes">
                            <div className="notesBody">
                                <div className="cardGroup">
                                    <div className="pickerCard">
                                        <h4>{sidebarTab.title}</h4>
                                        <p>{sidebarTab.desc}</p>
                                    </div>
                                    <div className="hintPill">
                                        <IconHandClick size={20} />
                                        <span>Try Clicking the Tabs!</span>
                                    </div>
                                </div>
                                <div className="sectionTitleGroup left">
                                    <h3>Multi-Use Sidebar</h3>
                                    <p>Keep context of your class no matter what you’re doing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section alt musicCuration">
                    <div className="sectionInner wide">
                        <h3>Music Curation</h3>
                        <div className="mediaGroup">
                            <SegmentedNav
                                items={curationViews.map(view => view.label)}
                                selected={this.state.curationView}
                                onSelect={i => this.setState({ curationView: i })}
                            />
                            <p>{curationView.desc}</p>
                            <img className="screenshot framed" src={curationView.img} alt={curationView.alt} />
                        </div>
                    </div>
                </div>

                <div className="section maestroSection">
                    <div className="sectionInner wide">
                        <img className="maestroLockup" src={maestroLockup} alt="Maestro" />
                        <div className="mediaGroup">
                            <SegmentedNav
                                items={maestroViews.map(view => view.label)}
                                selected={this.state.maestroView}
                                onSelect={i => this.setState({ maestroView: i })}
                            />
                            <p>{maestroView.desc}</p>
                            <img className="screenshot framed" src={maestroView.img} alt={maestroView.alt} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Peloton;
