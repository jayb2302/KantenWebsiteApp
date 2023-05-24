<template>
<div
  class="drawer-background fixed w-full h-screen left-0 top-o"
  :class="{show: active}"
  @click="$emit('close-product-drawer')"/>
    <div class="drawer" :show="{show:active}">
        <div class="drawer-close" @click="$emit('close-product-drawer')">
            x
        </div>

        <div v-if="product" class="product-details">
            <h3 class="text-center"> {{ product.name }}</h3>
            <p class="description"> {{ product.description }}</p>
            <h3 class="text-center"> {{ product.price.toFixed(2) }}</h3>

            <div class="cart-total" v-if="product_total">
                <h3>In Cart</h3>
                <h4>{{ product_total }}</h4>
            </div>

            <div class="button-container">
                <button class="remove">Remove</button>
                <button class="add">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product', 'active'],
    computed: {
        product_total() {
            return 56.00
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../modules/variables';
.drawer-background {
    z-index: 100;
    background-color: rgba($color: #2f2828ab, $alpha: 0.55);
    display: none;
    transition: display .5s;
    &.show {
        display: block
    }
}

.drawer {
    width: 95vw;
    height: 100vh;
    background-color: &primaryone;
    position: fixed;
    left: 105vw;
    padding: 15px;
    transition: left .5s;
    z-index: 101;
    overflow-y: scroll ;

    &show {
        left: 0;

    }
}

.drawer-close {
    font-size: 1.5rem;
    padding: 5px;
    border-radius: 5px;
    right: 10px;
    border: 2px solid $gray;
    color: $gray;
    width: 15px;
    float: right;
    cursor: pointer;

    &:hover {
        background-color: lightgrey;
    }
}

.product-details {
    display: flex;
    justify-content: center;
    flex-direction: column;
    p.description {
        padding: 20px;
        line-height: 1.5rem;
    }
    .button-container {
        button {
            width: 150px;
            border: none;
            padding: 10px;
            border-radius: 5px;
            margin: 0 5px 50px 5px;
            cursor: pointer;
        }
    }
}
</style>