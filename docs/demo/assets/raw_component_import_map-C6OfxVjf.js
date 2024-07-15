const n=`<script>
  export let items = [];

  function toggleAccordion(index) {
    items = items.map((item, i) => {
      if (i === index) {
        return { ...item, isOpen: !item.isOpen };
      } else {
        return { ...item, isOpen: false };
      }
    });
  }
<\/script>

<div class="accordion">
  {#each items as item, index}
    <div class="accordion_item">
      <button class="accordion_btn {item.isOpen ? 'active' : ''}" on:click={() => toggleAccordion(index)}>
        <span class="accordion_label">{item.label}</span>
        {#if item.isOpen}
          <svg class="accordion_icon" role="img" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
        {:else}
          <svg class="accordion_icon" role="img" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        {/if}
      </button>
      <div class="panel" aria-hidden={item.isOpen ? "false" : "true"} class:show={item.isOpen}>
        <div class="accordion_content">
          {@html item.content}
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .accordion {
    margin: 2rem 0;
    @media (min-width: 960px) {
      margin: 2rem 0 3rem;
    }
    @media (min-width: 1280px) {
      margin-top: 2rem 0 4rem;
    }
    .accordion_item {
      margin: 0 0 1rem;
      border: var(--b);
      border-radius: var(--b-radius);
      box-shadow: 0.25rem 0.25rem 0 -1px var(--c-text), 0.25rem 0.25rem 0 var(--c-text);
      transition: 0.4s;
      &:nth-last-of-type(even) {
        transform: rotateZ(-0.25deg);
      }
      &:nth-last-of-type(odd) {
        transform: rotateZ(0.25deg);
      }
      &:hover,
      &:focus-visible,
      &:has(.active) {
        box-shadow: 0 0 0 1px #fff, 0 0 0 #fff;
        transform: translate(0.25rem , 0.25rem );
        transform: rotateZ(0deg);
        transition: 0.4s;
      }
      .accordion_btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0.75rem 1.5rem;
        cursor: pointer;
        @media (min-width: 840px) {
          padding: 1rem 2rem;
        }
        .accordion_icon {
          transition: .4s;
          font-size: 0.875rem;
          color: var(--c-text);
          width: 1rem;
          height: 1rem;
          @media (min-width: 960px) {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
        &.active:hover .accordion_icon,
        &.active .accordion_icon {
          transition: .4s;
        }
        .accordion_label {
          display: block;
          margin-right: 1rem;
          font-size: 1rem;
          color: var(--c-text);
          font-variation-settings: 'wght' 500;
          text-align: left;
          line-height: 1.25;
          @media (min-width: 840px) {
            font-size: 1.125rem;
          }
          @media (min-width: 960px) {
            font-size: 1.25rem;
          }
          @media (min-width: 1280px) {
            font-size: 1.375rem;
          }
        }
      }
      .panel {
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition: .4s;
        &.show {
          opacity: 1;
          max-height: 1000px;
          transition: .4s;
        }
        .accordion_content {
          margin: 0.25rem 0 0 0.25rem;
          padding: 0 1.5rem 1.5rem;
          @media (min-width: 840px) {
            padding: 0 2rem 2rem;
          }
        }
      }
    }
  }
</style>`,e=`<script>
  export let quote
  export let author
<\/script>

<blockquote class="blockquote">
  <svg class="icon" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
  <p class="quote">{quote}</p>
  <span class="author">{author}</span>
</blockquote>

<style lang="scss">
  .blockquote {
    margin: 2rem 0.75rem 2rem 0;
    padding: 1.5rem;
    border: var(--b);
    border-radius: var(--b-radius);
    box-shadow: 0.75rem 0.75rem 0 -2px var(--c-website-bg), 0.75rem 0.75rem 0 var(--c-text);
    transform: rotateZ(-0.5deg);
    @media (min-width: 840px) {
      padding: 2rem;
    }
    .icon {
      margin: 0 0 0.75rem;
      font-size: 1.25rem;
      color: var(--c-primary);
      @media (min-width: 840px) {
        font-size: 1.5rem;
      }
      @media (min-width: 1280px) {
        font-size: 2rem;
      }
    }
    .quote {
      max-width: 100%;
      font-family:"Gloria Hallelujah";
      font-size: 1.125rem;
      color: var(--c-text);
      font-weight: 600;
      @media (min-width: 840px) {
        font-size: 1.25rem;
      }
      @media (min-width: 960px) {
        font-size: 1.375rem;
      }
      @media (min-width: 1280px) {
        margin: 0 0 1rem;
        font-size: 1.5rem;
      }
    }
    .author {
      display: block;
      margin: 0;
      font-size: 0.875rem;
      color: var(--c-text-light);
      font-variation-settings: 'wght' 500;
      text-align: right;
      @media (min-width: 840px) {
        font-size: 1.125rem;
      }
      @media (min-width: 1280px) {
        font-size: 1.25rem;
      }
    }
  }
</style>`,t=`<script> 
  export let title
  export let text

  export let rotation = ''
  export let columns = 1

  $: rotationClass = rotation ? \`rotate_\${rotation}-\${columns}col\` : ''

  export let bgColor = ''
<\/script>

<div class="card {bgColor} {rotationClass}">
  <h3>{title}</h3>
  <p>{text}</p>
</div>

<style lang="scss">
  .card {
    margin: 0 0.75rem 0.75rem 0;
    padding: 1.5rem;
    border: var(--b);
    border-radius: var(--b-radius);
    box-shadow: 0.75rem 0.75rem 0 -2px var(--c-website-bg), 0.75rem 0.75rem 0 var(--c-text);
    @media (min-width: 840px) {
      padding: 2rem;
    }
    &.turquoise {
      background-color: var(--c-turquoise);
    }
    &.yellow {
      background-color: var(--c-yellow);
    }
    h3 {
      margin-top: 0;
    }
    p {
      color: var(--c-text);
      &:last-of-type {
        margin: 0;
      }
    }
    &.rotate_left-2col {
      transform: rotateZ(-1deg);
      &:nth-of-type(even) {
        transform: rotateZ(1deg);
      }
    }
    &.rotate_right-2col {
      transform: rotateZ(1deg);
      &:nth-of-type(odd) {
        transform: rotateZ(-1deg);
      }
    }
    &.rotate_left-3col {
      transform: rotateZ(-1deg);
    }
    &.rotate_right-3col {
      transform: rotateZ(1deg);
    }
    @media (min-width: 600px) {
      &.rotate_left-2col {
        transform: rotateZ(-1deg);
      }
      &.rotate_left-2col {
        &:nth-of-type(even) {
          transform: rotateZ(-1deg);
        }
      }
      &.rotate_right-2col {
        transform: rotateZ(1deg);
      }
      &.rotate_right-2col {
        &:nth-of-type(odd) {
          transform: rotateZ(1deg);
        }
      }
    }
    @media (min-width: 600px) and (max-width: 959px) {
      &.rotate_left-3col,
      &.rotate_right-3col {
          transform: rotateZ(1deg);
      }
      &.rotate_left-3col ,
      &.rotate_right-3col {
        &:nth-of-type(4n+1) {
          transform: rotateZ(-1deg);
        }
        &:nth-of-type(4n+0) {
          transform: rotateZ(-1deg);
        }
      }
    }
    @media (min-width: 960px) {
      &.rotate_left-3col {
        transform: rotateZ(-1deg);
      }
      &.rotate_right-3col {
        transform: rotateZ(1deg);
      }
    }
  }
</style>`,i=`<script>
  import ChapterHead from './Chapterhead.svelte'
  import Grid from '../../layouts/Grid.svelte'
  import Card from '../card/Card.svelte'

  export let cards = []
  export let pagetitle = ''
  export let title = ''
  export let chaptertext = ''
  export let columns = 1
  export let bgColor

<\/script>

<ChapterHead
  title={title}
  pagetitle={pagetitle}
  chaptertext={chaptertext} />
<Grid columns={columns}>
  {#each cards as card, i}
    <Card
      bgColor={bgColor}
      rotation={card.rotation}
      columns={columns}
      title={card.title}
      text={card.text} />
  {/each}
</Grid>`,r=`<script>
  export let pagetitle = ''
  export let title = ''
  export let chaptertext = ''

  export let isPagetitle = false
  let haspagetitle = 'has-h1'
<\/script>

<div class="chapter {isPagetitle? haspagetitle : ''}">
  {#if pagetitle}
    <h1><span>{pagetitle}</span></h1>
  {:else}
    <h2>{title}</h2>
  {/if}
  {#if chaptertext}
    <p>{chaptertext}</p>
  {/if}
</div>

<style lang="scss">
  .chapter {
    text-align: center;
    margin: 2rem 0 1rem;
    &.has-h1 {
      margin: 0 0 1.5rem;
      @media (min-width: 840px) {
        margin: 0 0 2rem;
      }
      @media (min-width: 960px) {
        margin: 1rem 0;
      }
    }
    h1,
    h2 {
      margin: 0 0 1rem;
      padding: 0 0 0.25rem;
      font-family: 'Source Sans 3 Italic';
      font-variation-settings: 'wght' 900;
      font-size: 1.375rem;
      @media (min-width: 600px) {
        font-size: 1.75rem;
      }
      @media (min-width: 600px) {
        font-size: 2.5rem;
      }
      @media (min-width: 960px) {
        font-size: 3.25rem;
      }
      @media (min-width: 1280px) {
        font-size: 3.5rem;
      }
    }
    h1 {
      span {
        background: linear-gradient(180deg, transparent 0 55%, var(--c-headline-bg) 55% 100%);
      }
    }
    p {
      margin: 0rem;
      font-size: 0.938rem;
      color: var(--c-text);
      @media (min-width: 600px) {
        font-size: 1rem;
      }
      @media (min-width: 840px) {
        font-size: 1.125rem;
      }
      @media (min-width: 960px) {
        font-size: 1.25rem;
      }
      @media (min-width: 1280px) {
        font-size: 1.625rem;
      }
    }
  }
</style>`,o=`<script>
  export let dashedlines1 = ''
  export let dashedlines2 = ''
  export let dashedlines3 = ''
  export let dashedlines4 = ''
  export let dashedlines5 = ''
  export let dashedlines6 = ''
  export let dashedlines7 = ''

  import Dashedline1 from '../../assets/images/dashedline_1.svg?raw'
  import Dashedline2 from '../../assets/images/dashedline_2.svg?raw'
  import Dashedline3 from '../../assets/images/dashedline_3.svg?raw'
  import Dashedline4 from '../../assets/images/dashedline_4.svg?raw'
  import Dashedline5 from '../../assets/images/dashedline_5.svg?raw'
  import Dashedline6 from '../../assets/images/dashedline_6.svg?raw'
  import Dashedline7 from '../../assets/images/dashedline_7.svg?raw'
<\/script>

{#if dashedlines1}
  <div class="dashed">
    <div class="dashed_label dashed-01_label">This is Gardenjs</div>
    <div class="svg">{@html Dashedline1}</div>
  </div>
{:else}
  <div class="dashed">
    {#if dashedlines2}
      <div class="svg">{@html Dashedline2}</div>
      <div class="dashed_label dashed-02_label">ROFL</div>
    {/if}
    {#if dashedlines3}
      <div class="svg">{@html Dashedline3}</div>
      <div class="dashed_label dashed-03_label">Become a gardener</div>
    {/if}
    {#if dashedlines4}
      <div class="svg">{@html Dashedline4}</div>
      <div class="dashed_label dashed-04_label">Overview</div>
    {/if}
    {#if dashedlines5}
      <div class="svg">{@html Dashedline5}</div>
      <div class="dashed_label dashed-05_label">If you like Gardenjs</div>  
    {/if}
    {#if dashedlines6}
      <div class="svg">{@html Dashedline6}</div>
      <div class="dashed_label dashed-06_label">Do you have any questions?</div>
    {/if}
    {#if dashedlines7}
      <div class="svg">{@html Dashedline7}</div>
      <div class="dashed_label dashed-07_label">And now get to the fruit!</div>
    {/if}
  </div>
{/if}

<style lang="scss">
  .dashed {
    position: relative;
    overflow: hidden;
    height: 250px;
    width: 100%;
  }
  .dashed_label {
    font-family:"Gloria Hallelujah";
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--c-text);
    letter-spacing: 0.068rem;
    @media (min-width: 840px) {
      font-size: 0.938rem;
    }
  }
  .dashed-01_label {
    position: absolute;
    right: 2rem;
    bottom: 1.5rem;
  }
  .dashed-02_label,
  .dashed-03_label,
  .dashed-04_label,
  .dashed-05_label,
  .dashed-06_label,
  .dashed-07_label {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  .dashed-02_label {
    top: 70%;
    margin: 0 0 0 4rem;
  }
  .dashed-03_label {
    top: 72%;
    margin: 0 0 0 8rem;
  }
  .dashed-04_label {
    top: 70%;
    margin: 0 0 0 5.5rem;
  }
  .dashed-05_label {
    top: 25%;
    margin: 0 0 0 8rem;
  }
  .dashed-06_label {
    top: 71%;
    margin: 0 0 0 10rem;
  }
  .dashed-07_label {
    top: 45%;
    margin: 0 0 0 10rem;
  }
  .svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
</style>`,a=`<script>
  import { base } from '$app/paths';

  let now = new Date()

  export let hasBordertop = false
  export let isHome = false

  let bordertop = 'has-bt'

  let ifhome = 'is-home'
<\/script>

<footer class="footer {hasBordertop? bordertop : ''} {isHome? ifhome : ''}">
  <div class="footer_container">
    <div class="footer_copyright">
        <div>Gardenjs is released under the <a href="https://github.com/gardenjs/gardenjs?tab=MIT-1-ov-file" target="_blank" title="MIT License">MIT License</a>.<br><span class="copyright">&copy;</span> {now.getFullYear()} <a href="https://www.rabbitdevelopment.com">Rabbit Development</a>. All rights reserved.</div>
    </div>
    <div class="footer_nav">
      <nav>
        <ul>
          <li><a href="{base}/legalnotice">Legal Notice</a></li>
          <li><a href="{base}/privacypolicy">Privacy Policy</a></li>
        </ul>
      </nav>
    </div>
  </div>
</footer>

<style lang="scss">
  .footer {
    position: relative;
    padding: 0 1.5rem;
    overflow: hidden;
    &.has-bt {
      border-top: 1px solid var(--c-border);
    }
    .footer_container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      margin: 1rem auto;
      width: 100%;
      font-size: 0.813rem;
      color: var(--c-footer-text);
      text-align: center;
      @media (min-width: 1280px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
        text-align: left;
      }
      @media (min-width: 1280px) {
        margin: 2rem auto;
        max-width: var(--w-website-wide);
      }
      .footer_copyright {
        order: 2;
        font-size: 0.813rem;
        @media (min-width: 1280px) {
          order: 1;
          .copyright {
            font-size: 110%;
          }
        }
      }
      @media (min-width: 960px) {
        font-size: 0.938em;
      }
      a {
        display: inline-block;
        font-size: 0.813rem;
        color: var(--c-link);
        text-decoration: none;
        @media (min-width: 960px) {
          font-size: 0.938rem;
        }
        &:hover {
          color: var(--c-link-hl);
        }
      }
      .footer_nav {
        order: 1;
        @media (min-width: 1280px) {
          order: 2;
          text-align: right;
        }
        ul {
          display: flex;
          li {
            display: inline-block;
            padding: 0 0.75rem;
            margin-bottom: 0.75rem;
            @media (min-width: 840px) {
              margin: 0;
              padding: 0 0 0 2rem;
            }
          }
        }
      }
    }
    &.is-home {
      .footer_copyright,
      .footer_nav li {
        font-family:"Gloria Hallelujah";
      }
      a {
        color: var(--c-footer-link);
        &:hover {
          color: var(--c-footer-link-hl);
        }
      }
    }
  }
</style>`,s=`<script>
  import ScreenshotDarkmode from '../../assets/images/screenshot_garden-dark.png'
  import ScreenshotLightmode from '../../assets/images/screenshot_garden.png'
  import {theme} from '../../stores/theme'
<\/script>

<div class="app">
  <div class="app_header">
    <div class="menu-circle"></div>
  </div>
  <picture>
    <source srcset="{ScreenshotDarkmode}" media="{$theme === 'light' ? 'all' : 'none'}" data-media="(prefers-color-scheme:light)">
    <img src="{ScreenshotLightmode}" alt="Screenshot Garden app">
  </picture>
</div>

<style lang="scss">
  .app {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 960px;
    background-color: var(--c-app-bg);
    border-radius: 0.563rem;
    backdrop-filter: blur(1.25rem);
    .app_header {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      height: 1.875rem;
      width: 100%;
      padding: 0 0.75rem;
      white-space: nowrap;
      border-bottom: 1px solid var(--c-app-border);
      .menu-circle {
        width: 0.688rem;
        height: 0.688rem;
        background-color: #f96057;
        border-radius: 50%;
        box-shadow: 18px 0 0 0 #f8ce52, 36px 0 0 0 #5fcf65;
        flex-shrink: 0;
        @media screen and (max-width: 945px) {
          display: none;
        }
      }
    }
    img {
      width: auto;
      height: 100%;
      max-height: 780px;
      @media (min-width: 2200px) {
        max-height: 100%;
      }
    }
  }
</style>`,l=`<script>
  import { createEventDispatcher } from "svelte";
  import {theme, toggleTheme} from "../../stores/theme.js";
  import { browser } from '$app/environment';
  import { base } from '$app/paths';

  const dispatch = createEventDispatcher();
  export let showMobilenav = false
  export let hasMobilenavicon = false

  function handleToggleMobilenav() {
    dispatch("toggleMobilenav", {})
  }

  $: {
    if (browser) {
      document.documentElement.setAttribute("data-theme", $theme);
    }
  }
<\/script>

<nav class="navbar_nav">
  <ul>
    <li>
      <a href="{base}/docs" title="documentation">Docs</a>
    </li>
    <li>
      <a class="github" href="https://github.com/rabbitdevelopment/garden" title="Garden Github Repository" target="_blank">
        <svg class="icon" role="img" width="32" viewBox="0 0 32 32" height="32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M15.015 0C6.723 0 0 6.894 0 15.398c0 6.803 4.302 12.573 10.27 14.61.75.14 1.025-.334 1.025-.743 0-.365-.013-1.334-.02-2.618-4.178.93-5.059-2.065-5.059-2.065-.683-1.778-1.668-2.252-1.668-2.252-1.362-.955.104-.936.104-.936 1.507.11 2.3 1.587 2.3 1.587 1.34 2.353 3.515 1.673 4.37 1.28.137-.996.525-1.674.954-2.058-3.334-.389-6.84-1.71-6.84-7.61 0-1.681.585-3.056 1.545-4.132-.155-.39-.67-1.955.147-4.075 0 0 1.26-.414 4.13 1.579a14.03 14.03 0 013.76-.518c1.275.005 2.56.176 3.759.518 2.867-1.993 4.126-1.579 4.126-1.579.82 2.12.304 3.685.15 4.075.961 1.076 1.543 2.45 1.543 4.13 0 5.917-3.512 7.218-6.857 7.599.54.476 1.02 1.415 1.02 2.852 0 2.057-.02 3.718-.02 4.223 0 .413.27.891 1.034.741 5.963-2.04 10.261-7.808 10.261-14.608C30.034 6.894 23.31 0 15.015 0"/></svg>
        <span>Source</span>
      </a>
    </li>
    <li>
      <button id="toggle-mode" class="toggle-mode" title="Toggle Website Theme" on:click={toggleTheme}>
      {#if theme === 'light'}
        <svg class="icon" role="img" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 009 9 9 9 0 11-9-9z"/></svg>
      {:else}
        <svg class="icon" role="img" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
      {/if}
      </button>
    </li>
    {#if hasMobilenavicon}
      <li class="navicon">
        <button class="menu" on:click={handleToggleMobilenav} title={showMobilenav ? 'Collapse menu' : 'Expand menu'}>
          <svg class="icon" role="img" width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
        </button>
      </li>
    {/if}
  </ul>
</nav>

<style lang="scss">
  .navbar_nav {
    ul {
      display: flex;
      align-items: center;
      li {
        margin-left: 1rem;
        line-height: 1;
        a {
          padding: 0.5rem 0.75rem;
          @media (min-width: 960px) {
            padding: 0.75rem;
          }
          &:hover {
            background-color: var(--c-link-bg);
            border-radius: 0.5rem;
          }
        }
        button,
        a {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          color: var(--c-text);
          font-variation-settings: 'wght' 500;
          text-transform: uppercase;
          line-height: 1;
          @media (min-width: 960px) {
            font-size: 0.938rem;
          }
          @media (min-width: 1280px) {
            font-size: 1rem;
          }
          .icon {
            font-size: 0.75rem;
            color: var(--c-text);
          }
          &.github {
            .icon {
              display: none;
              @media (min-width: 840px) {
                display: block;
                margin-right: 0.25rem;
              }
            }
          }
        }
        .toggle-mode {
            padding-left: 1rem;
            .icon {
              font-size: 0.938rem;
              @media (min-width: 840px) {
                font-size: 1rem;
              }
            }
            &:hover {
              .icon {
                color: var(--c-primary-link);
              }
            }
          }
        &.navicon {
          margin-left: 2rem;
          @media (min-width: 840px) {
            display: none;
          }
        }
      }
    }
  }
</style>`,d=`<script>
  import Slogan from './Slogan.svelte'
  import Linkbutton from './Linkbutton.svelte'
  import Applicationimage from './Applicationimage.svelte'
  import Dashedline from '../dashedlines/Dashedlines.svelte'
  import { base } from '$app/paths';

<\/script>

<div class="heroheader">
  <div class="heroheader_infos">
    <Slogan
      slogan="Plant, Cultivate,<br><i>Harvest!</i>"
      subtext="Gardenjs provides a centralized platform for developers to create, test and present UI components and pages in isolation." >
    </Slogan>
    <div class="heroheader_links">
      <Linkbutton isExternal
        link="./"
        btnlabel="Demo coming soon"
        bgColor="turquoise">
      </Linkbutton>
      <Linkbutton
        link="{base}/docs"
        btnlabel="Documentation"
        bgColor="">
      </Linkbutton>
    </div>
    <Dashedline dashedlines1 />
  </div>
  <div class="heroheader_img">
    <Applicationimage />
  </div>
</div>

<style lang="scss">
  .heroheader {
    position: relative;
    margin: auto;    
    @media (min-width: 960px) {
      display: grid;
      grid-template-columns: repeat(2,540px 1fr);
    }
    @media (min-width: 1280px) {
      width: var(--w-website-wide);
    }
    .heroheader_infos {
      margin: 2rem 0 0;
      padding: 0 0 1rem;
      .heroheader_links {
        @media (min-width: 480px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0 1rem;
          margin: 0 0 2rem;
        }
      }
    }
    .heroheader_img {
      @media (max-width: 959px) {
        display: none;
      }
      @media (min-width: 960px) {
        position: relative;
        overflow: hidden;
        width: 960px;
        margin: 0 0 0 5rem;
        border-radius: 0.563rem;
      }
    }
  }
</style>`,m=`<script>
  export let isExternal = false

  export let link = ''
  export let bgColor = ''
  export let btnlabel = ''
<\/script>

{#if isExternal}
  <a href="{link}" class="buttonlink {bgColor}" title="Watch Gardenjs" target="_blank">
    <span class="buttonlink-label">{btnlabel}</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17L17 7"/></svg>
  </a>
{:else}
  <a href="{link}" class="buttonlink {bgColor}" title="Watch Gardenjs">
    <span class="buttonlink-label">{btnlabel}</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
  </a>
{/if}

<style lang="scss">
  .buttonlink {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.375rem 1.25rem;
    color: var(--c-text);
    font-size: 0.875rem;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid var(--c-text);
    border-radius: 0.25rem;
    box-shadow: 0.25rem 0.25rem 0 -1px var(--c-text), 0.25rem 0.25rem 0 var(--c-text);
    transition: 0.4s;
    @media (min-width: 840px) {
      font-size: 0.938rem;
    }
    @media (min-width: 960px) {
      padding: 0.5rem 1.25rem;
    }
    .buttonlink-label {
      padding-right: 0.5rem;
    }
    svg {
      transition: 0.4s;
    }
    &:hover,
    &:focus-visible {
      transition: 0.4s;
      box-shadow: 0 0 0 -1px #fff, 0 0 0 #fff;
      transform: translate(0.25rem , 0.25rem );
      svg {
        transform: translateX(0.5rem );
        transition: 0.4s;
      }
    }
  }
  a.turquoise {
    margin: 0 0 0.5rem;
    color: var(--c-btntxt-docs);
    background-color: var(--c-primary);
    border-color: var(--c-border-docs);
    box-shadow: 0.25rem 0.25rem 0 -1px var(--c-primary), 0.25rem 0.25rem 0 var(--c-primary);
    @media (min-width: 480px) {
      margin: 0;
    }
  }
</style>`,p=`<script>
  import Headernav from './Headernav.svelte'
  import Heroheader from './Heroheader.svelte'
  import Logo from '../../assets/icons/logo.svg'
  import LogoNeg from '../../assets/icons/logo_neg.svg'
  import { theme } from '../../stores/theme'
  import { base } from '$app/paths';

  export let isFixed = false
  export let showHeroheader = false
  export let showMobilenav = false
  export let hasMobilenavicon = false

  let fixed = 'is-fixed'
<\/script>

<header class="header {isFixed? fixed : ''}">
  <div class="header_container">
    <div class="navbar">
      <div class="navbar_container">
        <a class="logo" href="{base}/" title="go to start">
          <picture>
            <source srcset="{Logo}" media="{$theme === 'light' ? 'all' : 'none'}" data-media="(prefers-color-scheme:light)">
            <img src="{LogoNeg}" alt="Logo">
          </picture>
        </a>
        <Headernav on:toggleMobilenav {showMobilenav} {hasMobilenavicon} />
      </div>
    </div>
    {#if showHeroheader}
      <Heroheader />
    {/if}
  </div>
</header>

<style lang="scss">
  .header {
    position: relative;
    overflow: hidden;
    padding: 0 1.5rem;
    width: 100%;
    .header_container {
      position: relative;
      .navbar {
        background-color: var(--c-website-bg);
        .navbar_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem 0 0;
          @media (min-width: 580px) {
            flex-direction: row;
            justify-content: space-between;
            margin: auto;
            padding-top: 0;
            height: 6rem;
          }
          @media (min-width: 960px) {
            height: 8rem;
          }
          @media (min-width: 1280px) {
            max-width: var(--w-website-wide);
            height: 10rem;
          }
          a.logo {
            position: relative;
            display: inline-flex;
            align-items: center;
            color: var(--c-text);
            font-variation-settings: 'wght' 900;
            text-decoration: none;
            line-height: 1;
            @media (max-width: 579px) {
              margin: 0 0 0.75rem;
            }
            img {
              display: block;
              width: 107px;
              height: 36px;
              @media (min-width: 380px) {
                width: 149px;
                height: 50px;
              }
              @media (min-width: 840px) {
                width: 178px;
                height: 60px;
              }
              @media (min-width: 1280px) {
                width: 208px;
                height: 70px;
              }
            }
          }
        }
      }
    }
    &.is-fixed {
      position: fixed;
      top: 0;
      z-index: 9;
      @media (min-width: 580px) {
        border-bottom: 1px solid var(--c-border);
      }
      .navbar_container {
        img {
          width: 107px;
          height: 36px;
          @media (min-width: 380px) {
            width: 128px !important;
            height: 35px !important;
          }
          @media (min-width: 960px) {
            width: 119px !important;
            height: 40px !important;
          }
          @media (min-width: 1280px) {
            width: 149px !important;
            height: 50px !important;
          }
        }
        @media (min-width: 580px) {
          height: 4rem !important;
        }
        @media (min-width: 960px) {
          height: 5.5rem !important;
        }
        @media (min-width: 1280px) {
          height: 5.5rem !important;
        }
      }
    }
  }
</style>`,c=`<script>
  export let slogan = ''
  export let subtext = ''
<\/script>

<div class="slogan">{@html slogan}</div>
<p class="slogan_subtext">{subtext}</p>


<style lang="scss">
  .slogan {
    display: block;
    margin: 0 0 1.25rem;
    font-variation-settings: 'wght' 900;
    font-size: 2.5rem;
    color: var(--c-headline);
    line-height: 1;
    text-align: center;
    @media (min-width: 280px) {
      font-size: 3.25rem;
    }
    @media (min-width: 450px) {
      font-size: 4rem;
    }
    @media (min-width: 960px) {
      font-size: 5.5rem;
      text-align: left;
      line-height: 0.9;
      @media (min-width: 1280px) {
        font-size: 6.5rem;
      }
    }
  }
  .slogan_subtext {
    display: block;
    margin: 0 0 1.75rem;
    font-family: "Gloria Hallelujah";
    font-size: 1rem;
    color: var(--c-text-light);
    text-align: center;
    @media (min-width: 840px) {
      font-size: 1.125rem;
    }
    @media (min-width: 960px) {
      text-align: left;
    }
    @media (min-width: 1280px) {
      font-size: 1.25rem;
    }
  }
</style>`,h=`<div class="logo_gallery">
  <ul class="logos">
    <li><svg class="icon" role="img" viewBox="0 0 107 128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g fill-rule="nonzero"><path d="M99.965 16.936C88.08-.075 64.605-5.118 47.632 5.696L17.823 24.695A34.21 34.21 0 002.373 47.6a36.024 36.024 0 003.551 23.121A34.317 34.317 0 00.809 83.503a36.46 36.46 0 006.226 27.561c11.888 17.014 35.362 22.054 52.333 11.24l29.809-18.999A34.207 34.207 0 00104.626 80.4a36.035 36.035 0 00-3.549-23.122 34.288 34.288 0 005.114-12.78 36.444 36.444 0 00-6.226-27.56" fill="#ff3e00"/><path d="M44.72 112.665c-9.587 2.492-19.769-1.282-25.414-9.42A21.926 21.926 0 0115.56 86.67a20.83 20.83 0 01.713-2.783l.56-1.712 1.528 1.121a38.438 38.438 0 0011.66 5.827l1.109.336-.103 1.106a6.691 6.691 0 001.202 4.432 7.144 7.144 0 007.653 2.84 6.6 6.6 0 001.83-.805l29.81-18.996a6.21 6.21 0 002.801-4.15 6.624 6.624 0 00-1.129-4.996 7.149 7.149 0 00-7.655-2.842 6.585 6.585 0 00-1.828.805l-11.375 7.251a21.755 21.755 0 01-6.053 2.658c-9.586 2.493-19.768-1.282-25.414-9.42a21.923 21.923 0 01-3.745-16.574 20.569 20.569 0 019.292-13.774l29.807-18.997a21.776 21.776 0 016.057-2.662c9.586-2.492 19.768 1.282 25.413 9.42A21.926 21.926 0 0191.44 41.33a21.006 21.006 0 01-.714 2.783l-.56 1.712-1.526-1.12a38.411 38.411 0 00-11.662-5.828l-1.109-.336.103-1.107a6.704 6.704 0 00-1.202-4.432 7.146 7.146 0 00-7.653-2.84 6.6 6.6 0 00-1.83.805l-29.81 18.998a6.2 6.2 0 00-2.799 4.148 6.616 6.616 0 001.127 4.997 7.15 7.15 0 007.655 2.841 6.6 6.6 0 001.83-.805l11.375-7.248a21.679 21.679 0 016.051-2.66c9.586-2.493 19.77 1.281 25.414 9.42a21.92 21.92 0 013.745 16.574 20.578 20.578 0 01-9.291 13.775l-29.807 18.997a21.776 21.776 0 01-6.058 2.661" fill="#fff"/></g></svg></li>
    <li><svg class="icon" role="img" viewBox="0 0 148 128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M91.09 0L74 29.557 56.91 0H0l74 128L148 0H91.09z" fill="#42b883" fill-rule="nonzero"/><path d="M91.09 0L74 29.557 56.91 0H29.597L74 76.798 118.403 0H91.09z" fill="#35495e" fill-rule="nonzero"/></svg></li>
    <li><svg class="icon" role="img" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><circle r="2.05" fill="#61dafb" transform="translate(64.053 64) scale(5.50477)"/><g transform="matrix(5.5 0 0 5.50477 64 64)" fill="none" stroke="#61dafb"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg></li>
    <li><svg class="icon placeholder" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M9 21h1"/><path d="M14 3h1"/><path d="M14 21h1"/><path d="M3 9v1"/><path d="M21 9v1"/><path d="M3 14v1"/><path d="M21 14v1"/></svg></li>
  </ul>
</div>

<style lang="scss">
  .logo_gallery {
    text-align: center;
    margin: 2rem auto;
    @media (min-width: 960px) {
      margin: 3rem auto;
    }
  }
  .logos {
    display: inline-flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    li {
      display: inline-block;
      margin: 0 1rem;
      .icon {
        font-size: 1.25rem;
        @media (min-width: 960px) {
          font-size: 1.5rem;
        }
        @media (min-width: 1280px) {
          font-size: 1.75rem;
        }
      }
      .placeholder {
        path {
          stroke: var(--c-text-light);
        }
      }
    }
  }
</style>`,g=`<script>
  import { createEventDispatcher } from "svelte";
  import { base } from '$app/paths';

  export let url = "";
  
  const dispatch = createEventDispatcher();

  export let folders = [];

  function handleClick() {
    dispatch("toggleMobilenav");
  }
<\/script>

<div class="sidenav_heading">Documentation</div>
<nav class="sidenav">
  <ul>
    {#each folders as folder}
      <li>
        <span class="sidenav_folder">{folder.title}</span>
        <ul>
          {#each folder.items as link}  
            <li>
              <a href={base}{link.href} class:active={url === base + link.href} on:click={handleClick}>{link.label}</a>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  .sidenav_heading {
    @media (max-width: 839px) {
      display: none;
    }
    @media (min-width: 840px) {
      margin: 0 0 1.5rem;
      font-variation-settings: 'wght' 700;
      font-size: 1.375rem;
      letter-spacing: 0.063rem;
    }
  }
  .sidenav {
    position: sticky;
    overflow-y: scroll;
    ul {
      display: block;
      li {
        font-variation-settings: 'wght' 700;
        font-size: 1rem;
        color: var(--c-text);
        line-height: 1.2;
        @media (min-width: 960px) {
          font-size: 1.125rem;
        }
        .sidenav_folder {
          display: block;
          margin: 0 0 0.5rem;
          letter-spacing: 0.063rem;
        }
        ul {
          margin: 0 0 1.5rem;
          padding-left: 0.375rem;
          border-left: 1px solid var(--c-border);
          li {
            padding: 0;
            a {
              margin: 0.25rem 0;
              padding: 0.375rem 0.75rem;
              font-size: 1rem;
              color: var(--c-text);
              line-height: 1.2;
              font-variation-settings: 'wght' 400;
              text-decoration: none;
              @media (min-width: 960px) {
                font-size: 1.125rem;
              }
              &:hover {
                background-color: var(--c-link-bg);
                border-radius: 0.5rem;
              }
              &.active {
                color: var(--c-link);
                font-variation-settings: 'wght' 500;
                background-color: var(--c-link-bg);
                border-radius: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
</style>`,v=`<script>
  import Vegetables from '../../assets/icons/vegetables.svg'

  export let isHome = false

  let ifhome = 'is-home'
  let undefined = ''

<\/script>

<div class="vegetables {isHome? ifhome : undefined}">
  <img src="{Vegetables}" alt="Vegetable illustration">
</div>

<style lang="scss">
  .vegetables {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 4rem auto;
    @media (min-width: 960px) {
      margin-top: 6rem;
    }
    @media (min-width: 1280px) {
      width: 100%;
      margin-top: 8rem;
    }
    img {
      width: 66.6%;
      @media (min-width: 480px) {
        width: 50%;
      }
      @media (min-width: 600px) {
        padding: 0 0.5rem 0 0.625rem;
      }
      @media (min-width: 840px) {
        width: 375px;
      }
    }
    &.is-home {
      margin: 2rem auto;
      @media (min-width: 960px) {
        margin-top: 2rem;
      }
      @media (min-width: 1280px) {
        margin-top: 2.5rem;
      }
    }
  }
</style>`,f=`<script>
  import Documentation from './Documentation.svelte';

  export let sidenavFolders = [];
<\/script>

<Documentation sidenavFolders={sidenavFolders}>
  <div>Content area...</div>
</Documentation>

<style>
  div {
    padding: 1rem;
    background-color: #eee;
  }
</style>`,x=`<script>
  import Grid from './Grid.svelte';

  export let columns = 2;
<\/script>

<Grid columns={columns}>
  <div>Grid container 1</div>
  <div>Grid container 2</div>
  <div>Grid container 3</div>
  <div>Grid container 4</div>
  <div>Grid container 5</div>
  <div>Grid container 6</div>
  <div>Grid container 7</div>
  <div>Grid container 8</div>
  <div>Grid container 9</div>
</Grid>

<style>
  div {
    padding: 1rem;
    height: 100px;
    background-color: #eee;
  }
</style>`,w=`<script>
  import Homepage from './Homepage.svelte';
  import Main from './Main.svelte';
<\/script>

<Homepage>
  <Main hasHeaderhead isWide>
    <div>Main content area...</div>
  </Main>
</Homepage>

<style>
  div {
    padding: 1rem;
    background-color: #eee;
  }
</style>`,b=`<script>
  import Main from './Main.svelte';
<\/script>

<Main>
  <div>Main content area...</div>
</Main>

<style>
  div {
    padding: 1rem;
    background-color: #eee;
  }
</style>`,u=`<script>
  import Subpage from './Subpage.svelte';
  import Main from './Main.example.svelte';
<\/script>

<Subpage>
  <Main />
</Subpage>`,y={ComponentsAccordionAccordion:n,ComponentsBlockquoteBlockquote:e,ComponentsCardCard:t,ComponentsChapterChapter:i,ComponentsChapterChapter_Head:r,ComponentsDashedlinesDashed_Lines:o,ComponentsFooterFooter:a,ComponentsHeaderApplication_Image:s,ComponentsHeaderHeadernav:l,ComponentsHeaderHero_Header:d,ComponentsHeaderLinkbutton:m,ComponentsHeaderNavbar:p,ComponentsHeaderSlogan:c,ComponentsLogogalleryLogogallery:h,ComponentsSidenavSidenav:g,ComponentsVegetablesVegetables:v,LayoutsDocumentation:f,LayoutsGrid:x,LayoutsHomepage:w,LayoutsMain:b,LayoutsSubpage:u};export{y as rawComponentMap};
