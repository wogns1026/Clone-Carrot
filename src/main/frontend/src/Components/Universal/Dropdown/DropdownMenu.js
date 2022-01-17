import styled from "styled-components";
import icon from "images/down_arrow_icon.png";
import { useRef, useState } from "react";
import useClickDetect from "hooks/useClickDetect";
import { LazyImage } from "..";

const DropDownButtonList = styled.div`
  width: 180px;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const DropDownButton = styled.button`
  ${({ theme }) => theme.common.fullSize};
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
  max-height: 300px;
  margin-top: 45px;
  z-index: 10;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  ${({ theme }) => theme.common.verticalScrollBar};
`;

const Menu = styled.button`
  width: 100%;
  text-decoration: none;
  ${({ theme }) => theme.button.active};
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
        <LazyImage size="12px" src={icon} alt="dropdown_img" />
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
