import React from 'react';

function Table({ columns, data, onRowClick, actions }) {
  return (
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
        { data.map((item, index) => (
            <tr className={ `${ onRowClick ? 'clickable' : '' }` } key={ `${ index }-tr` }>
              { Object.values(item).map((value,index) => {
                  return columns[index].subColumns 
                    ? columns[index].subColumns.map((subColumn, index) => 
                        <td onClick={ onRowClick } key={ `${ index }-td-sub` }> 
                          { subColumn.format ? subColumn.format(subColumn.accessor(value)): subColumn.accessor(value) } 
                        </td>
                      )
                    : <td onClick={ onRowClick } key={ `${ index }-td` }> { columns[index].format ? columns[index].format(value): value } </td>
        
              })}
              <td className="table-actions">
                { actions.map(action => 
                  <button className={ action.className } type="button" onClick={ action.onClick } key={ action.text }>{ action.text }</button>
                )}
              </td>
            </tr>
        ))}
      </tbody>     
    </table>
  );
}

export default Table;