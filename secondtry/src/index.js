import Mirador from 'mirador/dist/es/src/index';
import textOverlayPlugin from 'mirador-textoverlay/es';
import miradorConfig from './mirador-config'; // Adjust the path if necessary

Mirador.viewer(miradorConfig, [...textOverlayPlugin]);