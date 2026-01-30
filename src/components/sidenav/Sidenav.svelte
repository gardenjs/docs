<script>
	import { base } from '$app/paths';

	/**
	 * @typedef {Object} Props
	 * @property {string} [url]
	 * @property {any} [folders]
	 * @property {() => void} [ontoggleMobilenav]
	 */

	/** @type {Props} */
	let { url = '', folders = [], ontoggleMobilenav = () => {} } = $props();

	function handleClick() {
		ontoggleMobilenav();
	}
</script>

<div class="sidenav_heading">Documentation</div>
<nav class="sidenav">
	<ul>
		{#each folders as folder}
			<li>
				<span class="sidenav_folder">{folder.title}</span>
				<ul>
					{#each folder.items as link}
						<li>
							<a
								href={base + link.href}
								class:active={url === base + link.href}
								onclick={handleClick}>{link.label}</a
							>
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
</style>
