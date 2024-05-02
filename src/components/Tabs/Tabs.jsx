import React from 'react'
import Tabtest from './Tabtest';

const RandomContent=()=>{
    return <h3>This is a Random Content </h3>
}

const tabs=[
    {
        label:'Tab 1',
        content: <div>This is content for Tab 1 </div>
    },
    {
        label:'Tab 2',
        content:<div>This is content for Tab 2</div>

    },
    {
        label:'Tab 3',
        content: <RandomContent />
    }
]
const handleChange=()=>{
    
}

const Tabs = () => {
  return <Tabtest tabsContent={tabs} onChange={handleChange} />

}

export default Tabs