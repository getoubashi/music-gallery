import Header from './modules/header';
import Top from './modules/top';
import MusicSection from './modules/musicSection';
import AboutSection from './modules/aboutSection';
import LiveSection from './modules/liveSection';
import Script from './modules/script';
import '../css/style.css';
import '../css/modules/header.css';
import '../css/modules/top.css';
import '../css/modules/musicSection.css';
import '../css/modules/aboutSection.css';
import '../css/modules/liveSection.css';

const header = new Header();
header.createHeader();

const top = new Top();
top.createTop();

const musicSection = new MusicSection();
musicSection.createMusicSection();

const aboutSection = new AboutSection();
aboutSection.createAboutSection();

const liveSection = new LiveSection();
liveSection.createLiveSection();

const script = new Script();
script.setNavbarEvent();
script.onScrollChangeBackGroundImage();
script.SCWidgetController();
