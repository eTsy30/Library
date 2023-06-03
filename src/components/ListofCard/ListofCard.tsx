import { Link } from 'react-router-dom'

import { CardHorisontal } from 'components/Card-horisontal'
import { CardVertical } from 'components/Card-vertical'
import { ListCard, WarningMessage } from 'pages/Main/Main-page-style'
export const ListofCard = ({ bookArr, direction }: any) => {
  return (
    <ListCard>
      {bookArr.length >= 1 ? (
        bookArr.map((card: any) => {
          return (
            <Link to={`/books/${card.attributes.categories?.data[0]?.attributes.path}/${card.id}`} key={card.id}>
              {direction ? (
                <>
                  <p>{process.env.REACT_APP_API_IMG + card.attributes?.image.data[0]?.attributes?.url}</p>
                  <CardHorisontal
                    autor={card.attributes.authors}
                    title={card.attributes.title}
                    raiting={card.attributes?.rating}
                    image={`${process.env.REACT_APP_API_IMG + card.attributes?.image.data[0]?.attributes?.url}`}
                    year={card.attributes.issueYear}
                  />
                </>
              ) : (
                <CardVertical
                  autor={card.attributes.authors}
                  title={card.attributes.title}
                  raiting={card.attributes?.rating}
                  image={`${process.env.REACT_APP_API_IMG + card.attributes?.image.data[0]?.attributes?.url}`}
                  year={card.attributes.issueYear}
                />
              )}
            </Link>
          )
        })
      ) : (
        <WarningMessage>Нет книг в данной категории</WarningMessage>
      )}
    </ListCard>
  )
}
