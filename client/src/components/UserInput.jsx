import React from 'react';
import { Textarea, Button } from '@nextui-org/react';

export default function UserInput({ inputMessage, handleInputChange, handleSubmit}) {
    const buttonStyling = {
        background: "#ed1c24",
        fontFamily: "League Gothic",
        fontSize: "large",
        fontWeight: "400",
        letterSpacing: ".05rem",
        textTransform: "uppercase"
    }
    return (
        <div className="user-input-height">
            <Textarea
              className="pb-2 mb-1 fullwidth"
              label="Have a question?"
              labelPlacement="inside"
              placeholder="Message ResilientGPT..."
              value={inputMessage}
              onChange={handleInputChange}
              minRows={2}
              maxRows={2}
              variant="faded"  
            />
            <Button
                style={buttonStyling}
                fullWidth
                className="mb-2 mt-1"
                color="primary"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    )
}