/**
 * Created by Thao Nguyen on 07/20/2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <input ref={node => {
                input = node
            }}/>{' '}
            <button onClick={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                Add Todo
            </button>
        </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo