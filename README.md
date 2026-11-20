# Project structure
# typed-async-utility/
│
├── src/
│   ├── types.ts
│   ├── api.ts
│   └── index.ts
│
└── tsconfig.json
# Install
npm init -y

npm install -D  @types/node

npx tsc --init
# update tsconfig.json as
# {
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "types": ["node"]
  },
  "include": ["src"]
}
# update package.json :
# {
  "type": "module",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
# To execute :
npm run build
npm start
