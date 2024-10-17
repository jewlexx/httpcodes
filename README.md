# HTTP Codes

HTTP status code helpers.

## Installation

```bash
deno add @cordor/codes

# Or

npx jsr add @cordor/codes
```

## Usage

```ts
import { HttpCode } from "@cordor/codes";

console.log(HttpCode.Ok); // 200

// Or with a constant

import { OK } from "@cordor/codes/consts";

console.log(OK); // 200
```

**Made with 💗 by Juliette Cordor**
