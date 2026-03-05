import {defineConfig} from 'vitepress'
import {rustSidebar} from "./sidebars/rust-sidebar";
import container from 'markdown-it-container'
import rubyPlugin from "./md/md-it-ruby";
import mathjax3 from 'markdown-it-mathjax3';
import {transformerMetaWordHighlight, transformerRenderIndentGuides} from "@shikijs/transformers";
import footnote from 'markdown-it-footnote';
import mark from 'markdown-it-mark'
import {todaySidebar} from "./sidebars/today-sidebar";
import {base as kotlinBase, kotlinSidebar} from "./sidebars/kotlin-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Saviya",
  description: "A VitePress Site",
  lastUpdated: true,

  markdown: {
    config: (md) => {
      md.use(mathjax3);
      md.use(footnote);
      md.use(rubyPlugin);
      md.use(mark);

      md.renderer.rules.mark_open = () => '<Spoiler>'
      md.renderer.rules.mark_close = () => '</Spoiler>'

      md.use(container, 'blockquote', {
        render: (tokens, idx) => {
          const m = tokens[idx].info.trim().match(/^blockquote\s*(.*)$/)
          if (tokens[idx].nesting === 1) {
            const title = m && m[1] ? md.utils.escapeHtml(m[1]) : ''
            return `<blockquote class="custom-blockquote">${title ? `<strong>${title}</strong><br>` : ''}\n`
          } else {
            return '</blockquote>\n'
          }
        }
      });
    },
    lineNumbers: true,
    codeTransformers: [
      transformerMetaWordHighlight(),
      transformerRenderIndentGuides()
    ]
  },

  themeConfig: {
    footer: {
      copyright: 'Copyright © 2026 Saviya@overl0ad1ng'
    },

    lastUpdatedText: "",

    outline: {
      level: [2, 3, 4, 5],
    },

    nav: [
      {
        text: "主页",
        link: "/"
      },
      {
        text: "后端",
        items: [
          {text: 'Rust', link: '/docs/backend/rust/primary/'},
          {text: 'Kotlin', link: '/docs/backend/kotlin/primary/'},
          {text: 'C++', link: '/docs/backend/cpp/primary/'},
          {text: 'Java', link: '/docs/backend/java/primary/'},
          {text: 'C#', link: '/docs/backend/csharp/primary/'},
        ]
      },
      {
        text: "前端",
        items: [
          {text: 'Basic', link: '/docs/frontend/basic/primary/'},
          {text: 'Vue', link: '/docs/frontend/vue/primary/'},
          {text: 'React', link: '/docs/frontend/react/primary/'},
        ]
      },
      {
        text: "安卓",
        link: "/docs/android"
      },
      {
        text: "娱乐",
        items: [
          {text: '开发我的世界模组', link: '/docs/funny/minecraft-mod/'},
        ]
      },
      {
        text: "随笔",
        items: [
          {text: '你真的弄懂二进制了吗？', link: '/docs/essay/binary/'},
        ]
      },
      {
        text: "我的项目",
        items: [
          {text: 'ToDay 开发中', link: '/docs/project/today/'},
        ]
      },
    ],

    sidebar: {
      '/docs/backend/rust/': rustSidebar,
      '/docs/project/today/': todaySidebar,
      [kotlinBase]: kotlinSidebar,
    }
  }
})
