// Imports
import * as ort from 'onnxruntime-web';
import { Environment } from './modules/Environment';

// Exports
export * from './common';
export * from 'onnxruntime-web';
export default ort;

// Environment
export const environment: Environment = 'web';