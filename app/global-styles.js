import { injectGlobal } from 'styled-components';
import Teen from './assets/fonts/teen.ttf';
import TeenBold from './assets/fonts/teen_bold.ttf';
import TeenItalic from './assets/fonts/teen_italic.ttf';
import TeenBoldItalic from './assets/fonts/teen_bolditalic.ttf';
import TeenLight from './assets/fonts/teen_light.ttf';
import TeenLightItalic from './assets/fonts/teen_lightitalic.ttf';

import './assets/css/font-awesome.min.css';
import Defaults from 'components/defaults';

/* eslint no-unused-expressions: 0 */
injectGlobal`
    @font-face {
        font-family: 'Teen';
        src: url(${ Teen }) format('truetype');
    }
    @font-face {
        font-family: 'TeenBold';
        src: url(${ TeenBold }) format('truetype');
    }
    @font-face {
        font-family: 'TeenItalic';
        src: url(${ TeenItalic }) format('truetype');
    }
    @font-face {
        font-family: 'TeenBoldItalic';
        src: url(${ TeenBoldItalic }) format('truetype');
    }
    @font-face {
        font-family: 'TeenLight';
        src: url(${ TeenLight }) format('truetype');
    }
    @font-face {
        font-family: 'TeenLightItalic';
        src: url(${ TeenLightItalic }) format('truetype');
    }
    html, body {
        height: 100%;
        width: 100%;
    }
    body {
        font-family: 'Teen', sans-serif;
        color: ${ Defaults.colors.black };
    }
    body.fontLoaded {
        font-family: 'teen', sans-serif;
        color: ${ Defaults.colors.black };
    }
    #app {
        background-color: ${ Defaults.colors.white };
        min-height: 100%;
        min-width: 100%;
    } 
`;
