import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { RESTAURANT, ADD_BRANCH } from '../Data/orders'

const NewRestaurant = () => {

  const [branch, setBranch] = useState([])
  const { loading, error, data } = useQuery(RESTAURANT)

  const [branchName, setBranchName] = useState('')
  const [branchOption, setBranchOption] = useState('')

  const [newBranch] = useMutation(ADD_BRANCH, {
    update: (cache, data) => {
      console.log(data)
    }
  })

  const handleClick = () => {
    if (branchName == '' || branchOption == '') {
      alert('Please fill all the fields')
      return;
    }
    newBranch({ variables: { name: branchName, restaurantId: branchOption } })
    alert('Branch added')
    window.location.reload()
  }

  useEffect(() => {
    if (data) {
      setBranch(data.restaurants)
    }
  }, [data])

  return (
    <div className='restaurant'>
      <div className="login-box">
        <h2>New Branch</h2>
        <form>
          <div className="user-box">
            <input onChange={(e) => setBranchName(e.target.value)} type="text" name="restaurantName" />
            <label>Branch name</label>
          </div>
          <div className="user-box">
            <select onChange={(e) => setBranchOption(e.target.value)} name="restaurant" className='restaurant-select' id="">
              <option value="null" disabled selected>Select Restaurant</option>
              {
                branch?.map(item => (
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