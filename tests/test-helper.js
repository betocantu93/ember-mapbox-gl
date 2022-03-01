import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import Application from '../app';
import config from '../config/environment';
import QUnit from 'qunit';

QUnit.config.maxDepth = 10;

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
