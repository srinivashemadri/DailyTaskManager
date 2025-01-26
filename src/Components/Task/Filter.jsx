import React from 'react'

const Filter = ({headerText, filter, setFilter, handleSortBy, handlePriorityFilter, handleReset, tasks, handleCreateTask, createEnabled}) => {
  return (
    <div className='ms-2 mt-4'>
        <div className='ms-2 mt-5 d-flex align-items-center'>
            <h3>{headerText}</h3>
            {
                createEnabled && (
                    <button className='btn btn-info btn-sm text-white ms-auto' onClick={handleCreateTask}>
                        <i className="bi bi-plus-lg"></i>
                    </button>
                )
            }
            
        </div>
        

        <div className='row mt-3 d-flex align-items-center'>
            <div className='col-3'>
                <select 
                    className="form-select" 
                    aria-label="Default select example"
                    value={filter.sortBy}
                    onChange={(e)=>{
                        setFilter({
                            ...filter,
                            'sortBy': e.target.value
                        })
                        handleSortBy(e.target.value, [...tasks]);
                    }}
                >
                    <option value="sort-by" disabled>Sort By</option>
                    <option value="date-low-high">Date Ascending</option>
                    <option value="date-high-low">Date Descending</option>
                </select>
            </div>
            <div className='col-9 d-flex justify-content-end'>
                <div className='d-flex overflow-auto'>
                    <button onClick={()=>{
                        handlePriorityFilter('All');
                    }} className={ (filter.priority === 'All' ? 'btn btn-info': 'btn btn-light') + ' ms-1'}>All</button>

                    <button onClick={()=>{
                        handlePriorityFilter('High');
                    }} className={ (filter.priority === 'High' ? 'btn btn-info': 'btn btn-light') + ' ms-1'}>
                        <i className="bi bi-flag-fill ms-2 me-2 text-danger"></i>
                        High
                    </button>

                    <button onClick={()=>{
                        handlePriorityFilter('Medium');
                    }} className={ (filter.priority === 'Medium' ? 'btn btn-info': 'btn btn-light') + ' ms-1'}>
                        <i className="bi bi-flag-fill ms-2 me-2 text-warning"></i>
                        Medium
                    </button>

                    <button onClick={()=>{
                        handlePriorityFilter('Low');
                    }} className={ (filter.priority === 'Low' ? 'btn btn-info': 'btn btn-light') + ' ms-1'}>
                        <i className="bi bi-flag-fill ms-2 me-2 text-dark"></i>
                        Low
                    </button>

                    <button
                        className='btn btn-light ms-1'
                        onClick={handleReset}
                    >
                        <i className="bi bi-arrow-counterclockwise ms-2 me-2"></i>
                        Reset
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Filter
