<h1 align="center">react-rolling-number</h1>

<h3 align="center">
  A smooth, customizable rolling number animation component for React.
</h3>

<div align="center">
  <img src="https://github.com/user-attachments/assets/e44f5030-c6a2-4513-88dc-907320c02b26" alt="demo gif" width="700" />
</div>

<br />

<p align="center"><b>English</b> | <a href="https://github.com/fecapark/react-rolling-number/blob/main/README-ko_kr.md">한국어</a></p>


<br />

## Table of Contents

1. [Why react-rolling-number?](#why-react-rolling-number)
2. [📦 Installation](#-installation)
3. [⚡️ Quick Start](#%EF%B8%8F-quick-start)
4. [⚙️ Props](#%EF%B8%8F-props)
5. [👩🏻‍⚖️ License](#%E2%80%8D%EF%B8%8F-license)

<br />

## Why react-rolling-number?

Existing number animation libraries are often difficult to customize, have limited number format coverage, or require additional code to handle runtime style changes because they accept styles as inline props.

react-rolling-number addresses these inconveniences and helps you implement elegant animations right away.

### Features

- Smooth, elegant, continuous rolling animations powered by [Motion](https://motion.dev).
- Built-in TypeScript support.
- Inherits parent font style and responds to runtime style changes.
- Support positive/negative signs.
- Support various number formats (decimals, scientific notation, `toFixed`, etc.).
- Automatic & Animated thousands separators. Can be toggled off if needed.

### For Animation

- Adjustable rolling and width expansion duration.
- Custom easing with `cubic-bezier` support.
- Animate only changed digits or all digits at once.
- Customizable rolling direction, width expansion direction when digits change.
- Stagger animation for sequential digit/comma/dot transitions.

<br />

Try it out on the [demo site](https://rolling.fecapark.com).

<br />

## 📦 Installation

```bash
# npm
npm install react-rolling-number

# yarn
yarn add react-rolling-number

# pnpm
pnpm add react-rolling-number
```

> [!IMPORTANT]
> This library requires **React** as a peer dependency.

<br />

## ⚡️ Quick Start

### React

```tsx
import { Roller } from 'react-rolling-number';

function Component() {
  return <Roller value={123456} />
}
```

### Next.js (13+)

```tsx
"use client"

import { Roller } from 'react-rolling-number';

function Component() {
  return <Roller value={123456} />
}
```

<br />

## ⚙️ Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number \| string` | *required* | The number to display |
| `commaize` | `boolean` | `true` | Add thousands separators |
| `showPlusSign` | `boolean` | `false` | Show `+` sign for positive numbers |
| `align` | `'left' \| 'center' \| 'right'` | `'center'` | Anchor point for width expansion |
| `prefix` | `ReactNode` | - | Content to display before the number |
| `suffix` | `ReactNode` | - | Content to display after the number |
| `animation` | `RollerAnimationType` | - | Animation configuration |

### Animation Options (`RollerAnimationType`)

| Name | Type | Default | Description |
|--------|------|---------|-------------|
| `rollWay` | `'up' \| 'down'` | `'down'` | Direction of rolling animation |
| `rollDuration` | `number` | `0.6` | Duration of roll animation (seconds) |
| `shiftDuration` | `number` | `0.45` | Duration of width shift animation (seconds) |
| `stagger` | `boolean` | `false` | Animate digits/separators/decimals sequentially |
| `animateDiff` | `boolean` | `false` | Only animate digits that changed |
| `ease` | `Easing` | `expoOut` | Cubic-bezier based easing function |

<br />

## 👩🏻‍⚖️ License

MIT © Sanghyeok Park (fecapark). For more details, see [LICENSE](https://github.com/fecapark/react-rolling-number/blob/main/LICENSE)

