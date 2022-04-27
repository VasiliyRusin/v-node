<script>
  export default {
    name: "VNode",
    render: (h, ctx) => ctx.props.vnodes,
    functional: true,
    props: {
      vnodes: {
        type: [Object, Array],
        default: null
      }
    }
  };
</script>
