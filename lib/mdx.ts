import rehypePrettyCode from 'rehype-pretty-code'

const prettyCodeOptions = {
  theme: 'one-dark-pro',
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{type: 'text', value: ' '}]
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ['word']
  },
}

export const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      [rehypePrettyCode, prettyCodeOptions]
    ]
  }
} 