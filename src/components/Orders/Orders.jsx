import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import "./Orders.css"

import {ORDERS} from '../Data/orders'

const Orders = () => {

  const [orders, setOrders] = useState([])
  const { loading, error, data } = useQuery(ORDERS)

  useEffect(() => {
    if (data) {
      setOrders(data.orders)
    }
  }, [data])

  return (
    <div>
      <div className="orders">
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order info</th>
              <th>Order person</th>
              <th>Order date</th>
            </tr>
          </thead>

          <tbody>
            {
              orders?.map(item => (
                <tr key={item.id}>
                  <td className='order-id'>{item.id}</td>
                  <td className='item-product'>{item.product}</td>
                  <td className='item-person'>{item.person}</td>
                  <td className='item-date'>{item.date}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Orders