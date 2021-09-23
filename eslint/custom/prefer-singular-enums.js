module.exports = {
  meta: {
    docs: {
      description: 'Prefer singular TypeScript enums.',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: null
  },
  create (context) {
    return {
      TSEnumDeclaration (node) {
        const {
          id: { name }
        } = node

        if (!name.endsWith('s')) {
          return
        }

        context.report({
          node,
          message: 'Enum \'{{name}}\' should be singular.',
          data: { name }
        })
      }
    }
  }
}
