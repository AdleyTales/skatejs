import '@skatejs/sk-router';
import { define } from 'skatejs';
import css, { value } from 'yocss';
// @ts-ignore
import loaderImg from '../img/loader.svg';
import { Component, style } from '../utils';

const cssHr = css({
  letterSpacing: '10px',
  margin: '50px 0',
  textAlign: 'center'
});

export const Hr = define(
  class extends Component {
    static is = 'x-hr';
    render() {
      return this.$`
      <div className="${cssHr}">
        ${style(value(cssHr))}
        &mdash;&mdash;&mdash;
      </div>
    `;
    }
  }
);

const publicUrl = 'skatejs.netlify.com';

export const Link = define(
  class extends Component {
    static is = 'x-link';
    classNames: { a: string } = { a: '' };
    css: string = '';
    href: string = '';
    render() {
      let { classNames, context, css, href } = this;
      if (href.indexOf(publicUrl) > -1) {
        href = href.split(publicUrl)[1];
      }
      return href.indexOf('://') > -1
        ? this.$`
        ${style(context.style, css)}
        <a className=${classNames.a} href="${href}"><slot></slot></a>
      `
        : this.$`
      <sk-link
        classNames="${classNames}"
        css="${context.style + css}"
        href="${href}"
      >
        <slot></slot>
      </sk-link>
    `;
    }
  }
);

const cssLoading = css({
  display: 'block',
  margin: '60px auto 0 auto',
  width: '44px'
});

export const Loading = define(
  class extends Component {
    static is = 'x-loading';
    render() {
      return this.$`
      <div className="${cssLoading}">
        ${style(value(cssLoading))}
        <img src="${loaderImg}">
      </div>
    `;
    }
  }
);

const cssNote = css({
  backgroundColor: '#DCE4CA',
  borderLeft: '3px solid #c6d3a8',
  display: 'block',
  margin: '20px 0',
  padding: '10px 15px'
});

export const Note = define(
  class extends Component {
    static is = 'x-note';
    render() {
      return this.$`
      <em className="${cssNote}">
        ${style(value(cssNote))}
        <slot></slot>
      </em>
    `;
    }
  }
);
