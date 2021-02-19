import './App.css';
import {Fragment, useEffect, useState} from 'react';
import Item from "./Item";

const List = ({items}) => {
    const [itemsList, setItemsList] = useState([...items]);
    // const handleUserChange = useCallback((id) => {
    //
    // }, [])

    const handler = (id) => {
        const index = itemsList.findIndex(item => item.id === id);
        const updatedItems = [...itemsList];
        updatedItems[index] = {...updatedItems[index], isSelected: !updatedItems[index].isSelected}
        setItemsList(updatedItems);
    }

    useEffect(() => {
        const updatedItemsByIsClickedField = itemsList.map((item, index) => ({...item, isSelected: false, id: index}))
        setItemsList(() => {
            return updatedItemsByIsClickedField
        });
    }, [])

    return (
        <Fragment>
            <ul className="List">
                {itemsList.map(item => {
                        return ( item.isSelected &&
                            <Item
                                key={item.id}
                                item={item}
                                handleUserChange={handler}
                            />
                        )
                })}
                {itemsList.map(item => {
                    return ( !item.isSelected &&
                        <Item
                            key={item.id}
                            item={item}
                            handleUserChange={handler}
                        />
                    )
                })}
            </ul>
        </Fragment>
    );
}


// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to AVOID UNNECESSARY RE-RENDERS (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------


export default List;