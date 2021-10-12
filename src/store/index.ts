import { reactive } from "vue";

const state = reactive({
    mobile: false,
    char: {
        name: '',
        race: '',
        class: '',
        lv: '',
    }
})

const methods = {
    toggleMobile() {
        state.mobile = !state.mobile
    }
}

export default {
    state,
    methods
}