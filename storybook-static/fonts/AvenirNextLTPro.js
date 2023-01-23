import Light from './AvenirNextLTPro-Light/font.woff';
import Light2 from './AvenirNextLTPro-Light/font.woff2';
import LightItalic from './AvenirNextLTPro-LightIt/font.woff';
import LightItalic2 from './AvenirNextLTPro-LightIt/font.woff2';
import Regular from './AvenirNextLTPro-Regular/font.woff';
import Regular2 from './AvenirNextLTPro-Regular/font.woff2';
import Italic from './AvenirNextLTPro-It/font.woff';
import Italic2 from './AvenirNextLTPro-It/font.woff2';
import Medium from './AvenirNextLTPro-Medium/font.woff';
import Medium2 from './AvenirNextLTPro-Medium/font.woff2';
import MediumItalic from './AvenirNextLTPro-MediumIt/font.woff';
import MediumItalic2 from './AvenirNextLTPro-MediumIt/font.woff2';
import Bold from './AvenirNextLTPro-Bold/font.woff';
import Bold2 from './AvenirNextLTPro-Bold/font.woff2';
import BoldItalic from './AvenirNextLTPro-BoldIt/font.woff';
import BoldItalic2 from './AvenirNextLTPro-BoldIt/font.woff2';

/*
const AvenirNextLTPro = {
  fontFamily: 'AvenirNextLTPro',
  src: `
    url(${Regular2}) format('woff2'),
    url(${Regular}) format('woff'),
  `,
  fontWeight: 400,
  fontStyle: 'normal',
}
*/

const AvenirNextLTPro =  [
  {
    fontFamily: 'AvenirNextLTPro',
    src: `
      url(${Light2}) format('woff2'),
      url(${Light}) format('woff'),
    `,
    fontWeight: 300,
    fontStyle: 'normal',
  }, {
    fontFamily: 'AvenirNextLTPro',
    src: `
      url(${LightItalic2}) format('woff2'),
      url(${LightItalic}) format('woff'),
    `,
    fontWeight: 300,
    fontStyle: 'italic',
  }, {
    fontFamily: 'AvenirNextLTPro',
    src: `
      url(${Regular2}) format('woff2'),
      url(${Regular}) format('woff'),
    `,
    fontWeight: 400,
    fontStyle: 'normal',
  }, {
    fontFamily: 'AvenirNextLTPro',
    src: `
      url(${Italic2}) format('woff2'),
      url(${Italic}) format('woff'),
    `,
    fontWeight: 400,
    fontStyle: 'italic',
  }, {
    fontFamily: 'AvenirNextLTPro',
    src: `
      url(${Medium2}) format('woff2'),
      url(${Medium}) format('woff'),
    `,
    fontWeight: 500,
    fontStyle: 'normal',
  }, {
    fontFamily: 'AvenirNextLTPro',
    src: `
      url(${MediumItalic2}) format('woff2'),
      url(${MediumItalic}) format('woff'),
    `,
    fontWeight: 500,
    fontStyle: 'italic',
  }, {
    fontFamily: 'AvenirNextLTPro',
    src: `
      url(${Bold2}) format('woff2'),
      url(${Bold}) format('woff'),
    `,
    fontWeight: 700,
    fontStyle: 'normal',
  }, {
    fontFamily: 'AvenirNextLTPro',
    src: `
      url(${BoldItalic2}) format('woff2'),
      url(${BoldItalic}) format('woff'),
    `,
    fontWeight: 700,
    fontStyle: 'italic',
  },
];


export default AvenirNextLTPro
