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
  - README.md

## CSS - emotion: css props

- 고려한 lib: emotion / styled component / tailwind
- emotion: css props를 채택한 이유
  - tag의 본래 명칭 대로 사용 할 수 있고, css 속성을 직접 다룰 수 있다는 점에서 emotion css props 방식을 채택.
  - 다만 디자인 시스템을 위해 다른 팀과 협업한다던가, 혹은 theme 적용이 필요한 대단위 프로젝트의 경우 tailwind를 채택할 계획.

## Async state - tanstack(구 react-query)

- 고려한 lib: tanstack / swr
- tanstack을 채택한 이유
  - swr에 비해 커스텀 할 수 있는 기능들이 많아 비동기 처리(대표적으로 캐싱 처리)에 대한 사용하면서 이해도를 높일 수 있음.
  - 오랫동안 가장 많이 사용되는 lib이기 때문에 레퍼런스가 많음.
