export default {
  logo: <span>FE-interview-questions</span>,
  project: {
    link: 'https://github.com/FE-interview-questions'
  },
  docsRepositoryBase: 'https://github.com/FE-interview-questions',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – FE-interview-questions'
    }
  },
  footer: {
    text: `MIT ${new Date().getFullYear()} © Jaewi Myong.`
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <div style={{ background: 'cyan' }}>{title}</div>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  }
}
