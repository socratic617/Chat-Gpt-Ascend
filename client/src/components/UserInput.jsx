import React from 'react';
import { Textarea, Button } from '@nextui-org/react';

export default function UserInput({ inputMessage, handleInputChange, handleSubmit}) {
    return (
        <div>
            <Textarea
              className="pb-5 fullwidth"
              label="Have a question?"
              labelPlacement="outside"
              placeholder="Message ResilientGPT..."
              value={inputMessage}
              onChange={handleInputChange}
              rows={3}
              variant="faded"  
            />
            <Button
                fullWidth
                className="mb-10 mt-5"
                color="primary"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    )
}