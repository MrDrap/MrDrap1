import React, { useState, useEffect } from 'react';

function Table({ columns, data, onRowClick, actions = [], itemsPerPage, selectable = false }) {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(itemsPerPage ? data.slice((page - 1) * itemsPerPage , page * itemsPerPage) : data);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  
  
  useEffect(() => {
    if (itemsPerPage) {
      setItems(data.slice((page - 1) * itemsPerPage , page * itemsPerPage));
    }
  }, [page]);

  const handleRowClick = event => {
    setSelectedRowIndex(event.target.id);
    if (onRowClick) {
      onRowClick();
    }
  };

  const pageCount = Math.ceil(parseFloat(data.length / itemsPerPage));

  const pagesButtons = () => {
    const pagesButtons = [];
    
    if (pageCount > 6) {
      // first three pages
      for (let index = 1; index < 4; index++) {
        pagesButtons.push(<button className={page === index ? 'page-button selected' : 'page-button'} onClick={() => setPage(index)} key={ index }>{ index } </button>)
      }
      // ellipsis '...'
      pagesButtons.push(<div className="ellipsis" key="ellipsis">&#8230;</div>);

      // last three pages
      for (let index = pageCount - 2; index < pageCount + 1; index++) {
        pagesButtons.push(<button className={page === index ? 'page-button selected' : 'page-button'} onClick={() => setPage(index)} key={ index }>{ index } </button>)
      }
      
    } else {
      for (let index = 1; index < pageCount + 1; index++) {
        pagesButtons.push(<button className={page === index ? 'page-button selected' : 'page-button'} onClick={() => setPage(index)} key={ index }>{ index } </button>);
      }
    }

    return pagesButtons;
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            { columns.map(column => {
                return column.subColumns
                  ? column.subColumns.map(subColumn => <th key={ subColumn.title }>{ subColumn.title }</th>)
                  : <th key={ column.title }>{ column.title }</th>
            })}
          </tr>
        </thead>
        <tbody>
          { items.map((item, itemIndex) => (
              <tr className={ `${ onRowClick ? 'clickable' : '' } ${ selectable && (itemIndex === parseInt(selectedRowIndex) ? 'selected' : '') }` } key={ `${ itemIndex }-tr` }>
                { Object.values(item).map((value, index) => {
                    return columns[index].subColumns 
                      ? columns[index].subColumns.map((subColumn, innerIndex) => 
                          <td onClick={ handleRowClick } key={ `${ innerIndex }-td-sub` } style={ columns[index].subColumns[innerIndex].styles }> 
                            { subColumn.format ? subColumn.format(subColumn.accessor(value)): subColumn.accessor(value) } 
                          </td>
                        )
                      : <td onClick={ handleRowClick } key={ `${ index }-td` } style={ columns[index].styles } id={ itemIndex }> { columns[index].format ? columns[index].format(value): value } </td>
          
                })}
                { actions.length > 0 && (
                    <td className="table-actions">
                      { 
                        actions.map((action, index) => <div key={`${ index }-actions`}> { action } </div>)
                      }
                    </td>
                )}
                
              </tr>
          ))}
        </tbody>     
      </table>
      { itemsPerPage &&
          <div className="table-pagination">   
            <button className="left" onClick={ () => setPage(page - 1) } disabled={ page === 1 } >
              <ArrowIcon fill={ page === 1 ? '#DCDCDC' :'#1AA5B8' } />
            </button>
            { pagesButtons() }
            <button onClick={ () => setPage(page + 1) } disabled={ page >= pageCount  }>
              <ArrowIcon fill={ page >= pageCount ? '#DCDCDC' :'#1AA5B8' } />
            </button>
          </div>
      }
  
    </>
  );
}

function ArrowIcon({ fill }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2.65625L13.3438 8L8 13.3438L7.0625 12.4062L10.7812 8.65625H2.65625V7.34375H10.7812L7.0625 3.59375L8 2.65625Z" fill={ fill } />
    </svg>
  );
}

export default Table;