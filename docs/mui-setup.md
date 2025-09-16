# MUI Setup

## Install
```bash
npm i @mui/material @emotion/react @emotion/styled @mui/icons-material
# or: yarn add ... / pnpm add ...
```

## Use the provider
Wrap your app at the root:
```tsx
// ...existing code...
import UIProvider from './src/ui/UIProvider';
// ...existing code...
root.render(
  <UIProvider>
    {/* ...existing app... */}
  </UIProvider>
);
// ...existing code...
```

## Optional: Roboto font
Add to your HTML head:
```html
<!-- ...existing head... -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
<!-- ...existing head... -->
```

## Verify
Render the demo component somewhere:
```tsx
// ...existing code...
import MUIButtonDemo from './src/ui/components/MUIButtonDemo';
// ...existing code...
<MUIButtonDemo />
// ...existing code...
```
