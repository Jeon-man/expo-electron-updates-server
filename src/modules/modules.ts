// @index(['./*', '!./index.ts', '!./*.(spec|test).ts', '!./app.module.ts'], f => `export { default as ${f.name}Module } from '${f.path}';`)
export { default as appModule } from './app';
export { default as configModule } from './config';
export { default as dbModule } from './db';
export { default as electronModule } from './electron';