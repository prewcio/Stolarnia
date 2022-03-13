<template>
    <div>
        <main_c1></main_c1>
        <main_c2></main_c2>
        <main_c3></main_c3>
        <main_c4></main_c4>
        <main_c5></main_c5>
    </div>
</template>

<script>
import main_c1 from './MainComp/Main.vue';
import main_c2 from './MainComp/Main2.vue';
import main_c3 from './MainComp/Main3.vue';
import main_c4 from './MainComp/Main4.vue';
import main_c5 from './MainComp/Main5.vue';

export default {
    name: "MainMain",
    components: {
        main_c1,
        main_c2,
        main_c3,
        main_c4,
        main_c5
    }
}
</script>

<style scoped>

</style>
