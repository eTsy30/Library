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
  return (
    <Container>
      {information && (
        <>
          <h3>Подробная информация</h3>
          <TableContainer>
            <Table>
              <tbody>
                <tr>
                  <td>Издательство</td>
                  <td>{information?.information?.publish}</td>
                </tr>
                <tr>
                  <td>Год издания</td>
                  <td>{information?.information?.issueYear}</td>
                </tr>
                <tr>
                  <td>Страниц</td>
                  <td>{information?.information?.pages}</td>
                </tr>
                <tr>
                  <td>Переплёт</td>
                  <td>{information?.information?.cover}</td>
                </tr>
                <tr>
                  <td>Формат</td>
                  <td>{information?.information?.format}</td>
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
                  <td>{information?.information?.weight} г</td>
                </tr>
                <tr>
                  <td>ISBN</td>
                  <td>{information?.information?.ISBN}</td>
                </tr>
                <tr>
                  <td>Изготовитель</td>
                  <td>{information?.information?.producer}</td>
                </tr>
              </tbody>
            </Table>
          </TableContainer>
        </>
      )}
    </Container>
  )
}
