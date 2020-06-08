import React from 'react'
import WorkItem from './WorkItem';

const workItems = [
  {
    id: 1,
    name: 'Dockabl',
    tag: 'Work management app'
  },
  {
    id: 2,
    name: 'Dockabl',
    tag: 'Work management app'
  },
  {
    id: 3,
    name: 'Dockabl',
    tag: 'Work management app'
  },
  {
    id: 4,
    name: 'Dockabl',
    tag: 'Work management app'
  }
]

export default function WorkList() {
  return (
    <div>
      <div className="work">
        <div className="mycontainer mycontainer--work">
            <h2>Projects</h2>
            <div className="work__items">
                {
                  workItems.map((ele, index)=> <WorkItem key={`workEle${index}`} items={workItems}/>)
                }
            </div>
        </div>
    </div>
    </div>
  )
}
