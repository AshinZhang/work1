import React from 'react';
import { OverlayTrigger , Popover } from 'react-bootstrap';

export default function (props) {
    const popover = (
        <Popover>
            {
                props.content.map((items, index) => {
                    const span = <span key={index} className='text-muted'>{items}</span>;
                    if (index > 0) {
                        return (
                            <React.Fragment key={index}>
                                <br />
                                {span}
                            </React.Fragment>
                        );
                    }
                    return span;
                })
            }
        </Popover>
    );
    return (
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
            <span className="badge badge-info cursor-pointer">{'说明'}</span>
        </OverlayTrigger>
    );
}