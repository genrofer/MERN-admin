import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { BRANCHES, ADD_ITEM } from '../Data/orders'


const NewRestaurant = () => {

  const [category, setCategory] = useState([])
  const { loading, error, data } = useQuery(BRANCHES)

  const [itemName, setItemName] = useState('')
  const [itemPrice, setItemPrice] = useState('')
  const [itemOption, setItemOption] = useState('')

  const [newItem] = useMutation(ADD_ITEM, {
    update: (cache, data) => {
      console.log(data)
    }
  })

  const handleClick = () => {
    if (itemName == '' || itemOption == '' || itemPrice == '') {
      alert('Please fill all the fields')
      return;
    }
    newItem({ variables: { name: itemName, price: itemPrice - 0, branchId: itemOption } })
    alert('Item added')
    // window.location.reload()
  }

  useEffect(() => {
    if (data) {
      setCategory(data.branches)
    }
  }, [data])

  return (
    <div className='restaurant'>
      <div className="login-box">
        <h2>New Item</h2>
        <form>
          <div className="user-box">
            <input onChange={(e) => setItemName(e.target.value)} type="text" name="restaurantName" placeholder='Gamburger' />
            <label>Item name</label>
          </div>
          <div className="user-box">
            <input onChange={(e) => setItemPrice(e.target.value)} type="number" name="restaurantPrice" placeholder='30000' />
            <label>Item price</label>
          </div>
          <div className="user-box">
            <select onChange={(e) => setItemOption(e.target.value)} name="restaurant" className='restaurant-select' id="">
              <option value="null" disabled selected>Select Branch</option>
              {
                category?.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))
              }
            </select>
          </div>
          <a onClick={handleClick} type='submit' href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  )
}

export default NewRestaurant