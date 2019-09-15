/**
 * @fileoverview Error out statements where await is used before setState
 * @author Manish Kr. Shukla
 */
'use strict'

const get = require('lodash.get')

const rule = {
  meta: {
    docs: {
      description: 'Error out statements where await is used before setState',
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    return {
      AwaitExpression(node) {
        if (
          //   get(node, 'argument.callee.object.type', '') === 'ThisExpression' && // Skipping this check as the this reference can be stored in a variable as well (highly unlikely)
          get(node, 'argument.callee.property.name') === 'setState'
        ) {
          return context.report(node, node.loc, `Don't use await before this.setState`)
        }

        return null
      }
    }
  }
}

module.exports = {
    'no-await-before-setstate': rule
}