# @vasiliyrusin/v-node

Using VNodes in the template.

## Install

`npm i @vasiliyrusin/v-node`

## Import

### Global import

```js
import Vue from "vue";
import VNode from "@vasiliyrusin/v-node";

Vue.use(VNode);
```

### Local import

```js
import { VNode } from "@vasiliyrusin/v-node";

export default {
  name: "ComponentName",
  components: { VNode }
}
```

## Example

```vue
<template>
    <VNode :node="exampleJSX"></VNode>
    <VNode :node="exampleCreateElement"></VNode>
    <VNode :node="exampleCreateElementHack"></VNode>
</template>

<script>
    import { VNode } from "@vasiliyrusin/v-node";
    
    export default {
        name: "ExampleComponent",
        components: { VNode },
        computed: {
            exampleJSX () {
                return (<h1>Hello world!</h1>);
            },
    
            exampleCreateElement () {
                return this.$createElement("h1", "Hello world!");
            },
    
            // Not recommended to use it
            exampleCreateElementHack () {
                return [
                    this.$createElement("h1", "Hello world!"),
                    this.$createElement("h1", "Hello world!")
                ];
            }
        }
    }
</script>
```
