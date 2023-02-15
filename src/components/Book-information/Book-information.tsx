import { Container, Table, TableContainer } from './Book-information.style'

export const BookInformation = () => (
  <Container>
    <h3>Подробная информация</h3>
    <TableContainer>
      <Table>
        <tbody>
          <tr>
            <td>Издательство</td>
            <td>Питер</td>
          </tr>
          <tr>
            <td>Год издания</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>Страниц</td>
            <td>288</td>
          </tr>
          <tr>
            <td>Переплёт</td>
            <td>Мягкая обложка</td>
          </tr>
          <tr>
            <td>Формат</td>
            <td>70х100</td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <tbody>
          <tr>
            <td>Жанр</td>
            <td>Компьютерная литература</td>
          </tr>
          <tr>
            <td>Вес</td>
            <td>370 г</td>
          </tr>
          <tr>
            <td>ISBN</td>
            <td>978-5-4461-0923-4</td>
          </tr>
          <tr>
            <td>Изготовитель</td>
            <td>ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  </Container>
)
