import MenuItem from "./menu-item";

export default function MenuList({list=[]}){
    return (
    <ul className="menulist-container">
       { list && list.length ?
        list.map((listitem)=> <MenuItem item={listitem} />
        ) : null}
    </ul>
    )
}