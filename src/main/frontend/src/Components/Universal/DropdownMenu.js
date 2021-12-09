import styled from "styled-components";
import icon from "images/down_arrow_icon.png";
import { useRef, useState } from "react";
import useClickDetect from "Hooks/useClickDetect";

const DropDownButtonList = styled.div`
  width: 180px;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const DropDownButton = styled.button`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
  background-color: transparent;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 3px;
  &:focus {
    border: 2px solid black;
  }
`;

const MenuList = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 45px;
  z-index: 10;
  /* background-color: #f9f9f9; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const Menu = styled.button`
  width: 100%;
  text-decoration: none;
  &:hover {
    color: white;
    background-color: #1d74e9;
  }
  &:focus {
    color: white;
    background-color: #1d74e9;
  }
`;
const Icon = styled.img`
  width: 12px;
  height: 12px;
`;

const DropdownMenu = ({ title, menuList, onSelected, disabled }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const dropDownButtonListRef = useRef(null);
  const dropDownButtonRef = useRef(null);

  useClickDetect(
    dropDownButtonListRef,
    dropDownButtonRef,
    () => setIsMenuOpened(true),
    () => setIsMenuOpened(false)
  );

  return (
    <DropDownButtonList ref={dropDownButtonListRef}>
      <DropDownButton
        ref={dropDownButtonRef}
        disabled={disabled}
        onClick={() => setIsMenuOpened((current) => !current)}
      >
        {title}
        <Icon src={icon} alt="dropdown_img" />
      </DropDownButton>
      {isMenuOpened ? (
        <MenuList>
          {menuList &&
            menuList.map((menu, index) => (
              <Menu key={index} onClick={() => onSelected(menu)}>
                {menu}
              </Menu>
            ))}
        </MenuList>
      ) : (
        ""
      )}
    </DropDownButtonList>
  );
};
export default DropdownMenu;
