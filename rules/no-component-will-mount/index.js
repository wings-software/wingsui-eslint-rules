/**
 * @fileoverview Error out usage of componentWillMount
 * @author Manish Kr. Shukla
 */
'use strict'

const get = require('lodash.get')

const rule = {
  meta: {
    docs: {
      description: 'Error out usage of componentWillMount',
    }
  },

  create: function(context) {
    return {
      MethodDefinition(node) {
        if (get(node, 'key.name', '') === 'componentWillMount') {
          return context.report(node, node.loc, `componentWillmount is soon to be deprecated. Please use componentDidMount instead.`)
        }

        return null
      }
    }
  }
}

module.exports = {
    'no-component-will-mount': rule
}