// Imports
import * as ort from 'onnxruntime-web';
import { Environment } from './modules/Environment';

// Exports
export * from './common';
export * from 'onnxruntime-web'; // Can't just use require since some bundlers (e.g. Webpack) won't load module
export default ort;

// Environment
export const environment: Environment = 'web';