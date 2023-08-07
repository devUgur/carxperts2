import router from "@/router";

const state = {

}

// Getter functions
const getters = {

}

// Actions
const actions = {
    to({dispatch},route){
        //console.log(route)
        if(route.includes('/')){
            if(route === '/'){
                document.body.scrollIntoView({ behavior:'smooth' });
            }
            dispatch('menu/close',{},{root: true});
            router.push(route);
        }else if(route.includes('#')){
            let target = document.querySelector(route);
            console.log(route, target)
            if(target){
                target.scrollIntoView({behavior: 'smooth'});
            }
        }
    },
    scrollToTopnav(){
        let topnavScrollTopValue = document.getElementById('topnav-component');
        if(topnavScrollTopValue){
            topnavScrollTopValue.getBoundingClientRect().top;
            if(topnavScrollTopValue >= 1){
                console.log(topnavScrollTopValue)
                document.getElementById('topnav-component').scrollIntoView({behavior: 'smooth'})
            }else{
                document.getElementById('collapsed-view').scrollIntoView({behavior: 'smooth'})
            }
        }
    },

    // open Instagram ect.
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