import { useQuery } from 'react-query'
import './App.css'

function App() {
  const fetchData = useQuery('coments', () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
  }, {
    enabled: false // İlk başta otomatik olarak veriyi çekmez.
  })

  const { data, error, isLoading, refetch } = fetchData

  console.log(data, error, isLoading, "data")

  if (isLoading) {
    return <div>Loading...</div>
  }

  // Veri çekme işlemi tamamlandığında rastgele bir yorum seçiyoruz.
  const randomComment = data ? data[Math.floor(Math.random() * data.length)] : null

  return (
    <div>
      <button onClick={() => refetch()}>Veri Çek</button>
      <div>
        {randomComment && <div>{randomComment.body}</div>}
      </div>
    </div>
  )
}

export default App
