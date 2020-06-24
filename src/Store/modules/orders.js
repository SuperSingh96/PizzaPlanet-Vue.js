import { firestoreAction } from 'vuexfire'
import { dbOrdersRef } from '../../firebase'

const state = {
    orders: [],
}

const getters = {
    numberOfOrders: state => state.orders.length,
    getOrders: state => state.orders
}

const mutations = {
    //addOrder: (state, orders) => state.orders.push(orders)
}

const actions = {
    setOrdersRef: firestoreAction(context => {
        return context.bindFirestoreRef('orders', dbOrdersRef.orderBy('createdAt'))
    }),
    addNewOrder: async (context, order) => {
        try {
            await dbOrdersRef.add(order)
        }
        catch (error) {
            alert('Sorry! Please try again')
        }
    },
    removeOrder: async (context, id) => {
        try {
            const order = await dbOrdersRef.doc(id)
            order.delete()
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