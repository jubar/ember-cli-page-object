import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

import { isOldEmber } from 'dummy/tests/helpers/is-old-ember';

import PageObject from 'dummy/tests/page-object';

const {
  clickable,
  fillable,
  hasClass,
  notHasClass,
  text
} = PageObject;

const page = PageObject.create({
  title: text('.title'),

  form: {
    scope: '.login',
    userName: fillable('#userName'),
    password: fillable('#password'),
    click: clickable('button'),
    hasError: hasClass('is-error'),
    notHasError: notHasClass('is-error')
  },

  message: text('.message')
});

moduleForComponent('user-list', 'Integration | component integration test support/login', {
  integration: true,

  beforeEach() {
    page.setContext(this);
  },

  afterEach() {
    page.removeContext();
  }
});

test('Retries login', function(assert) {
  assert.expect(6);

  let template;

  if (isOldEmber) {
    template = Ember.HTMLBars.compile('{{login-form}}');
  } else {
    template = hbs`{{login-form}}`;
  }

  page.render(template);

  assert.ok(page.form.notHasError, 'Page doesn\'t have error');
  assert.equal(page.title, 'Login page');

  page.form
    .userName('invalid')
    .password('invalid')
    .click();

  assert.ok(page.form.hasError, 'Page has error');
  assert.equal(page.message, 'Invalid user!');

  page.form
    .userName('user@example.com')
    .password('secret')
    .click();

  assert.ok(page.form.notHasError, 'Page doesn\'t have error');
  assert.equal(page.message, 'Valid user!');
});

test('Action chains act like a promise', function(assert) {
  assert.expect(1);

  let template;

  if (isOldEmber) {
    template = Ember.HTMLBars.compile('{{login-form}}');
  } else {
    template = hbs`{{login-form}}`;
  }

  page.render(template)
    .form
    .userName('invalid')
    .password('invalid')
    .click();

  assert.ok(page.form.hasError, 'Page has error');
});

