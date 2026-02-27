import{f as x,b as j}from"../chunks/Dt4-8ENk.js";import"../chunks/DcbHPUAs.js";import{a4 as n,a2 as z,a6 as a,a7 as s,Z as E,$ as F}from"../chunks/CEupPios.js";import{h as J}from"../chunks/FRmCoyac.js";import{h as p}from"../chunks/CbHQS5kZ.js";var V=x(`<h1>Parameters</h1> <p>Parameters are automatically generated from the input data of the examples and are output by default in the Gardenjs panel. This allows you to dynamically adjust the properties of components.
This chapter explains how the <code>params</code> property in the <code>.das file</code> can be used to make a more specific selection of controls.</p> <p>Learn more about <a href="/docs/get-started/examples">creating examples and .das.js files</a>.</p> <h2>Requirements</h2> <p>Gardenjs ≥ v1.7</p> <h2>Basic Structure</h2> <p>Add a <code>params</code> array to your <code>.das.js</code> file:</p> <pre class="language-javascript"><!></pre> <h2>Available Controls</h2> <p>Each parameter is rendered in the panel by a <strong>control</strong> (the UI widget). You get a control either by setting a matching <code>type</code> (Gardenjs picks the default control for <code>string</code>, <code>number</code>, <code>boolean</code>, <code>date</code>, <code>array</code>, <code>object</code>) or by setting <code>type</code> and <code>control</code> explicitly. Controls like color, time, datetime, range, and select have no built-in type and always need <code>control</code> plus a suitable <code>type</code> (e.g. <code>type: 'string'</code>, <code>control: 'time'</code>). The following controls are available:</p> <ul><li><a href="#array"><strong>Array</strong></a> - Input for adding/removing list items</li> <li><a href="#boolean"><strong>Boolean</strong></a> - Checkbox or toggle switch</li> <li><a href="#color"><strong>Color</strong></a> - Color picker</li> <li><a href="#date"><strong>Date</strong></a> - Date picker</li> <li><a href="#datetime"><strong>Datetime</strong></a> - Datetime picker</li> <li><a href="#json"><strong>JSON</strong></a> - JSON input (textarea with validation)</li> <li><a href="#number"><strong>Number</strong></a> - Number input field</li> <li><a href="#object"><strong>Object</strong></a> - Key-value pair inputs</li> <li><a href="#object-renderer"><strong>Object Renderer</strong></a> - Complex form for arrays of objects</li> <li><a href="#range"><strong>Range</strong></a> - Range slider</li> <li><a href="#select"><strong>Select</strong></a> - Dropdown menu or radio button group</li> <li><a href="#text--string"><strong>Text / String</strong></a> - Text input field or textarea</li> <li><a href="#time"><strong>Time</strong></a> - Time picker</li></ul> <hr/> <h3 id="array" style="scroll-margin-top: 6rem;">Array</h3> <p>Creates an array input where users can add/remove items.</p> <pre class="language-javascript"><!></pre> <hr/> <h3 id="boolean" style="scroll-margin-top: 6rem;">Boolean</h3> <p>Creates a checkbox or toggle switch input.</p> <pre class="language-javascript"><!></pre> <hr/> <h3 id="color" style="scroll-margin-top: 6rem;">Color</h3> <p>Creates a color picker. Use <code>type: 'string'</code> and <code>control: 'color'</code> (no built-in type for color).</p> <pre class="language-javascript"><!></pre> <hr/> <h3 id="date" style="scroll-margin-top: 6rem;">Date</h3> <p>Creates a date picker.</p> <pre class="language-javascript"><!></pre> <hr/> <h3 id="datetime" style="scroll-margin-top: 6rem;">Datetime</h3> <p>Creates a datetime picker. Use <code>type: 'string'</code> and <code>control: 'datetime'</code>.</p> <pre class="language-javascript"><!></pre> <hr/> <h3 id="number" style="scroll-margin-top: 6rem;">Number</h3> <p>Creates a number input field.</p> <pre class="language-javascript"><!></pre> <hr/> <h3 id="object" style="scroll-margin-top: 6rem;">Object</h3> <p>Creates key-value pair inputs.</p> <pre class="language-javascript"><!></pre> <hr/> <h3 id="object-renderer" style="scroll-margin-top: 6rem;">Object Renderer</h3> <p>Creates a complex form for arrays of objects with defined schemas. Perfect for managing lists of structured data.</p> <pre class="language-javascript"><!></pre> <hr/> <h3 id="range" style="scroll-margin-top: 6rem;">Range</h3> <p>Creates a range slider. Use <code>type: 'number'</code> and <code>control: 'range'</code>.</p> <pre class="language-javascript"><!></pre> <hr/> <h3 id="select" style="scroll-margin-top: 6rem;">Select</h3> <p>Creates a dropdown menu or radio button group with predefined options. Use <code>type: 'string'</code> and <code>control: 'select'</code> or <code>control: 'radio'</code>.</p> <pre class="language-javascript"><!></pre> <hr/> <h3 id="text--string" style="scroll-margin-top: 6rem;">Text / String</h3> <p>Creates a text input field or textarea. Use <code>type: 'string'</code>; default control is text input, or set <code>control: 'textarea'</code> for multiline.</p> <pre class="language-javascript"><!></pre> <hr/> <h3 id="json" style="scroll-margin-top: 6rem;">JSON</h3> <p>Creates a JSON editor (textarea with validation). In Gardenjs this control is used when <code>type</code> is <code>array</code> or <code>object</code> (no separate <code>type: 'json'</code>). Suitable for structured data or configuration objects.</p> <pre class="language-javascript"><!></pre> <hr/> <h3 id="time" style="scroll-margin-top: 6rem;">Time</h3> <p>Creates a time picker. Use <code>type: 'string'</code> and <code>control: 'time'</code>.</p> <pre class="language-javascript"><!></pre> <hr/> <h2>Properties Reference</h2> <p>Params can be defined by <strong>type</strong> only (Gardenjs picks a default control) or by <strong>type</strong> plus <strong>control</strong> to choose the exact UI. If <code>control</code> is set and valid, it overrides the default for that type.</p> <table><thead><tr><th>Property</th><th>Required</th><th>Used In</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td>Yes</td><td>All</td><td>The property name to bind to.</td></tr><tr><td><code>type</code></td><td>Yes</td><td>All</td><td>Data type. In Gardenjs only these types have a built-in default control: <code>string</code> → text; <code>number</code> → number; <code>boolean</code> → checkbox; <code>date</code> → date; <code>array</code> / <code>object</code> → JSON editor. All other controls (time, datetime, color, range, select, textarea, toggle, radio, etc.) require setting <code>control</code> explicitly, typically with <code>type: 'string'</code> or <code>type: 'number'</code>.</td></tr><tr><td><code>label</code></td><td>No</td><td>All</td><td>Display name in the UI (defaults to <code>name</code>).</td></tr><tr><td><code>control</code></td><td>No</td><td>Optional override</td><td>UI control. Values: <code>text</code>, <code>textarea</code>, <code>checkbox</code>, <code>toggle</code>, <code>number</code>, <code>color</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>array</code>, <code>object</code>, <code>range</code>, <code>select</code>, <code>radio</code>, <code>multiselect</code>, <code>checkboxes</code>. Use to pick variant: boolean → <code>checkbox</code> or <code>toggle</code>; string → <code>text</code>, <code>textarea</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>select</code>, <code>radio</code>; number → <code>number</code> or <code>range</code>; array → <code>array</code>, <code>multiselect</code>, <code>checkboxes</code>.</td></tr><tr><td><code>options</code></td><td>Yes</td><td>select, radio, multiselect, checkboxes</td><td>Array of options (strings or <code>&#123; label, value &#125;</code> objects).</td></tr><tr><td><code>schema</code></td><td>Yes</td><td>object, objectrenderer</td><td>Defines the structure of nested fields.</td></tr><tr><td><code>placeholder</code></td><td>No</td><td>In schema</td><td>Placeholder text for input fields.</td></tr><tr><td><code>numberOfRows</code></td><td>No</td><td>text (textarea), json</td><td>Number of visible rows in textarea/JSON field (default: 4).</td></tr><tr><td><code>min</code></td><td>No</td><td>range</td><td>Minimum value for range slider (default: 0).</td></tr><tr><td><code>max</code></td><td>No</td><td>range</td><td>Maximum value for range slider (default: 100).</td></tr><tr><td><code>step</code></td><td>No</td><td>range</td><td>Step size for range slider (default: 1).</td></tr></tbody></table> <h2>Complete Example</h2> <p>Here’s a complete <code>.das.js</code> file using different controls:</p> <pre class="language-javascript"><!></pre>`,1);function B(r){var t=V(),e=n(z(t),14),l=a(e);p(l,()=>`<code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'MyComponent'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">'./MyComponent.svelte'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">examples</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// your examples</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'title'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Title'</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`),s(e);var o=n(e,14),C=a(o);p(C,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'tags'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'array'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Tags'</span>
<span class="token punctuation">&#125;</span></code>`),s(o);var c=n(o,8),w=a(c);p(w,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'isActive'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'boolean'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Active'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'checkbox'</span>  <span class="token comment">// 'checkbox' (default) or 'toggle' for switch display</span>
<span class="token punctuation">&#125;</span></code>`),s(c);var i=n(c,8),D=a(i);p(D,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'bgColor'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'color'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Background Color'</span>
<span class="token punctuation">&#125;</span></code>`),s(i);var k=n(i,8),S=a(k);p(S,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'startDate'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Start Date'</span>
<span class="token punctuation">&#125;</span></code>`),s(k);var u=n(k,8),P=a(u);p(P,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'appointment'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'datetime'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Appointment'</span>
<span class="token punctuation">&#125;</span></code>`),s(u);var d=n(u,8),T=a(d);p(T,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'columns'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Columns'</span>
<span class="token punctuation">&#125;</span></code>`),s(d);var y=n(d,8),N=a(y);p(N,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'metadata'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'object'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Metadata'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">schema</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">keyDefault</span><span class="token operator">:</span> <span class="token string">'key'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">valueDefault</span><span class="token operator">:</span> <span class="token string">'value'</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),s(y);var g=n(y,8),A=a(g);p(A,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'items'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'objectrenderer'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Accordion Items'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">schema</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Title'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'Enter title'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Content'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'Enter content'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Priority'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'boolean'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Visible'</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),s(g);var m=n(g,8),O=a(m);p(O,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'opacity'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'range'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Opacity'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>     <span class="token comment">// Minimum value (default: 0)</span>
  <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>     <span class="token comment">// Maximum value (default: 100)</span>
  <span class="token literal-property property">step</span><span class="token operator">:</span> <span class="token number">0.1</span>   <span class="token comment">// Step size (default: 1)</span>
<span class="token punctuation">&#125;</span></code>`),s(m);var b=n(m,8),U=a(b);p(U,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'size'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>  <span class="token comment">// or 'radio' for radio buttons</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Size'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'small'</span><span class="token punctuation">,</span> <span class="token string">'medium'</span><span class="token punctuation">,</span> <span class="token string">'large'</span><span class="token punctuation">]</span>  <span class="token comment">// Simple string array</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// With labels and values:</span>
<span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'variant'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Variant'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Primary'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'primary'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Secondary'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'secondary'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Danger'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'danger'</span> <span class="token punctuation">&#125;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`),s(b);var h=n(b,8),I=a(h);p(I,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'title'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Card Title'</span>  <span class="token comment">// default: single-line text; omit control or set control: 'text'</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Textarea with custom row count:</span>
<span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'description'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'textarea'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Description'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">numberOfRows</span><span class="token operator">:</span> <span class="token number">5</span>  <span class="token comment">// Number of visible rows (default: 4)</span>
<span class="token punctuation">&#125;</span></code>`),s(h);var f=n(h,8),R=a(f);p(R,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'config'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'array'</span><span class="token punctuation">,</span>  <span class="token comment">// or type: 'object'</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Configuration'</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`),s(f);var v=n(f,8),G=a(v);p(G,()=>`<code class="language-javascript"><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'openingTime'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'time'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Opening Time'</span>
<span class="token punctuation">&#125;</span></code>`),s(v);var _=n(v,14),M=a(_);p(M,()=>`<code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'ProductCard'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">'./ProductCard.svelte'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'A product card component'</span><span class="token punctuation">,</span>
  
  <span class="token literal-property property">examples</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Default Product'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Awesome Product'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a detailed product description.'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">29.99</span><span class="token punctuation">,</span>
        <span class="token literal-property property">inStock</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">featured</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">'medium'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#3b82f6'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">releaseDate</span><span class="token operator">:</span> <span class="token string">'2024-01-15'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">availableFrom</span><span class="token operator">:</span> <span class="token string">'09:00'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">'2024-01-15T14:30'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">discount</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Feature 1'</span><span class="token punctuation">,</span> <span class="token string">'Feature 2'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">metadata</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">brand</span><span class="token operator">:</span> <span class="token string">'Example'</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'Electronics'</span> <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'title'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Product Title'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'description'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'textarea'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Description'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">numberOfRows</span><span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'price'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Price'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'inStock'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'boolean'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'In Stock'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'checkbox'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'featured'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'boolean'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Featured Product'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'toggle'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'size'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Size'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'small'</span><span class="token punctuation">,</span> <span class="token string">'medium'</span><span class="token punctuation">,</span> <span class="token string">'large'</span><span class="token punctuation">]</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'color'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'color'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Background Color'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'releaseDate'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Release Date'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'availableFrom'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'time'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Available From'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'lastUpdated'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'datetime'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Last Updated'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'discount'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token string">'range'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Discount %'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token literal-property property">step</span><span class="token operator">:</span> <span class="token number">5</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'features'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'array'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Features'</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'metadata'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'object'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Metadata'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">schema</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">keyDefault</span><span class="token operator">:</span> <span class="token string">'key'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">valueDefault</span><span class="token operator">:</span> <span class="token string">'value'</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'variants'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'objectrenderer'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Product Variants'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">schema</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Variant Name'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'Enter variant name'</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Price'</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">available</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'boolean'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Available'</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`),s(_),j(r,t)}var Y=x('<meta name="description" content="Learn how to use params to create interactive controls in Gardenjs. Gardenjs is the fast component UI explorer for JavaScript frameworks like Svelte, Vue and React."/>'),q=x('<div class="md_file"><!></div>');function Z(r){var t=q();J("uc3nlo",l=>{var o=Y();E(()=>{F.title="Params :: Gardenjs Docs"}),j(l,o)});var e=a(t);B(e),s(t),j(r,t)}export{Z as component};
