// Imports
import * as ort from 'onnxruntime-common';
import { Environment } from './modules/Environment';

// Exports
export * from './common';
export * from 'onnxruntime-common';
export default ort;

// Environment
export const environment: Environment = 'web';

// Init ONNX Runtime: this loads all required backends
require('onnxruntime-web');