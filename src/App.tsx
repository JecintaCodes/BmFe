import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./router/mainRoute"
import { Provider } from "react-redux"
import { store } from "./components/global/store"

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router={mainRoute}/>

      </Provider>
    </div>
  )
}

export default App