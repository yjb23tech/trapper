import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div className="songs">
            <h1>Above It All</h1>
            <Card 
                song_cover_art=""
                song_title="Lost In The World"
                album_icon=""
                album_name="My Beautiful Dark Twisted Fantasy"
                artist_icon=""
                artist_name="Kanye West"
                genre_icon=""
                genre_name="Baroque Rap"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

