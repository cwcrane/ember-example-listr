import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('listr-list/listr-item', 'Integration | Component | listr list/listr item', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{listr-list/listr-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#listr-list/listr-item}}
      template block text
    {{/listr-list/listr-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
