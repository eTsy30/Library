import { ChangeEvent, MouseEventHandler, useState } from 'react'

import { useParams } from 'react-router-dom'

import { Div, SearchInput } from './Search-style'

import { ReactComponent as Close } from 'assets/icon/Close.svg'
import { ReactComponent as Search } from 'assets/icon/Search.svg'

import { useWidth } from 'hooks/use-width'
import { getFindBooks } from 'redux/getBook/getBooks'
import { setSearchValue } from 'redux/setSearch/setSearch'
import { useAppDispatch } from 'store/hook'

export const SearchComponent = ({ onChange, isActiveSearch }: any) => {
  const dispach = useAppDispatch()
  const { category } = useParams()
  const [inputChange, setInputChang] = useState('')
  const [isActive, setActiveSearch] = useState(isActiveSearch)
  const width = useWidth()
  function SearchChange(e: ChangeEvent<HTMLInputElement>): void {
    setInputChang(e.target.value.toLowerCase())
    console.log(category, 'pathpathpathpathpathpath')

    const data = { category: category, find: e.target.value.toLowerCase() }
    dispach(getFindBooks(data))
  }

  const activeChange: MouseEventHandler = () => {
    if (width < 480) {
      setActiveSearch(false)
      setInputChang('')
      onChange(false)
    }
    setActiveSearch(true)
    setInputChang('')
    onChange(true)
  }

  return (
    <Div data-test-id='input-search' isActiveSearch={isActiveSearch}>
      {inputChange.length <= 0 ? <Search /> : ''}
      <SearchInput
        data-test-id='input-search'
        className='input-field'
        type='text'
        onChange={(e) => SearchChange(e)}
        placeholder='Поиск книги или автора…'
        name='usrnm'
        value={inputChange}
      />
      {inputChange.length > 2 ? <Close data-test-id='button-search-close' onClick={activeChange} /> : ''}
    </Div>
  )
}
