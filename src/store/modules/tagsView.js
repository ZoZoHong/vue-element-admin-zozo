const state = {
    visitedViews: [],
    cachedViews: []
}

const mutations = {
    DEL_VISITED_VIEW: (state, view) => {
        for (const [i, v] of state.visitedViews.entries()) {
            if (v.path === view.path) {
                //   用splice是为了响应式
                state.visitedViews.splice(i, 1)
                break
            }
        }
    },
    DEL_CACHED_VIEW: (state, view) => {
        const index = state.cachedViews.indexOf(view.name)
        index > -1 && state.cachedViews.splice(index, 1)
    },
}
const actions = {
    delAllViews ({ dispatch, state }, view) {
        return new Promise(resolve => {
            dispatch('delAllVisitedViews', view)
            dispatch('delAllCachedViews', view)
            resolve({
                visitedViews: [...state.visitedViews],
                cachedViews: [...state.cachedViews]
            })
        })
    },
    delAllVisitedViews ({ commit, state }) {
        return new Promise(resolve => {
            commit('DEL_ALL_VISITED_VIEWS')
            resolve([...state.visitedViews])
        })
    },
    delAllCachedViews ({ commit, state }) {
        return new Promise(resolve => {
            commit('DEL_ALL_CACHED_VIEWS')
            resolve([...state.cachedViews])
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
