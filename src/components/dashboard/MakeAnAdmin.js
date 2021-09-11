import React from 'react';

const MakeAnAdmin = () => {
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>

                    <Label className="mt-3 mb-2" for="Product">Product Key</Label>
                    <Input className="form-control" type="text" name="key" placeholder="Add Key" onBlur={onBlur} />

                </FormGroup>
            </Form>
        </div>
    );
};

export default MakeAnAdmin;