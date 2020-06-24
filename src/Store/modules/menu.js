import { firestoreAction } from 'vuexfire'
import { dbMenuRef } from '../../firebase'



const state = {
    menuItems: []
}

const getters = {
    getMenuItems: state => state.menuItems
}

const mutations = {

}

const actions = {
    setMenuRef: firestoreAction(context => {
        return context.bindFirestoreRef('menuItems', dbMenuRef)
    }),
    addMenuItem: async (context, pizza) => {
        try {
            await dbMenuRef.add(pizza)
        } catch (error) {
            alert('Error!')
        }
    },
    removeMenuItem: async (context, id) => {
        try { 
            const item=await dbMenuRef.doc(id)
            item.delete()
        } catch (error) {
            alert('Error')
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}