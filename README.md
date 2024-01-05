# Boilerplate - React, typescript

## Directory Structure

- src
  - apis
    - mutations
    - queries
    - apiKey.ts
    - [REST apis].ts
  - components
  - pages
    - examples
    - [pages].tsx
  - recoils
    - key.ts
    - [recoilstate].ts
  - README.md

## CSS - emotion: css props

- 고려한 lib: emotion / styled component / tailwind
- emotion: css props를 채택한 이유
  - tag의 본래 명칭 대로 사용 할 수 있고, css 속성을 직접 다룰 수 있다는 점에서 emotion css props 방식을 채택.
  - 다만 디자인 시스템을 위해 다른 팀과 협업한다던가, 혹은 theme 적용이 필요한 대단위 프로젝트의 경우 tailwind를 채택할 계획.

## Async State - tanstack(구 react-query)

- 고려한 lib: tanstack / swr
- tanstack을 채택한 이유
  - swr에 비해 커스텀 할 수 있는 기능들이 많아 비동기 처리(대표적으로 캐싱 처리)에 대한 사용하면서 이해도를 높일 수 있음.
  - 오랫동안 가장 많이 사용되는 lib이기 때문에 레퍼런스가 많음.

## Global State - recoil

- 고려한 lib: redux & redux toolkit / recoil / zustand
- recoil을 채택한 이유
  - facebook팀에서 지속적인 관리.
  - react hook과 사용법이 유사해 직관적이면 간단. 적은 러닝 커브.
  - redux 대비 보일러 플레이트 코드가 적음.
    - redux toolkit으로 리듀서, 액션타입, 액션 함수 등을 한번에 선언해서 편리성이 증가하였지만, 여전히 recoil 대비 관리 포인트가 많음.
  - jotai, zustand에 비해 레퍼런스가 많음.
  - jotai, zustand에 비해 번들 사이즈가 크다는 단점이 있어, 추후 비교 학습을 통해 jotai, zustand로 변경 가능성 있음.
