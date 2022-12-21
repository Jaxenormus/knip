import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import * as mocha from '../../src/plugins/mocha/index.js';
import { getManifest } from '../helpers';

const cwd = path.resolve('test/fixtures/plugins/mocha');
const manifest = getManifest(cwd);

test('Unused dependencies in mocha configuration (.mocharc.json)', async () => {
  const configFilePath = path.join(cwd, '.mocharc.json');
  const dependencies = await mocha.findDependencies(configFilePath, { manifest });
  assert.deepEqual(dependencies, ['ts-node']);
});

test('Unused dependencies in mocha configuration (package.json)', async () => {
  const configFilePath = path.join(cwd, 'package.json');
  const dependencies = await mocha.findDependencies(configFilePath, { manifest });
  assert.deepEqual(dependencies, ['ts-node']);
});

test('Unused dependencies in mocha configuration (.mocharc.yml)', async () => {
  const configFilePath = path.join(cwd, '.mocharc.yml');
  const dependencies = await mocha.findDependencies(configFilePath, { manifest });
  assert.deepEqual(dependencies, ['ts-node']);
});
