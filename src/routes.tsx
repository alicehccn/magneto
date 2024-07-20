import { Route } from "react-router-dom";
import Home from './components/Home/Home'
import Music from './containers/Music/Music'
import Albums from './containers/Photo/Albums'
import Photos from './components/Photos/Photos'
import Lightbox from "./components/Lightbox/Lightbox";
import Events from './containers/Events/Events'
import About from './containers/About/About'
import Beta from './containers/Beta/Beta'

const Routes = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/music" component={Music} />
      <Route path="/photography" exact component={Albums} />
      <Route path="/photography/album/:albumId" exact component={Photos} />
      <Route path="/photography/album/:albumId/:photoId" exact component={Lightbox} />
      <Route path="/events" component={Events} />
      <Route path="/about" component={About} />
      <Route path="/beta" component={Beta} />
    </div>
  )
}

export default Routes
