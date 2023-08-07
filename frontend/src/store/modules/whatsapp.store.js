
const state = {

}

// Getter functions
const getters = {

}

// Actions
const actions = {
    openWhatsappWeb(){
        window.open('https://web.whatsapp.com/send?autoload=1&app_absent=0&phone=491622025250&text', '_blank');
    }
}

// Mutations
const mutations = {

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}