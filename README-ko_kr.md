<h1 align="center">react-rolling-number</h1>

<h3 align="center">
  부드럽고 커스터마이징 가능한 React 숫자 애니메이션 컴포넌트
</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/react-rolling-number" rel="noopener noreferrer nofollow" ><img src="https://img.shields.io/npm/v/react-rolling-number?color=0368FF&label=version" alt="npm version"></a>
  <img alt="NPM License" src="https://img.shields.io/npm/l/react-rolling-number?color=FF2B6E">
</p>


<div align="center">
  <img src="https://github.com/user-attachments/assets/e44f5030-c6a2-4513-88dc-907320c02b26" alt="demo gif" width="700" />
</div>

<br />

<p align="center"><a href="https://github.com/fecapark/react-rolling-number/blob/main/README.md">English</a> | <b>한국어</b></p>

<br />

## Table of Contents

1. [왜 react-rolling-number 인가요?](#왜-react-rolling-number-인가요)
2. [📦 설치](#-설치)
3. [⚡️ 빠른 시작](#%EF%B8%8F-빠른-시작)
4. [⚙️ 파라미터](#%EF%B8%8F-파라미터)
5. [👩🏻‍⚖️ 라이선스](#%E2%80%8D%EF%B8%8F-라이선스)

<br />

## 왜 react-rolling-number 인가요?

기존 숫자 애니메이션 라이브러리들은 커스텀하기 어렵거나, 숫자 포맷의 커버리지가 낮거나, 스타일을 인라인 props로 받아 런타임 대응을 위해 추가적인 코드를 작성해야하는 등 개발에서의 불편함이 있었어요.

react-rolling-number는 이러한 불편함을 개선하고 유려한 애니메이션을 바로 구현할 수 있도록 도와줘요.

### 기본 기능

- [Motion](https://motion.dev) 기반의 부드럽고 유려한 숫자 애니메이션을 제공해요.
- TypeScript 타입이 내장되어 있어요.
- 부모 요소의 폰트 스타일을 상속받을 수 있고, 런타임 스타일 변경에도 대응돼요.
- 양수/음수 부호를 지원해요.
- 소수점, 과학적 표기법, `toFixed` 등 다양한 숫자 포맷을 지원해요.
- 천 단위 구분자를 자동으로 추가하고 애니메이션해요. 필요하다면 가릴 수도 있어요.

### 애니메이션 기능

- 숫자 애니메이션과 너비 변화 애니메이션의 지속 시간을 각각 조절할 수 있어요.
- `cubic-bezier` 기반의 전환 효과를 원하는대로 적용할 수 있어요.
- 변경된 숫자만 애니메이션하거나, 전체 숫자를 한 번에 애니메이션할 수 있어요.
- 숫자가 구르는 방향과 너비 확장 방향을 커스터마이징할 수 있어요.
- 숫자, 콤마, 소수점이 순차적으로 전환되는 stagger 애니메이션을 지원해요.

<br />

[데모 사이트](https://rolling.fecapark.com)에서 직접 사용해 보세요.

<br />

## 📦 설치

```bash
# npm
npm install react-rolling-number

# yarn
yarn add react-rolling-number

# pnpm
pnpm add react-rolling-number
```

> [!IMPORTANT]
> 이 라이브러리는 **React**를 peer dependency로 필요로 해요.

<br />

## ⚡️ 빠른 시작

### React

```tsx
import { Roller } from 'react-rolling-number';

function Component() {
  return <Roller value={123456} />;
}
```

### Next.js (13+)

```tsx
'use client';

import { Roller } from 'react-rolling-number';

function Component() {
  return <Roller value={123456} />;
}
```

<br />

## ⚙️ 파라미터

| 이름           | 타입                            | 기본값     | 설명                               |
| -------------- | ------------------------------- | ---------- | ---------------------------------- |
| `value`        | `number \| string`              | _필수_     | 표시할 숫자예요                    |
| `commaize`     | `boolean`                       | `true`     | 천 단위 구분자를 추가해요          |
| `showPlusSign` | `boolean`                       | `false`    | 양수에 `+` 부호를 표시해요         |
| `align`        | `'left' \| 'center' \| 'right'` | `'center'` | 너비가 확장될 때의 기준점을 정해요 |
| `prefix`       | `ReactNode`                     | -          | 숫자 앞에 표시할 콘텐츠예요        |
| `suffix`       | `ReactNode`                     | -          | 숫자 뒤에 표시할 콘텐츠예요        |
| `animation`    | `RollerAnimationType`           | -          | 애니메이션과 관련된 설정이에요     |

### 애니메이션 파라미터 (`RollerAnimationType`)

| 이름            | 타입             | 기본값    | 설명                                                          |
| --------------- | ---------------- | --------- | ------------------------------------------------------------- |
| `rollWay`       | `'up' \| 'down'` | `'down'`  | 숫자가 구르는 방향이에요                                      |
| `rollDuration`  | `number`         | `0.6`     | 숫자 애니메이션의 지속 시간(초)이에요                         |
| `shiftDuration` | `number`         | `0.45`    | 너비 변화 애니메이션의 지속 시간(초)이에요                    |
| `stagger`       | `boolean`        | `false`   | 각 숫자/구분자/소수점 애니메이션이 순차적으로 실행되도록 해요 |
| `animateDiff`   | `boolean`        | `false`   | 변경된 숫자만 애니메이션해요                                  |
| `ease`          | `Easing`         | `expoOut` | cubic-bezier 기반의 전환 효과를 지정할 수 있어요              |

<br />

## 👩🏻‍⚖️ 라이선스

MIT © Sanghyeok Park (fecapark). 자세한 내용은 [LICENSE](https://github.com/fecapark/react-rolling-number/blob/main/LICENSE)를 참고하세요.
