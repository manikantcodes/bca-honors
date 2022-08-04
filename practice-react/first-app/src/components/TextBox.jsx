import React, { Component } from 'react'

export default class TextBox extends Component {
    render() {
        return (
            <div><textarea rows={4} placeholder="Message"></textarea>
                <button>Submit</button></div>
        )
    }
}
