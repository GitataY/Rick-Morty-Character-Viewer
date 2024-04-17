import React from 'react'

const Inputgroup = ({total, setId}) => {

    return (
        <div class="input-group mb-3">
            <select onChange={e=>setId(e.target.value)} class="form-select" id="inputGroupSelect01">
                <option selected>Episode...</option>

                {[...Array(total).keys()].map(x=>{
                    return(
                        <option value={x + 1 }>{x + 1}</option> 
                    )
                })}

            </select>
        </div>
  )
}

export default Inputgroup
