import React, {useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import all_products from '../../assets/Products'
import Card from '../commonfiles/Card'

const Search = () => {
    const[searchParams]=useSearchParams()
    const navigate=useNavigate()
    const categoryQuery=searchParams.get('category')?.toLowerCase() || '';
    const [results, setResults]=useState([])

    useEffect(()=>{
        const filtered=all_products.filter((item)=>
            item.category.toLowerCase()===categoryQuery
        )

        if (filtered.length===0){
            navigate('/')
        }

        else{
            setResults(filtered)
        }
            
    },[categoryQuery, navigate])
  return (
    <div>
        <div className="new_collection">
            <h1>Search Results for '{categoryQuery}'</h1>
            <hr />
            <div className="collections">
                {results.map((card)=>{
                    return<Card key={card.id} id={card.id} name={card.name} img={card.img}
                     new_price={card.new_price} old_price={card.old_price}/>
                })}
            </div>
        </div>

    </div>
  )
}

export default Search