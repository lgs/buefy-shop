/* eslint-disable key-spacing */

import pkg from '@/store/modules/package'
import cart from '@/store/modules/cart'
import product from '@/store/modules/product'

export const fakeStore = {
  modules: {
    cart,
    product,
    pkg
  },
  strict: false
}