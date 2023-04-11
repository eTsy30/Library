import { SetStateAction, MouseEventHandler, useState } from 'react'

import { ButtonFilter, ButtonLinar, ButtonTablet, ImgSearch, LeftSide, RightSide, Wrapper } from './Navigation-style'

import { ReactComponent as BurgerIcon } from 'assets/icon/Burger.svg'

import { ReactComponent as Search } from 'assets/icon/Search.svg'
import { ReactComponent as TableIcon } from 'assets/icon/Table.svg'

import { SearchComponent } from 'components/search/search'
import { useWidth } from 'hooks/use-width'
import { setReverseBook } from 'redux/getBook/getBooks'
import { useAppDispatch } from 'store/hook'

export const Navigation = ({ onChange }: any) => {
  const dispach = useAppDispatch()
  const [isActiveFilter, setActiveFilter] = useState(false)
  const [isActiveButton, setActiveButton] = useState(true)
  const [isActiveSearch, setActiveSearch] = useState(true)
  const width = useWidth()

  const handleChange: MouseEventHandler = () => {
    setActiveButton(!isActiveButton)
    onChange(isActiveButton)
  }
  const activeChange = (active: SetStateAction<boolean>) => {
    setActiveSearch(active)
  }

  return (
    <Wrapper>
      <LeftSide data-test-id='input-search'>
        {width <= 320 && isActiveSearch ? (
          <ImgSearch
            onClick={() => {
              setActiveSearch(!isActiveSearch)
            }}
          >
            <Search />
          </ImgSearch>
        ) : (
          <SearchComponent data-test-id='input-search' onChange={activeChange} isActiveSearch={isActiveSearch} />
        )}
        {width >= 320 || isActiveSearch ? (
          <ButtonFilter
            $isActive={isActiveFilter}
            onClick={() => {
              setActiveFilter(!isActiveFilter)
              dispach(setReverseBook())
            }}
          >
            <span>По рейтингу</span>
          </ButtonFilter>
        ) : (
          ''
        )}
      </LeftSide>
      {isActiveSearch ? (
        <RightSide>
          <ButtonTablet $isActive={isActiveButton} onClick={handleChange}>
            <TableIcon />
          </ButtonTablet>
          <ButtonLinar $isActive={isActiveButton} data-test-id='button-menu-view-list' onClick={handleChange}>
            <BurgerIcon />
          </ButtonLinar>
        </RightSide>
      ) : (
        ''
      )}
    </Wrapper>
  )
}
