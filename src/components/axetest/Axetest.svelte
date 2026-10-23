<script>
  export let showViolationsBlock = true
  export let showEmptyButton = true
  export let showMissingAlt = true
  export let showUnlabeledInput = true
  export let contrastMode = 'fail'
  export let showBadLink = true
  export let showAriaFixtures = true
</script>

<div class="axetest" data-axe-test-surface>
  <h2 class="axetest__title">Axe test component</h2>
  <p class="axetest__intro">
    Fixture für das GardenJS-A11y-Panel. Steuerung über die <strong>Controls</strong>
    im Panel — nach jeder Änderung läuft bei <code>devmodus: true</code> ein neuer
    Scan (Zähler in Violations / Incomplete / Passed sollten sich verschieben).
  </p>
  <p class="axetest__intro axetest__intro--muted">
    Scan auf <code>document.body</code>, Regel <code>region</code> deaktiviert. Incomplete
    bleibt weitgehend statisch (duplicate-id, canvas, …).
  </p>

  <p class="axetest__controls" aria-live="polite">
    Controls:
    violations={showViolationsBlock ? 'on' : 'off'},
    button={showEmptyButton ? 'on' : 'off'},
    img={showMissingAlt ? 'on' : 'off'},
    input={showUnlabeledInput ? 'on' : 'off'},
    contrast={contrastMode},
    link={showBadLink ? 'on' : 'off'},
    aria={showAriaFixtures ? 'on' : 'off'}
  </p>

  {#if showViolationsBlock}
  <section class="axetest__block axetest__block--violations" aria-label="Typical violations">
    <h3 class="axetest__blockTitle">Typical violations</h3>
    <p class="axetest__blockHint">
      Erscheinen mit dem Standard-Garden-Scan meist unter <strong>Violations</strong>.
    </p>

    <div class="axetest__grid">
      {#if showEmptyButton}
        <div class="axetest__case">
          <div class="axetest__caseTitle">button-name</div>
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button type="button" class="axetest__badEmptyButton"></button>
        </div>
      {/if}

      {#if showMissingAlt}
        <div class="axetest__case">
          <div class="axetest__caseTitle">image-alt</div>
          <!-- svelte-ignore a11y_missing_attribute -->
          <img
            class="axetest__badImage"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            width="40"
            height="40"
          />
        </div>
      {/if}

      {#if showUnlabeledInput}
        <div class="axetest__case">
          <div class="axetest__caseTitle">label / label-title-only</div>
          <input type="text" class="axetest__badInput" placeholder="No label" />
        </div>
      {/if}

      {#if contrastMode === 'fail'}
        <div class="axetest__case axetest__case--emphasis">
          <div class="axetest__caseTitle">color-contrast — small text (WCAG 1.4.3)</div>
          <p class="axetest__contrastSwatch axetest__contrastSwatch--fail">
            <span class="axetest__badContrast axetest__badContrast--small"
              >Low contrast text</span
            >
          </p>
        </div>
      {:else if contrastMode === 'pass'}
        <div class="axetest__case axetest__case--emphasis">
          <div class="axetest__caseTitle">color-contrast — small text (pass)</div>
          <p class="axetest__contrastSwatch axetest__contrastSwatch--pass">
            <span class="axetest__goodContrastText">Readable text</span>
          </p>
        </div>
      {/if}

      {#if showBadLink && contrastMode === 'fail'}
        <div class="axetest__case axetest__case--emphasis">
          <div class="axetest__caseTitle">color-contrast — link (WCAG 1.4.3)</div>
          <p class="axetest__contrastSwatch axetest__contrastSwatch--fail">
            <a class="axetest__badContrastLink" href="#/">Low contrast link</a>
          </p>
        </div>
      {:else if showBadLink && contrastMode === 'pass'}
        <div class="axetest__case axetest__case--emphasis">
          <div class="axetest__caseTitle">color-contrast — link (pass)</div>
          <p class="axetest__contrastSwatch axetest__contrastSwatch--pass">
            <a class="axetest__goodLink" href="#/">Readable link</a>
          </p>
        </div>
      {/if}

      {#if showAriaFixtures}
        <div class="axetest__case">
          <div class="axetest__caseTitle">aria-required-children</div>
          <div role="listbox" aria-label="Bad listbox" class="axetest__roleBox">
            <div role="presentation">No options</div>
          </div>
        </div>

        <div class="axetest__case">
          <div class="axetest__caseTitle">aria-input-field-name</div>
          <div role="textbox" contenteditable="true" class="axetest__roleBox">Editable</div>
        </div>

        <div class="axetest__case">
          <div class="axetest__caseTitle">aria-valid-attr-value</div>
          <!-- svelte-ignore a11y_incorrect_aria_attribute_type_boolean -->
          <div aria-hidden="maybe" class="axetest__roleBox">invalid aria-hidden</div>
        </div>

        <div class="axetest__case">
          <div class="axetest__caseTitle">aria-roles</div>
          <!-- svelte-ignore a11y_unknown_role -->
          <div role="superbutton" class="axetest__roleBox">invalid role</div>
        </div>

        <div class="axetest__case">
          <div class="axetest__caseTitle">link-name</div>
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <a href="#/" class="axetest__badLink"></a>
        </div>
      {/if}
    </div>
  </section>
  {:else}
    <p class="axetest__intro axetest__intro--muted">
      Violations-Block ist aus — erwartet weniger Einträge unter <strong>Violations</strong>.
    </p>
  {/if}

  <section
    class="axetest__block axetest__block--incomplete"
    aria-label="Incomplete or not in default scan"
  >
    <h3 class="axetest__blockTitle">Incomplete / not in default scan</h3>
    <p class="axetest__blockHint">
      Oft <strong>Incomplete</strong>, oder gar nicht gemeldet, bis ihr die Regel bzw.
      Tags anpasst.
    </p>

    <div class="axetest__grid">
      <div class="axetest__case axetest__case--muted">
        <div class="axetest__caseTitle">duplicate-id (rule off in axe 4.8+)</div>
        <span id="axetest-duplicate-id">duplicate id #1</span>
        <span id="axetest-duplicate-id">duplicate id #2</span>
        <p class="axetest__hint">
          Standard deaktiviert (WCAG 4.1.1). Nur mit
          <code>duplicate-id: &#123; enabled: true &#125;</code>.
        </p>
      </div>

      <div class="axetest__case axetest__case--muted">
        <div class="axetest__caseTitle">non-text-contrast (WCAG 2.2)</div>
        <div class="axetest__contrastSwatch axetest__contrastSwatch--fail">
          <button type="button" class="axetest__lowContrastControl">Control</button>
        </div>
        <p class="axetest__hint">
          WCAG-2.2-Regel; erscheint mit vollem axe-Regelset, je nach Version.
        </p>
      </div>

      <div class="axetest__case">
        <div class="axetest__caseTitle">color-contrast (alpha layers)</div>
        <div class="axetest__alphaStack">
          <span class="axetest__alphaText">Text on layered transparent backgrounds</span>
        </div>
      </div>

      <div class="axetest__case">
        <div class="axetest__caseTitle">canvas</div>
        <canvas class="axetest__canvas" width="140" height="36" aria-label="Axetest canvas demo"
        ></canvas>
        <p class="axetest__hint">Häufig <code>canvas</code> / Text in Incomplete.</p>
      </div>

      <div class="axetest__case">
        <div class="axetest__caseTitle">button-name (div as button)</div>
        <div class="axetest__roleBox" role="button" tabindex="0">Div as button</div>
        <p class="axetest__hint">Kann Violation oder Incomplete sein.</p>
      </div>

      <div class="axetest__case axetest__case--muted">
        <div class="axetest__caseTitle">html-has-lang</div>
        <p class="axetest__hint">
          Prüft <code>&lt;html lang&gt;</code> im Iframe — dort bereits
          <code>lang="en"</code> in <code>frame.html</code>, kein Extra-Markup nötig.
        </p>
      </div>
    </div>
  </section>

  <section class="axetest__block axetest__block--passed" aria-label="Should pass">
    <h3 class="axetest__blockTitle">Passed</h3>
    <p class="axetest__blockHint">
      Sollten unter <strong>Passed</strong> erscheinen (eigene Regel-Treffer, nicht nur
      „keine Violation“).
    </p>

    <div class="axetest__grid">
      <div class="axetest__case">
        <div class="axetest__caseTitle">button-name</div>
        <button type="button" class="axetest__goodButton">Save</button>
      </div>

      <div class="axetest__case">
        <div class="axetest__caseTitle">label</div>
        <label class="axetest__goodLabel">
          Search
          <input type="search" name="q" class="axetest__goodInput" />
        </label>
      </div>

      <div class="axetest__case">
        <div class="axetest__caseTitle">image-alt (decorative)</div>
        <img
          class="axetest__goodImage"
          alt=""
          role="presentation"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          width="40"
          height="40"
        />
      </div>

      <div class="axetest__case">
        <div class="axetest__caseTitle">link-name</div>
        <a href="#/" class="axetest__goodLink">Read more</a>
      </div>

      <div class="axetest__case">
        <div class="axetest__caseTitle">aria (valid)</div>
        <div role="status" aria-live="polite" class="axetest__roleBox">Status: saved</div>
      </div>

      <div class="axetest__case">
        <div class="axetest__caseTitle">color-contrast</div>
        <p class="axetest__contrastSwatch axetest__contrastSwatch--pass">
          <span class="axetest__goodContrastText">Readable text</span>
        </p>
      </div>
    </div>
  </section>
</div>

<style>
  .axetest {
    padding: 16px;
    border: 1px solid var(--c-border, #ddd);
    border-radius: 8px;
    background: var(--c-website-bg, #fff);
    color: var(--c-text, #111);
  }

  .axetest__title {
    margin: 0 0 8px;
    font-size: 20px;
    font-weight: 650;
  }

  .axetest__intro {
    margin: 0 0 8px;
    opacity: 0.9;
    font-size: 14px;
  }

  .axetest__intro--muted {
    margin: 0 0 16px;
    font-size: 13px;
    opacity: 0.75;
  }

  .axetest__intro code {
    font-size: 12px;
  }

  .axetest__controls {
    margin: 0 0 16px;
    padding: 8px 10px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.04);
    font-family: ui-monospace, monospace;
    font-size: 11px;
    line-height: 1.45;
  }

  .axetest__block {
    padding: 12px 16px;
    border-radius: 6px;
    border: 1px dashed var(--c-border, #999);
    margin-bottom: 16px;
  }

  .axetest__block:last-child {
    margin-bottom: 0;
  }

  .axetest__blockTitle {
    margin: 0 0 6px;
    font-size: 16px;
    font-weight: 600;
  }

  .axetest__blockHint {
    margin: 0 0 12px;
    font-size: 12px;
    opacity: 0.85;
  }

  .axetest__block--violations {
    border-color: #c62828;
    background: rgba(198, 40, 40, 0.06);
  }

  .axetest__block--incomplete {
    border-color: #ef6c00;
    background: rgba(239, 108, 0, 0.06);
  }

  .axetest__block--passed {
    border-color: #2e7d32;
    background: rgba(46, 125, 50, 0.06);
  }

  .axetest__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
  }

  .axetest__case {
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.6);
  }

  .axetest__case--muted {
    opacity: 0.92;
    border-style: dotted;
  }

  .axetest__case--emphasis {
    border-color: #c62828;
    border-width: 2px;
  }

  .axetest__caseTitle {
    margin-bottom: 8px;
    font-size: 13px;
    font-weight: 600;
    opacity: 0.9;
  }

  .axetest__hint {
    margin: 8px 0 0;
    font-size: 11px;
    line-height: 1.4;
    opacity: 0.8;
  }

  .axetest__hint code {
    font-size: 10px;
  }

  .axetest__badEmptyButton {
    display: inline-block;
    min-width: 40px;
    min-height: 32px;
    border: 1px solid #333;
    background: #eee;
    vertical-align: middle;
  }

  /* ~1.9:1 on #fff — must fail WCAG AA color-contrast as violation */
  .axetest__badContrast {
    color: #bdbdbd;
    font-size: 14px;
  }

  .axetest__badContrast--small {
    font-size: 12px;
    line-height: 1.35;
  }

  .axetest__contrastSwatch {
    margin: 0;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }

  .axetest__contrastSwatch--fail {
    background: #ffffff;
  }

  .axetest__contrastSwatch--pass {
    background: #ffffff;
  }

  .axetest__badContrastLink {
    color: #bdbdbd;
    text-decoration: underline;
  }

  .axetest__lowContrastControl {
    padding: 6px 10px;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    background: #ffffff;
    color: #bdbdbd;
  }

  .axetest__goodContrastText {
    color: #1a1a1a;
    font-size: 14px;
  }

  .axetest__badImage,
  .axetest__goodImage {
    display: inline-block;
    border: 1px solid #ccc;
    vertical-align: middle;
  }

  .axetest__badInput {
    display: block;
    width: 100%;
    max-width: 220px;
    padding: 6px 8px;
    border: 1px solid #999;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .axetest__badLink,
  .axetest__goodLink {
    color: #0b57d0;
    text-decoration: underline;
  }

  .axetest__badLink {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .axetest__roleBox {
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.03);
    font-size: 13px;
  }

  .axetest__alphaStack {
    position: relative;
    padding: 12px;
    border-radius: 4px;
    background: rgba(200, 200, 200, 0.35);
  }

  .axetest__alphaStack::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.45);
    pointer-events: none;
  }

  .axetest__alphaText {
    position: relative;
    color: rgba(100, 100, 100, 0.8);
    font-size: 14px;
  }

  .axetest__canvas {
    display: block;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    background: #fff;
  }

  .axetest__goodButton {
    padding: 7px 14px;
    border: 1px solid #333;
    border-radius: 4px;
    background: #1b5e20;
    color: #fff;
    cursor: pointer;
  }

  .axetest__goodLabel {
    display: block;
    margin-top: 4px;
  }

  .axetest__goodInput {
    display: block;
    margin-top: 4px;
    padding: 4px 8px;
    border: 1px solid #999;
    border-radius: 4px;
  }
</style>
