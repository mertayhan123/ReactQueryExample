import { useMutation, useQuery } from 'react-query'
import './App.css'

function App() {
  /*const fetchData = useQuery('coments', () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
  }, {
    enabled: false // İlk başta otomatik olarak veriyi çekmez.
  })

  const { data, error, isLoading, refetch } = fetchData
  */

  const {data, mutate,isLoading} =useMutation('users',(newpost) => { 
    return fetch('https://jsonplaceholder.org/users', {
      method: 'POST',
      body: JSON.stringify(newpost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(res => res.json())


  }  
)

  console.log(data, isLoading, "data")

  if (isLoading) {
    return <div>Loading...</div>
  }

  // Veri çekme işlemi tamamlandığında rastgele bir yorum seçiyoruz.
  // const randomComment = data ? data[Math.floor(Math.random() * data.length)] : null

  return (
    <div>
      <button onClick={() => mutate({title:"mert",body:"ayhan"})}>Veri Çek</button>
      {/* <div>
        {randomComment && <div>{randomComment.body}</div>}
      </div> */}
    </div>
  )
}

export default App
