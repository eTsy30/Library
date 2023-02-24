import { Container, Table, TableContainer } from './Book-information.style'

export const BookInformation = (information: {
  [x: string]: {
    publish: string
    pages: number
    cover: string
    weight: string
    format: string
    ISBN: string
    producer: string
    issueYear: string
  }
}) => {
  const { publish, pages, cover, weight, format, ISBN, producer, issueYear } = information.information

  return (
    <Container>
      <h3>Подробная информация</h3>
      <TableContainer>
        <Table>
          <tbody>
            <tr>
              <td>Издательство</td>
              <td>{publish}</td>
            </tr>
            <tr>
              <td>Год издания</td>
              <td>{issueYear}</td>
            </tr>
            <tr>
              <td>Страниц</td>
              <td>{pages}</td>
            </tr>
            <tr>
              <td>Переплёт</td>
              <td>{cover}</td>
            </tr>
            <tr>
              <td>Формат</td>
              <td>{format}</td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <tbody>
            <tr>
              <td>Жанр</td>
              <td>!!!!!!!!!!!!!!!!!Компьютерная литература</td>
            </tr>
            <tr>
              <td>Вес</td>
              <td>{weight} г</td>
            </tr>
            <tr>
              <td>ISBN</td>
              <td>{ISBN}</td>
            </tr>
            <tr>
              <td>Изготовитель</td>
              <td>{producer}</td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}
