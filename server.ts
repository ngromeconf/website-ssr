// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

// Polyfills required for Firebase
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xhr2');

// Faster renders in prod mode
enableProdMode();

// Export our express server
export const app = express();

const DIST_FOLDER = join(process.cwd(), 'dist');
const distFolder = join(process.cwd(), 'dist/ngrome-website-ssr/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html'))
  ? 'index.original.html'
  : 'index';

const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModule,
  })
);

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Serve static files
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', template), { req });
  // res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
});

// If we're not in the Cloud Functions environment, spin up a Node server
if (!process.env.FUNCTION_NAME) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
  });
}
