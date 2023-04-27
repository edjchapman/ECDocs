import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from "next/router";
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://edchapman.co.uk${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'EC Docs'} />
      <meta property="og:description" content={frontMatter.description || 'Ed Chapman Documentation'} />
      <meta name="description" content='Ed Chapman documentation and notes' />
      <link rel="icon" href="/images/favicon/favicon.ico" type="image/ico" />
    </>
  },
  logo: (
      <>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
              fill="currentColor"
              d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
          />
        </svg>
        <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        EC Docs
      </span>
      </>
  ),
  project: {
    link: 'https://github.com/edjchapman',
  },
  chat: {
    link: 'https://www.linkedin.com/in/edjchapman/',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
    </svg>,
  },
  docsRepositoryBase: 'https://github.com/edjchapman/documentation/tree/main/pages',
  editLink: {
    text: ''
  },
  feedback: {
    content: ''
  },
  useNextSeoProps: () => {
    const { route }  = useRouter()
    if ( route !== '/') {
      return {
        titleTemplate: 'EC Docs - %s'
      }
    }
  },

  navigation: {
    prev: true,
    next: true
  },
  footer: {
    text: <>
    <span>
      {new Date().getFullYear()} © <a href="https://edchapman.co.uk" target="_blank" rel="noreferrer">Ed Chapman</a>.
      <br/>
      <sub>
        <a href="https://nextra.site" target="_blank" rel="noreferrer">Site built with Nextra</a>
      </sub>
    </span>

    </>,
  }
}

export default config
