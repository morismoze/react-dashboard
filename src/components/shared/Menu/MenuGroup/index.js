import React from 'react';

import MenuItem from "../MenuItem";

const MenuGroup = ({
    groupName,
    groupItems
}) => {
    return (
        Object.keys(groupItems).map((item, index) => (
            <MenuItem
                itemName={groupItems[item]}
                key={index}
            />
        ))
    );
};

export default MenuGroup;


