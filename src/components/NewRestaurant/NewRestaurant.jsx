import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { CATEGORIES, ADD_RESTAURANT } from '../Data/orders'

const NewRestaurant = () => {

  const [category, setCategory] = useState([])
  const [restaurantName, setRestaurantName] = useState('')
  const [restaurantOption, setRestaurantOption] = useState('')

  const { loading, error, data } = useQuery(CATEGORIES)

  const [newRestaurant] = useMutation(ADD_RESTAURANT, {
    update: (cache, data) => {
      console.log(data)
    }
  })

  const hendleClick = () => {
    if (restaurantName == '' || restaurantOption == '') {
      alert('Please fill all the fields')
      return;
    }
    newRestaurant({ variables: { name: restaurantName, categoryId: restaurantOption } })
    alert('Restaurant added')
    window.location.reload()
  }

  useEffect(() => {
    if (data) {
      setCategory(data.categories)
    }
  }, [data])

  return (
    <div className='restaurant'>
      <div className="login-box">
        <h2>New Restaurant</h2>
        <form>
          <div className="user-box">
            <input onChange={(e) => setRestaurantName(e.target.value)} type="text" name="restaurantName" />
            <label>Restaurant name</label>
          </div>
          <div className="user-box">
            <select onChange={(e) => setRestaurantOption(e.target.value)} name="restaurant" className='restaurant-select' id="">
              <option value="null" disabled selected>Select Category</option>
              {
                category?.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))
              }
            </select>
          </div>
          <a onClick={hendleClick} type='submit' href="#">
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