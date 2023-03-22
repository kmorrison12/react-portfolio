// contact form to include inputs for name, email address, and a message

import React, { useState } from "react"

function ContactForm() {
    const [input, setInput] = useState('')

    return (
        <div>
            <form className="contact-form"
                onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    value={input}>

                </input>
            </form>
        </div>
    )
}

// notification that a field is reuired when the cursor is moved out of the textbox

// email validationp- message if not valid (email regex)

// what are props

// how to submit form??? should this contact form actually work? where will the input be stored?