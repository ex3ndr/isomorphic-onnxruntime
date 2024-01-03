# ✨ Isomorphic ONNX Runtime for Web and Node

This library is a thin wrapper around the ONNX Runtime that allows you to ship almost same code for each platform. All it does is imports right version of the ONNX Runtime and exposes it to you as if it was a single library.

## Installation

> [!CAUTION]
> Tested only with `1.16.x` version of the ONNX Runtime. Other versions may not work, but library is straightforward and should work with most future versions.

```bash
yarn install isomorphic-onnxruntime onnxruntime-common onnxruntime-web onnxruntime-node
```

## Usage

Usage is straightforward. You just import the library and use it as you would use the ONNX Runtime.

```typescript
import { InferenceSession } from "isomorphic-onnxruntime"; // instead of "onnxruntime-web" or "onnxruntime-node"

// All code is the same as with original libraries

```

## License

MIT