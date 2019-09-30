<script>
  import { Link } from "svelte-routing";
  export let to = "";
  function getProps({ href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    if (isActive) {
      return { class: `${$$props.class} active` };
    }
    return { class: $$props.class };
  }
</script>

<Link {to} {getProps}>
  <slot />
</Link>
