import GoogleRatings from '@/objects/GoogleRatings.json';

const state = {
    ratings: GoogleRatings,
    mapsUrl: "https://www.google.de/maps/place/CarXperts+-+Ihr+KFZ-Sachverst%C3%A4ndigenb%C3%BCro/@51.4756356,7.4341449,17z/data=!3m1!4b1!4m6!3m5!1s0x47b919466e1d02e1:0x335c41fde3d8f03!8m2!3d51.4756323!4d7.4367198!16s%2Fg%2F11tf21rlqn?entry=ttu",
    ratingsUrl: "https://www.google.com/search?q=CarXperts+-+Ihr+KFZ-Sachverst%C3%A4ndigenb%C3%BCro&dlnr=1&sei=5ePEZOqsC5yOxc8P4t2CuA4#dlnr=1&lrd=0x47b919466e1d02e1:0x335c41fde3d8f03,1,,,,"
}

// Getter functions
const getters = {
    ratings(state){
        return state.ratings;
    },
    ratingsUrl: state => {
        return state.ratingsUrl;
    },
    mapsUrl: state => {
        return state.mapsUrl;
    }
}

// Actions
const actions = {

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