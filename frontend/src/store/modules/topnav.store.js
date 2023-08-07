
const state = {
    isSticky: false,
    topValue: null,
    scrollDirection: "",
    windowScrollY: 0,
}

// Getter functions
const getters = {
    isSticky: state => {
        return state.isSticky;
    },
    topValue: state => {
        return state.topValue;
    }
}

// Actions
const actions = {
    handleScroll({commit, state}, stickyElement) {

        // to know scroll direction
        if(state.windowScrollY < window.scrollY){
            commit('SET_SCROLL_DIR', "down")
        }else{
            commit('SET_SCROLL_DIR', "up")
        }
        // Element-Referenz abrufen
        if(stickyElement !== null) {

            // Position des Elements relativ zum Viewport ermitteln
            const rect = stickyElement.getBoundingClientRect();
            commit('SET_TOP_VALUE', rect.top);

            if(!state.isSticky){
                commit('SET_IS_STICKY', rect.top <= 0);
            }else{
                if(state.scrollDirection === "up"){
                    if(window.scrollY <= 0){
                        commit('SET_IS_STICKY', false);
                    }
                }
            }
        }
        // save scroll top value for detecting up/down
        commit('SET_WINDOW_SCROLL_Y', window.scrollY);
        //console.log(state.scrollDirection)
    },
    async openDropDown({}, route) {
        route.dropdown = true;
        await this.$nextTick(); // Wait for the DOM update before animating
        this.animateDropdownLinks();
    },
}

// Mutations
const mutations = {
    SET_IS_STICKY(state, sticky){
        state.isSticky = sticky;
    },
    SET_TOP_VALUE(state, value){
        state.topValue = value;
    },
    SET_SCROLL_DIR(state, dir){
        state.scrollDirection = dir;
    },
    SET_WINDOW_SCROLL_Y(state, scrollY){
        state.windowScrollY = scrollY;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}