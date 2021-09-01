import moment from 'moment'
import SORT_ORDER from '../constants/sortOrders'

export const sortByDate = (array, sortKey, order = SORT_ORDER.ASCENDING) => {
  return array
  .sort((a, b) => {
    const result = moment(a[sortKey]).isAfter(b[sortKey]) ? 1 : -1
    return order === SORT_ORDER.ASCENDING ? result : -result
  })
}