import React, {ChangeEvent, MouseEvent} from 'react'

export const User = () => {
    function onNameChanged(e: ChangeEvent<HTMLTextAreaElement>) {
        console.log(e.currentTarget.name + ': ' + e.target.value)
    }

    function focusLostHandler() {
        console.log('focus lost')
    }
    function onClickUser(e: MouseEvent<HTMLButtonElement>) {
        if(e.currentTarget.name === 'delete') console.log('delete user')
        if(e.currentTarget.name === 'save') console.log('save user')
    }
    function onAgeChanged(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.currentTarget.value)
    }


    return <div>
        <textarea name="textarea" onChange={onNameChanged} onBlur={focusLostHandler}></textarea>
        <input type="number" onChange={onAgeChanged}/>
        <button name='delete' onClick={onClickUser} >delete</button>
        <button name='save' onClick={onClickUser} >save</button>
    </div>
}